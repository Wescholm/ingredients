import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class HealthServiceBase {
  constructor(protected readonly prisma: PrismaService) {}
  async isDbReady(): Promise<boolean> {
    try {
      await this.prisma.user.findFirst();
      return true;
    } catch (error) {
      return false;
    }
  }
}
