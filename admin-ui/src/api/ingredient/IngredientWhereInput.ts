import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type IngredientWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isValid?: BooleanNullableFilter;
  name?: StringFilter;
};
