import "./styles.css"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button } from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Header = () => {

    const history = useHistory();

    const cart = useSelector(state => state.cart)

    return (
        <nav>
            <div className="container-cart">
                <h1 
                    variant="contained" 
                    color="secondary"
                    style={{cursor: "pointer"}} 
                    onClick={() => history.push("/")}>Kenzie Shop</h1>

                <Button
                    className="styleButtonNav" 
                    onClick={() => history.push("/cart")}
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}>Carrinho <span className="styleNavSpan">{cart.length}</span></Button>
     
            </div>
        </nav>
    )
}