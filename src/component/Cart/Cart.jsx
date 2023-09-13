// import React from 'react';
import PropTypes from 'prop-types';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
  
  Cart.propTypes = {
    cart: PropTypes.object.isRequired, // Here, 'cart' is expected to be an object.

  };

  const { cart } = props;

  // const [price, setPrice] = useState(0)

    let productPrice = 0;
    let totalShipping = 0;
    let tax = 0;
    let quanity = 0;

    for (const product of cart){
      // console.log('product quantity:',product.quantity)
      if(product.quantity == 0){
        product.quantity = 1;}

        productPrice = productPrice + product.price * product.quantity;
        
        totalShipping = totalShipping + product.shipping;
        quanity = quanity + product.quantity;

      tax = tax + parseInt((totalShipping * 0.20)); 
      
    }

    let grandTotal = productPrice + totalShipping + tax;




    return (
        <div>
         <h3 className='text-2xl'>Order Summery</h3>
                    <p className='mt-5'>Selected Items: {quanity}</p>
                    <p className='mt-5'>Total Pirce: ${productPrice}</p>
                    <p className='mt-5'>Total Shipping Charge: ${totalShipping} </p>
                    <p className='mt-5'>Total Tax: ${tax} </p>
                    <h3 className='mt-5 text-xl'>Grand Total: ${grandTotal} </h3>
                    <button
  type="button"
  onClick = {deleteShoppingCart}
  className="inline-block rounded mt-4 text-orange-50 bg-red-500 w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
  Delete Cart
  <FontAwesomeIcon icon={faTrashCan} className='ml-2 text-orange-50'/>
</button>
                    
                    
        </div>
    );
};

export default Cart;