# Jhingula API

NestJS backend with Prisma and PostgreSQL.

## Database setup

### 1. Set `DATABASE_URL`

From the **monorepo root** (e.g. `jhingula/`), copy the example env and set your PostgreSQL URL:

```bash
cp .env.example .env
```

Edit `.env` and set `DATABASE_URL`:

- **Local:** `postgresql://user:password@localhost:5432/jhingula`
- **Supabase:** `postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true`  
  (Use the connection string from Supabase Dashboard → Project Settings → Database; use “Transaction” mode or disable pgbouncer for migrations.)
- **Railway:** `postgresql://postgres:[password]@[host].railway.app:5432/railway`  
  (From Railway project → Variables.)

### 2. Run migrations

From the **monorepo root**:

```bash
npx prisma migrate deploy
```

For a fresh database, this applies the initial migration and creates all tables.  
To create new migrations after schema changes: `npx prisma migrate dev --name your_migration_name`.

### 3. Start the API

From the **monorepo root**:

```bash
npm run dev:api
```

Or from `apps/api`:

```bash
npm run dev
```

- Health: [http://localhost:3001/health](http://localhost:3001/health) → `{ "status": "ok" }`
- DB ping: [http://localhost:3001/v1/db/ping](http://localhost:3001/v1/db/ping) → `{ "ok": true, "time": "<iso>" }` (performs a Prisma query to verify DB connectivity)

## Environment variables

| Variable       | Required | Description                          |
|----------------|----------|--------------------------------------|
| `DATABASE_URL` | Yes      | PostgreSQL connection string         |
| `PORT`         | No       | Server port (default: 3001)          |

The API loads `.env` from the monorepo root when run via `npm run dev:api`.
