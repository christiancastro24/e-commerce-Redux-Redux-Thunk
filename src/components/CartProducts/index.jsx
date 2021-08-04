import { useDispatch } from "react-redux"
import { addToCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks"
import "./styles.css"
import rating from "../../assets/estrela.jpg"

export const ShowCart = ({ product, isRemovable = false }) => {

    const dispatch = useDispatch()

    const { id, name, price, image } = product
    return (
        <div className="container-products-cart">
            <div className="products">
                <img src={image} alt={image} />
                <h4>{name}</h4>
                <h3 className="througt">R$800</h3>
                <h2>R$<strong>{price}</strong></h2>
                <img src={rating} alt={rating} style={{height: "28px", margin: "0"}} />
            <div>
            {isRemovable 
            ?
            <button onClick={() => dispatch(removeFromCartThunk(id))}>Remover Item</button>
            :
            <button onClick={() => dispatch(addToCartThunk(product))}>Adicionar ao carrinho</button>
        }
        </div>
            </div>
        </div>
    )
}