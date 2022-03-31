import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToLocalStorage, getFromLocalStorage, removeLocalStorage } from "../Utilities/Utilities";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // nicher if condition ta bujini?
    if (products.length) {
      const storedProdcutIds = getFromLocalStorage()
      const previousCart = []
      for (const id in storedProdcutIds) {
        console.log(id)
        const foundProduct = products.find(product => product.id == id)
        console.log(foundProduct)
        if (foundProduct) {
          const quantity = storedProdcutIds[id]
          foundProduct.quantity = quantity
          previousCart.push(foundProduct)
        }
      }
      setCart(previousCart)
    }
  }, [products])

  const handleAddToCart = (selectedProduct) => {
    let newCart = []
    const exist = cart.find(product => product.id == selectedProduct.id)
    if (!exist) {
      selectedProduct.quantity = 1
      newCart = [...cart, selectedProduct]
    }
    else {
      // const rest = cart.filter((product) => product.id !== selectedProduct.id);
      // selectedProduct.quantity = selectedProduct.quantity + 1
      // newCart = [...rest, selectedProduct]
      selectedProduct.quantity = selectedProduct.quantity + 1
      newCart = [...cart]
    }
    addToLocalStorage(selectedProduct.id)
    getFromLocalStorage()
    setCart(newCart)
  };

  const handleClearCart = () => {
    setCart([]);
    removeLocalStorage();
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
