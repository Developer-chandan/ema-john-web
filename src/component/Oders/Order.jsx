// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import '../Cart/Cart.css'
// import Product from "../Product/Product";
import Review from "../Review/Review";
// import { getShoppingCart } from "../../utilities/fakedb";
// import { useState } from "react";
import './order.css'
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";


const Order = () => {
    const savedCart = useLoaderData();
   const [cart, setCart] = useState(savedCart)

   
   const removeCartItem = (id) => {
       const remaining = cart.filter(product => product.id !== id);
       setCart(remaining)
       removeFromDb(id);
    }

   
    const clearAllCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div>
            <div className="shop_wrap mt-10">
            <div className="review-container">
                  {
                cart.map(product => <Review key={product.id} removeCartItem={removeCartItem} product={product}></Review>)
                  }

                </div>
                <div className="cart-container order_page_cart px-4">
                   <Cart clearAllCart={clearAllCart}  cart={cart}></Cart>
                  
                </div>
            </div>
        </div>
    );
};

export default Order;