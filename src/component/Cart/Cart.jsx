// import React from 'react';
import PropTypes from 'prop-types';

const Cart = (props) => {
  
  Cart.propTypes = {
    cart: PropTypes.object.isRequired, // Here, 'cart' is expected to be an object.

  };

  const { cart } = props;

  // const [price, setPrice] = useState(0)

    let productPrice = 0;
    let totalShipping = 0;
    let tax = 0;
    for (const product of cart){
      productPrice = productPrice + product.price;
      totalShipping = totalShipping + product.shipping;

      tax = tax + parseInt((totalShipping * 0.20));  
    }

    let grandTotal = productPrice + totalShipping + tax;




    return (
        <div>
         <h3 className='text-2xl'>Order Summery</h3>
                    <p className='mt-5'>Selected Items: {cart.length}</p>
                    <p className='mt-5'>Total Pirce: ${productPrice}</p>
                    <p className='mt-5'>Total Shipping Charge: ${totalShipping} </p>
                    <p className='mt-5'>Total Tax: ${tax} </p>
                    <h3 className='mt-5 text-xl'>Grand Total: ${grandTotal} </h3>
                    
        </div>
    );
};

export default Cart;