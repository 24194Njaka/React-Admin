import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  TextInput,
  SelectInput,
} from "react-admin";

// Filtres
const employeeFilters = [
  <TextInput key="search" source="q" label="Recherche" alwaysOn />,
  <SelectInput
    key="department"
    source="department"
    label="Département"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "Marketing", name: "Marketing" },
      { id: "RH", name: "RH" },
      { id: "Finance", name: "Finance" },
    ]}
  />,
];

export const EmployeeList = () => (
  <List filters={employeeFilters} perPage={5}>
    <Datagrid rowClick="edit">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <TextField source="email" />
      <TextField source="department" label="Département" />
      <NumberField
        source="salary"
        options={{ style: "currency", currency: "EUR" }}
      />
      <BooleanField source="active" label="Actif" />
    </Datagrid>
  </List>
);
