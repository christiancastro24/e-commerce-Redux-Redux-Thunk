import { Switch, Route } from "react-router-dom"
import { Cart } from "../components/Cart"
import { Home } from "../pages/Home"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/cart"> <Cart /> </Route>
        </Switch>
    )
}