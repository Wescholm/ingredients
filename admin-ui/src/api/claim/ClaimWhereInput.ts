import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ClaimWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  isValid?: BooleanNullableFilter;
  language?: StringFilter;
  name?: StringFilter;
};
