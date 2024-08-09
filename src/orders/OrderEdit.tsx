import * as React from "react";
import { Edit, SimpleForm, TextInput, TranslatableInputs, ArrayInput, SimpleFormIterator} from 'react-admin';

export const OrderEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="customer"/>
      <TranslatableInputs locales={['en', 'fr']}>
        <ArrayInput source="items">
          <SimpleFormIterator>
            <TextInput source="name"/>
          </SimpleFormIterator>
        </ArrayInput>
      </TranslatableInputs>
    </SimpleForm>
  </Edit>
);
