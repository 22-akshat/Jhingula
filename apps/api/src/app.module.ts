import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health.controller';
import { DbController } from './db/db.controller';

@Module({
  imports: [PrismaModule],
  controllers: [HealthController, DbController],
  providers: [],
})
export class AppModule {}
