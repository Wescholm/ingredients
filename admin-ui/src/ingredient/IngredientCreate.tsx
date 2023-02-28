import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const IngredientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="isValid" source="isValid" />
        <TextInput label="Language" source="language" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
