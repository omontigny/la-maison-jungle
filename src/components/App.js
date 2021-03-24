// import logo from '../logo.svg';
//import '../App.css';
import { useState } from 'react'

import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import ProgressBar from './ProgressBar'
import '../styles/Layout.css'
//import QuestionForm from './QuestionForm'

function App() {
    const title = `La maison jungle 🙈`;
    const [cart, updateCart] = useState([])

  return (
 		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>{title}</h1>
			</Banner>
			<div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
			</div>
            <div>
                <ProgressBar />
            </div>
			<Footer />
		</div>
  );
}

export default App;
