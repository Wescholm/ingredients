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
import { CreateClaimArgs } from "./CreateClaimArgs";
import { UpdateClaimArgs } from "./UpdateClaimArgs";
import { DeleteClaimArgs } from "./DeleteClaimArgs";
import { ClaimFindManyArgs } from "./ClaimFindManyArgs";
import { ClaimFindUniqueArgs } from "./ClaimFindUniqueArgs";
import { Claim } from "./Claim";
import { ClaimService } from "../claim.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Claim)
export class ClaimResolverBase {
  constructor(
    protected readonly service: ClaimService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Claim",
    action: "read",
    possession: "any",
  })
  async _claimsMeta(
    @graphql.Args() args: ClaimFindManyArgs
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
  @graphql.Query(() => [Claim])
  @nestAccessControl.UseRoles({
    resource: "Claim",
    action: "read",
    possession: "any",
  })
  async claims(@graphql.Args() args: ClaimFindManyArgs): Promise<Claim[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Claim, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Claim",
    action: "read",
    possession: "own",
  })
  async claim(
    @graphql.Args() args: ClaimFindUniqueArgs
  ): Promise<Claim | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Claim)
  @nestAccessControl.UseRoles({
    resource: "Claim",
    action: "create",
    possession: "any",
  })
  async createClaim(@graphql.Args() args: CreateClaimArgs): Promise<Claim> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Claim)
  @nestAccessControl.UseRoles({
    resource: "Claim",
    action: "update",
    possession: "any",
  })
  async updateClaim(
    @graphql.Args() args: UpdateClaimArgs
  ): Promise<Claim | null> {
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

  @graphql.Mutation(() => Claim)
  @nestAccessControl.UseRoles({
    resource: "Claim",
    action: "delete",
    possession: "any",
  })
  async deleteClaim(
    @graphql.Args() args: DeleteClaimArgs
  ): Promise<Claim | null> {
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
