import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./common-components/Header/Header";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { Details } from "./screens/Details";
import { Search } from "./screens/Search";

export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
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
