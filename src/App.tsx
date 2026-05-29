import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { EmployeeList } from "./employees/EmployeeList";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="employees" list={EmployeeList} />
    </Admin>
  );
}

export default App;
