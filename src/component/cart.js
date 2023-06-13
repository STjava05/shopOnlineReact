import { useState, useEffect } from 'react'
import '../style/cart.css'



function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true);


    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )

    useEffect(() => {
        document.title = total;
    },[total])

    //*Delate function
    const deleteItem = (name) => {
        const updatedCarte = cart.map((item) => {
            if (item.name === name) {
                if (item.amount >= 1) {
                    return { ...item, amount: item.amount - 1 };
                }
            }
            return item;
        });
        updateCart(updatedCarte);
        const filteredCart = updatedCarte.filter((item) => item.amount !== 0);
        updateCart(filteredCart);

    };



    return isOpen ? (
        <div className='jh-cart'>
            <button
                className='jh-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Close
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Cart</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                                <button className='btnCreated' onClick={() => deleteItem(name)}>x</button>
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => {
                        updateCart([]);

                    }


                    }>Empty the cart</button>
                </div>
            ) : (
                <div>Your cart is empty</div>
            )}
        </div>
    ) : (
        <div className='jh-cart-closed'>
            <button
                className='jh-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Open Cart
            </button>
        </div>
    )
}

export default Cart