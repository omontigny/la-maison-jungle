import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem({ id, cover, name, price, water, light }) {
return (
    <li key={id} className='lmj-plant-item' onClick={handleClick} >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name} ( {price} € )
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
    )
}

/*function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix  🌱✨`)
    console.log('✨ Ceci est un clic ✨')
}*/

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}

export default PlantItem