// import { useState } from "react";

import { getShoppingCart } from "../../utilities/fakedb";


const getCartData = async () => {
    const loadData = await fetch('products.json')
  const product = await loadData.json();

  const cartData = getShoppingCart()
  
const saveCartQuantity = [];
     for(const id in cartData){
         const saveddata = product.find(pd => pd.id === id);
         if(saveddata){
             const quantity = cartData[id]
            saveddata.quantity = quantity;
            
            saveCartQuantity.push(saveddata)
         }
    

        
     }
     
     return saveCartQuantity;




}

export default getCartData;