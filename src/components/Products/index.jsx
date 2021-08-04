import { useSelector } from "react-redux"
import { Product } from "../Product"
import "./styles.css"

export const Products = () => {

    const products = useSelector(state => state.products)
    return (
        <div className="container-layout">
                {products.map(product => <Product key={product.id} product={product} /> )}
        </div>
    )
}