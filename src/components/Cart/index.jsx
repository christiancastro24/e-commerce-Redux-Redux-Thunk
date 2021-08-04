import { Button } from "@material-ui/core"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { ShowCart } from "../CartProducts"
import "./styles.css"

export const Cart = () => {

    const history = useHistory()

    const cart = useSelector(state => state.cart)

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)

    const testef = () => {
        localStorage.clear()
        toast.success(`Sua compra deu ${totalPrice}!`)
        setTimeout(() => history.go(0), 2000)
    }
  
    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
        <div className="container-items">
            <div className="container-flex">
                {cart.length === 0 && <div className="cartAlone"><span>Carrinho vazio...</span>{"  "}<Button onClick={() => history.push("/")} variant="contained">Ir as compras</Button>
                </div>
                
                }
               {cart.map(product =>  {
                   return (
                    <ShowCart key={product.id} product={product} isRemovable/>
                   )
               }  )}
            </div>

            <div className="total">
                <h3>Resumo do pedido</h3>
                <h5>{cart.length} Produtos</h5><span>Total: R${totalPrice}</span>
                <Button variant="contained" color="secondary" onClick={testef}>Finalizar pedido</Button>
            </div>
        </div>
    </motion.div>
    )
}