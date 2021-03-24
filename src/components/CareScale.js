//import '../styles/CareScale.css';

import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

 function CareScale({scaleValue, careType}) {
/*    const scaleValue = props.scaleValue;
     const careType = props.careType;*/
     // const {scaleValue, careType} = props;

    const range = [1,2,3,4,5];
    const scaleType = careType === 'light' ? (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)

    return (
        <div>
            {range.map((rangeElem) =>
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null )}️
        </div>)
}

/*
function CareScale(props) {
    const scaleValue = props.scaleValue
    console.log(scaleValue);
    return <div>{scaleValue}☀️</div>
}
*/


export default CareScale