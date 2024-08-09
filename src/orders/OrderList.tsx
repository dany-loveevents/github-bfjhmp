import * as React from "react";
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const OrderList = () => (
  <List>
      <Datagrid>
          <TextField source="id" />
          <TextField source="customer" />
          <EditButton />
      </Datagrid>
  </List>
);
