
import { useState } from 'react'
import '../style/footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')


	function checkInput() {
		if(!inputValue.includes('@')) {
		  alert('Error missing "@"!')
	    }else{
		  alert('Thank you for subscribing!')
		}
	}



	return (
		<footer className='jh-footer'>
			<div className='jh-footer-elem'>
			For plant enthusiasts 🌿🌱🌵
			</div>
			<div className='jh-footer-elem'>Subscribe to our newsletter :</div><input onChange={(e) => setInputValue(e.target.value)} onBlur={checkInput}></input>
		</footer>
	)
}

export default Footer