import { constants } from 'buffer';
import fetch from 'node-fetch';
const URL=/*'https://pokeapi.co/api/v2/pokemon' */'https://api.covid19api.com/countries/'
//let vec=[];
fetch(URL)
.then(res=>res.json())
.then(data=>{
    let paises=[]
    let vec=Object.values(data);
    // for (let i = 0; i < vec.length; i++) {
    //     for (let j = 0; j < vec.length; j++) {
    //         //console.log(vec[j].Country);
    //         paises.push(vec[j].Country)
    //     }
    // }
    for (let j = 0; j < vec.length; j++) {
        //console.log(vec[j].Country);
        paises.push(vec[j].Country);
    }
    paises.sort();
    console.log('Pais: ',paises);
})


async function loader(){
    const res=await fetch(URL);
    const data=await res.json();
}
loader()
//https://documenter.getpostman.com/view/10808728/SzS8rjbc