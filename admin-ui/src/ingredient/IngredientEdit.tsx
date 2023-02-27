import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const IngredientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Definition" source="definition" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
