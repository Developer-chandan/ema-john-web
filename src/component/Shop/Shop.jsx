
import { useEffect, useState } from 'react';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb'

const Shop = () => {

    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
 


    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data)) 
        
    },[])



// To show the data saved data of localStorage on UI 
// there is 5 steps 
useEffect (() => {
//    s-1: get the data from database
    const storedProduct = getShoppingCart();
    const storeInCart = [];
    // s-2 get product id and quanity 
    for (const id in storedProduct){
        // to find quantity 
        const addedProduct = products.find(product => product.id == id);
        // console.log("added product",addedProduct)
        if(addedProduct){
            const savedQuantity = storedProduct[id]
            // set quantity to added product 
            addedProduct.quantity = savedQuantity;
            storeInCart.push(addedProduct);
           
        }
       
    }
setCart(storeInCart);
}, [products])



    const handleaddToCart = (product) =>{


        let newCart = [];
        //if cart product dose not exist we'll add cart = 1
        //if cart exist we'll update cart with newcart
        const exist = cart.find(pd => pd.id === product.id);
        // if there is not product in cart
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product]
        }else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist]

        }

        // const cartProdct = [...cart, product];
        setCart(newCart);
        // addToDb(product.id)
        addToDb( product.id);
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