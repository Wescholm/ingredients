import { SortOrder } from "../../util/SortOrder";

export type IngredientOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isValid?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
