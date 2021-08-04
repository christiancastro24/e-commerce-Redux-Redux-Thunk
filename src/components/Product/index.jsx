import { useDispatch } from "react-redux"
import { addToCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks"
import { motion } from "framer-motion"
import rating from "../../assets/estrela.jpg"
import "./styles.css"

export const Product = ({ product, isRemovable = false }) => {

    const { id, name, price, image} = product

    const dispatch = useDispatch() 

    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
        <div className="container">
            <div className="container-products">
                <div className="products">
                    <img src={image} alt={image} />
                    <h4>{name}</h4>
                    <h3 className="througt">R$900</h3>
                    <h2>R$<strong>{price}</strong></h2>
                    <img src={rating} alt={rating} style={{height: "28px", margin: "0"}} />
                    <br /><br />
            <div className="payButton">
            {isRemovable 
            ?
            <button onClick={() => dispatch(removeFromCartThunk(id))}>Remover Item</button>
            :
            <button onClick={() => dispatch(addToCartThunk(product))}>Adicionar ao carrinho</button>
        }
            </div>
          </div>
        </div>
      </div>
    </motion.div> 
    )
}