import { Module } from "@nestjs/common";
import { ClaimModuleBase } from "./base/claim.module.base";
import { ClaimService } from "./claim.service";
import { ClaimController } from "./claim.controller";
import { ClaimResolver } from "./claim.resolver";

@Module({
  imports: [ClaimModuleBase],
  controllers: [ClaimController],
  providers: [ClaimService, ClaimResolver],
  exports: [ClaimService],
})
export class ClaimModule {}
