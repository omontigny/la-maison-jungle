import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		   //console.log(inputValue)
		   !inputValue.includes('@') && alert("🔥 Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 🥲")
	   }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<div>
            <input
				placeholder='Entrez votre mail'
				onChange={handleInput}
                onBlur={handleBlur}
            />
            <button onClick={() => alert("Merci " + inputValue)}> Send 🛫</button>
        </div>
		</footer>
	)
}


export default Footer