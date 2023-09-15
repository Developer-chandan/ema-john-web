// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import '../Cart/Cart.css'
// import Product from "../Product/Product";
import Review from "../Review/Review";
// import { getShoppingCart } from "../../utilities/fakedb";
// import { useState } from "react";
import './order.css'


const Order = () => {
    const cart = useLoaderData();
// console.log(cart)
    return (
        <div>
            <div className="shop_wrap mt-10">
            <div className="review-container">
                  {
                cart.map(product => <Review key={product.id} product={product}></Review>)
                  }

                </div>
                <div className="cart-container order_page_cart px-4">
                   <Cart key={cart.id} cart={cart}></Cart>
                  
                </div>
            </div>
        </div>
    );
};

export default Order;