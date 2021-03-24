import '../styles/Cart.css';
import { useState } from 'react'

/*const Plant = (name,price) => {
    return name + " : " + price + "€";
}*/

function Cart({cart, updateCart} ) {
    //const monsteraPrice = 8

    //const [] = useState(0)

    const [isOpen, setIsOpen] = useState(true)
    const total= cart.reduce(
        (acc,plantType) => acc + plantType.amount * plantType.price, 0
    )
        return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <ul>
            {cart.map(({ name,price,amount}, index) => (
               <li> <div key={(`${name}-${index}`)}>

                   {amount} x {name} ( {price}€ )
                </div></li>
            ))}
            </ul>

            <h3>Total : {total}€</h3>
                <button onClick={() => updateCart(0)}> Vider </button>

        </div>
    ) : (

        <div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
    )

           /*
            <div className='lmj-cart'>
                <h2>Panier</h2>
                <ul>
                    <li>{monstera}</li>
                    <li>{ivy}</li>
                    <li>{flower}</li>
                </ul>
                <p>Prix total: { totalPrice } €</p></div> )*/

}

export default Cart