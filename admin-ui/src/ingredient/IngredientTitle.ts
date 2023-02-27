import { Ingredient as TIngredient } from "../api/ingredient/Ingredient";

export const INGREDIENT_TITLE_FIELD = "name";

export const IngredientTitle = (record: TIngredient): string => {
  return record.name || String(record.id);
};
