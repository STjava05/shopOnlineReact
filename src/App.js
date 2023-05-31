import Banner from './component/banner';
import './style/App.css';
import DisplayPlantList from './component/plantList';
import Footer from './component/footer';
import Cart from './component/cart';
import { useState } from 'react';

function App() {
  const [cart, updateCart] = useState({})

	return (
		<div>
			<Banner/>
			<div className='jh-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<DisplayPlantList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
