import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IngredientServiceBase } from "./base/ingredient.service.base";

@Injectable()
export class IngredientService extends IngredientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
