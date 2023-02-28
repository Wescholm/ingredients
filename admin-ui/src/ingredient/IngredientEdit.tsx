import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const IngredientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="isValid" source="isValid" />
        <TextInput label="Language" source="language" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
