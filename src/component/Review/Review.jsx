// import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./review.css"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const Review = ( product ) => {
    console.log('data from review page', product)
    const { removeCartItem } = product; 
    const { id, img, name, price, shipping, quantity } = product.product;



    return (
        <div className="review_product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product_details pt-4">
                <h6 className="text-xl text-blue-600">{name}</h6>
                <p className="">Price: <span className="text-orange-600">${price * quantity}</span></p>
                <p>Shipping Charge: <span className="text-orange-600">${shipping}</span></p>
            </div>
            <div className="icon">
                <button onClick={() => removeCartItem(id)} className="pointer">
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>

        </div>
    );
};

export default Review;