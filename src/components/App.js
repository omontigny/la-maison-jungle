// import logo from '../logo.svg';
//import '../App.css';
import { useState, useEffect } from 'react'

import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
//import ProgressBar from './ProgressBar'
import '../styles/Layout.css'
//import QuestionForm from './QuestionForm'

function App() {
    const title = `La maison jungle 🙈`;
    const savedCart = localStorage.getItem('panier')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	//const [isFooterShown, updateIsFooterShown] = useState(false)
	useEffect(() => {
    // Sauvegarder le panier
    localStorage.setItem('panier', JSON.stringify(cart))
    //let cart = localStorage.getItem('panier');
}, [cart])

/*    useEffect(() => {
		console.log(` 2️⃣ Cette alerte s'affiche au premier rendu`)
        localStorage.getItem('panier', JSON.parse(cart))
	},[])*/

  return (
 		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>{title}</h1>
			</Banner>
			<div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart}  />
                <ShoppingList cart={cart} updateCart={updateCart} />
			</div>
     {/*       <div>
                <ProgressBar />
            </div>*/}
        {/*    <button onClick={() => updateIsFooterShown(!isFooterShown)}> Cacher ! </button>
			{
				isFooterShown && <Footer cart={cart} />
			}*/}
			<Footer cart={cart} />
		</div>
  );
}

export default App;
