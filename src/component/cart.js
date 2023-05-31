import { useState } from 'react'
import '../style/cart.css'

function Cart({ cart, updateCart }) {
  const monsteraPrice = 8
  const [isOpen, setIsOpen] = useState(true)

  return isOpen ? (
      <div className='jh-cart'>
          <button
              className='jh-cart-toggle-button'
              onClick={() => setIsOpen(false)}
          >
              Close
          </button>
          <h2>Cart</h2>
          <h3>Total: {monsteraPrice * cart}€</h3>
          <button onClick={() => updateCart(0)}>Clear cart</button>
      </div>
) : (
      <div className='jh-cart-closed'>
          <button
              className='jh-cart-toggle-button'
              onClick={() => setIsOpen(true)}
          >
              Open cart
          </button>
      </div>
  )
}

export default Cart