import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IngredientService } from "./ingredient.service";
import { IngredientControllerBase } from "./base/ingredient.controller.base";

@swagger.ApiTags("ingredients")
@common.Controller("ingredients")
export class IngredientController extends IngredientControllerBase {
  constructor(
    protected readonly service: IngredientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
