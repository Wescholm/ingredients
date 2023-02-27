import { IngredientWhereInput } from "./IngredientWhereInput";
import { IngredientOrderByInput } from "./IngredientOrderByInput";

export type IngredientFindManyArgs = {
  where?: IngredientWhereInput;
  orderBy?: Array<IngredientOrderByInput>;
  skip?: number;
  take?: number;
};
