import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('v1/db')
export class DbController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('ping')
  async ping() {
    await this.prisma.tenant.count();
    return {
      ok: true,
      time: new Date().toISOString(),
    };
  }
}
