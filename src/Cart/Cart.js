import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";
import { useEffect, useState } from "react";

const Cart = ({ cart, products, handleClearCart }) => {
  const [freeProduct, setFreeProduct] = useState({});
  const [offer, setOffer] = useState(false)

  const handleOffer = () => {
    let rendomNumber = Math.floor(Math.random() * products.length)
    setFreeProduct(products[rendomNumber])
  }
  useEffect(() => {
    if(cart.length > 0){
      setOffer(true)
    }
    else{
      setOffer(false)
    }
  },[cart.length])
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
            <p>$ {product.quantity}</p>
          </div>
        </div>
      ))}
      <p>Buy one get one free</p>
      <button onClick={handleOffer} className={offer ? 'offer-button'  : 'offer-btn-disabled' } disabled={!offer}>Get one for me</button>
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
