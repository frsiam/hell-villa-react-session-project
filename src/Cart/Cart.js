import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";
import { useState } from "react";

const Cart = ({ cart, products, handleClearCart }) => {
  const [freeProduct, setFreeProduct] = useState({});

  const handleOffer = () => {
    let rendomNumber = Math.floor(Math.random() * products.length)
    setFreeProduct(products[rendomNumber])
  }
  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>Order Summery</h1>
        <button
          onClick={handleClearCart}
          className='remove-button'
          title='Clear Cart'
        >
          <IoTrashBin color='white' size={20} />
        </button>
      </div>
      {cart.map((product, index) => (
        <div key={index} className='cart-item'>
          <img src={product.pairImage} alt='' />
          <div>
            <p>
              {product.name} {product.color}
            </p>
            <p>$ {product.price}</p>
          </div>
        </div>
      ))}
      <p>Buy one get one free</p>
      <button onClick={handleOffer} className="offer-button">Get one for me</button>
      {Object.keys(freeProduct).length > 0 && (<div className='cart-item'>
        <img src={freeProduct.pairImage} alt='' />
        <div>
          <p>
            {freeProduct.name} {freeProduct.color}
          </p>
          <p>$ {freeProduct.price}</p>
        </div>
      </div>)}
    </div>
  );
};

export default Cart;
