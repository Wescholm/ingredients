import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const IngredientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Definition" source="definition" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
