import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart)
  // console.log(products);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCart = []
    const exist = cart.find(product => product.id == selectedProduct.id)
    if(!exist){
      selectedProduct.quantity = 1
      console.log('age theke nai')
      newCart = [...cart, selectedProduct]
    }
    else{
      // const rest = cart.filter((product) => product.id !== selectedProduct.id);
      // selectedProduct.quantity = selectedProduct.quantity + 1
      // newCart = [...rest, selectedProduct]
      selectedProduct.quantity = selectedProduct.quantity + 1
      newCart = [...cart]
    }
    setCart(newCart)
  };

  const handleClearCart = () => {
    setCart([])
  };

  return (
    <>
      <div className='shop'>
        <div className='products-container'>
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div className='cart-container'>
          <Cart
            cart={cart}
            products={products}
            handleClearCart={handleClearCart}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
