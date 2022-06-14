import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';
import carro from "@icons/cart.png";


const ProductItem = ({ product }) => {
	const {addToCart} = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src= {product.images[0]} alt="{product.title}" />
			{/* <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.
			jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
			<div className="product-info">
				<div>
				
				<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={carro} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;