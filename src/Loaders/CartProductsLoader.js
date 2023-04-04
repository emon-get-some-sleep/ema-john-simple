import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
    const loadProducts = await fetch('products.json');
    const products = await loadProducts.json();
    const savedCart = [];
    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id == id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
        }
        savedCart.push(addedProduct);
    }

    // if you need to send two things 
    // return [products, savedCart];

    // another option 
    // return {products, cart: savedCart};

    // console.log(products);
    return savedCart;
}

export {cartProductsLoader};