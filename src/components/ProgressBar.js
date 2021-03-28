//import React from "react";
import React,{useState,useEffect} from 'react';
//import { projectItems } from '../data/projectItems'
import ProgressItem from './ProgressItem'
import GaugeChart from 'react-gauge-chart'

import '../styles/ProgressItem.css'



function ProgressBar() {
  //const completed=0;
    //Reading and Get info from JSON
//     let initData = [
//   { bgcolor: "#6a1b9a", barcolor:"#c2adde"  },
//   { bgcolor: "#00695c", barcolor: "#8dcfc5" },
//   { bgcolor: "#ef6c00", barcolor: "#e5cdb3" },
// ];

  // useState   nous renvoie une paire de valeurs dans un tableau de 2 éléments,
  // que nous récupérons dans les variables  data   et  setData   dans notre exemple.
  // Le premier élément est la valeur actuelle, et le deuxième est une fonction qui permet de la modifier.

  const [data3,setData]=useState([]);
  const [colors,setColors]=useState([]);
  //const url='https://itr.freeboxos.fr/data.json';
  //const url='https://xxxxx/data.json';


  const getData=(json)=>{
    fetch(`${json}`
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    //getData(`${url}`)
    getData('data.json')
  },[])

  //getData('data.json');


  const getColors=(jsonFile)=>{
    fetch(`${jsonFile}`
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        //console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
        setColors(myJson)
      });
  }
  useEffect(()=>{
    getColors('colors.json')
  },[])

 // getColors('colors.json')
console.log('before concat:' , data3);

colors.map((item,index) => {
  const keys = Object.keys(item);
  const values= Object.values(item);
  keys.forEach((key, idx) => {
    //console.log(key + "-" + values[idx])
    data3[index][`${key}`] = values[idx]
  })
 return data3
})

  console.log('after concat:' , data3);

  const chartStyle = {
    width: '90%',
    fontWeight: 'bold',
}


  return (
      <div>
     {data3.map((item, idx) => (
        <ProgressItem key={idx}  name={item.name} barcolor={item.barcolor} bgcolor={item.bgcolor} completed={Math.round(item.current / item.max * 100)} max={item.max} current={item.current} />
        ))}
        {/*<div className='brgm-progress-bar-container'>
        {data3.map((item, idx) => (
            <div className='bgrm-div-style'>
              <span style={{color: `${item.barcolor}`, fontWeight: 'bold'}} className='brgm-progress-item-name'>  {item.current} / {item.max} </span>
          <GaugeChart key={item.id} id="gauge-chart2"  style={chartStyle} textColor={item.bgcolor} needleColor="#A2A0A0"
                      nrOfLevels={20}
                      colors={[`${item.barcolor}`, `${item.bgcolor}`]}
                      percent={ item.current / item.max }
          />
              <span style={{color: `${item.barcolor}`, fontWeight: 'bold'}}>{item.name}</span>
          </div>
          ))}
          </div>*/}
    </div>
/*<span className='brgm-progress-item-name' style={nameStyle}>{`${name}`}</span>
            <span className='brgm-progress-item-pourcent' >{`${completed}%`}</span>
            <span className='brgm-progress-item-background-labels' */

  )
}

export default ProgressBar
