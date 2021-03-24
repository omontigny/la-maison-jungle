import { useState } from 'react'

import '../styles/ShoppingList.css';
import PlantItem from './PlantItem'
import Categories from './Categories'
import { plantList } from '../data/plantList'

function ShoppingList({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

   function addToCart(name,price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
       if(currentPlantAdded) {
           const cartFilteredCurrentPlant = cart.filter(
               (plant) => plant.name !== name
           )
           updateCart([
               ...cartFilteredCurrentPlant, {name, price, amount: currentPlantAdded.amount + 1 }
           ])
       }else {
           updateCart([...cart, {name, price, amount: 1}])
       }
   }



    return (
        <div className='lmj-shopping-list'>
            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

            <ul className='lmj-plant-list'>
                {plantList.map((plant) =>
                    !activeCategory || activeCategory === plant.category ? (
                    <div key={plant.id}>
                    <PlantItem
                        cover={plant.cover}
                        name={plant.name}
                        price={plant.price}
                        water={plant.water}
                        light={plant.light}
                    />
                    <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                    </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList