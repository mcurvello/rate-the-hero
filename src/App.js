import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Details } from "./screens/Details";
import { Search } from "./screens/Search";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/detalhes/:id" exact>
            <Details />
          </Route>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="*">Página não encontrada</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
