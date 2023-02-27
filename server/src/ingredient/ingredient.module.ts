import { Module } from "@nestjs/common";
import { IngredientModuleBase } from "./base/ingredient.module.base";
import { IngredientService } from "./ingredient.service";
import { IngredientController } from "./ingredient.controller";
import { IngredientResolver } from "./ingredient.resolver";

@Module({
  imports: [IngredientModuleBase],
  controllers: [IngredientController],
  providers: [IngredientService, IngredientResolver],
  exports: [IngredientService],
})
export class IngredientModule {}
