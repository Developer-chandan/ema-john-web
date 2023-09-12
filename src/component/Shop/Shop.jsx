
import { useEffect, useState } from 'react';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    // const [price, setPrice] = useState(0);


    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data)) 
        
    },[])

    const handleaddToCart = (product) =>{
        const cartProdct = [...cart, product];
        setCart(cartProdct);
        console.log('Product in cart', cartProdct);
        // const cartProductPrice = [...price, cartProdct.prce]
       
        
}
    

    return (
        <section >
            
            <div className="shop_wrap mt-10">
            <div className="product-container grid grid-cols-3 gap-8 px-16">
                    {
                    products.map( product => <Product 
                    key={product.id}
                    product={product}
                    handleaddToCart={handleaddToCart}>
                         </Product>)}
                    

                </div>
                <div className="cart-container px-4">
                   <Cart cart={cart}></Cart>
                  
                </div>
            </div>
        </section>
    );
};

export default Shop;