import { SortOrder } from "../../util/SortOrder";

export type ClaimOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isValid?: SortOrder;
  language?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
