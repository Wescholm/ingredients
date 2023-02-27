/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateIngredientArgs } from "./CreateIngredientArgs";
import { UpdateIngredientArgs } from "./UpdateIngredientArgs";
import { DeleteIngredientArgs } from "./DeleteIngredientArgs";
import { IngredientFindManyArgs } from "./IngredientFindManyArgs";
import { IngredientFindUniqueArgs } from "./IngredientFindUniqueArgs";
import { Ingredient } from "./Ingredient";
import { IngredientService } from "../ingredient.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ingredient)
export class IngredientResolverBase {
  constructor(
    protected readonly service: IngredientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "read",
    possession: "any",
  })
  async _ingredientsMeta(
    @graphql.Args() args: IngredientFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Ingredient])
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "read",
    possession: "any",
  })
  async ingredients(
    @graphql.Args() args: IngredientFindManyArgs
  ): Promise<Ingredient[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Ingredient, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "read",
    possession: "own",
  })
  async ingredient(
    @graphql.Args() args: IngredientFindUniqueArgs
  ): Promise<Ingredient | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ingredient)
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "create",
    possession: "any",
  })
  async createIngredient(
    @graphql.Args() args: CreateIngredientArgs
  ): Promise<Ingredient> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ingredient)
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "update",
    possession: "any",
  })
  async updateIngredient(
    @graphql.Args() args: UpdateIngredientArgs
  ): Promise<Ingredient | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ingredient)
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "delete",
    possession: "any",
  })
  async deleteIngredient(
    @graphql.Args() args: DeleteIngredientArgs
  ): Promise<Ingredient | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}