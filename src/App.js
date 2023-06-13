import Banner from './component/banner';
import './style/App.css';
import ShoppingList from './component/plantList';
import Footer from './component/footer';
import Cart from './component/cart';
import { useState, useEffect } from 'react';
import QuestionFrom from './questionFrom';



function App() {
	const savecart = localStorage.getItem('cartlocal')
	const [cart, updateCart] = useState(savecart ? JSON.parse(savecart) : []);

	//Viene eseguito ogni volta che cambi il valore di stato di cart dichiarato come secondo parametro
	useEffect(()=>{
		localStorage.setItem('cartlocal', JSON.stringify(cart));
	},[cart]);

	return (
		<div>
			<Banner/>
			<div className='jh-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
			<QuestionFrom />
		</div>
	)
}

export default App
