import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { UserList } from "./users";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} show={ShowGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
);
