
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
  // console.log(props.product);
  const { name, img, price, seller, ratings } = props.product;
  const handleaddToCart = props.handleaddToCart;

  Product.propTypes = {
    product: PropTypes.object.isRequired, // Here, 'product' is expected to be an object.
    handleaddToCart: PropTypes.func.isRequired, // 'handleaddToCart' should be a required function prop.

  };
  

  return (
    <div className="">
      <div
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light">
          <img
            className="rounded-t-lg w-full h-[340px]"
            src={img}
            alt="" />
          <a href="#!">
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
        <div className="p-6">
          <p
            className="mb-2 font-medium leading-tight text-blue-800 ">
            {name}
          </p>
          <p className="mb-4 text-base text-neutral-600 ">
            Price: ${price}
          </p>
          <p className="mb-4 text-base text-neutral-600 ">
            Menufecturer: {seller}
          </p>
          <p className="mb-4 text-base text-neutral-600 ">
            Ratings: {ratings} star
          </p>
          <button
            type="button"
            className="inline-block rounded bg-[#1C2B35] w-full px-6 pb-3 pt-3 text-xs text-[orange] font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={ () => handleaddToCart(props.product)}>
            Add To Cart
            <FontAwesomeIcon icon={faCartShopping} className='ml-4'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;