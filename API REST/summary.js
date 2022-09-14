import { constants } from 'buffer';
import fetch from 'node-fetch';
const URL=/*'https://pokeapi.co/api/v2/pokemon' */'https://api.covid19api.com/summary'
//let vec=[];
fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec=Object.values(data);
    for (let i = 0; i < vec.length; i++) {
        for (let j = 0; j < vec[3].length; j++) {
            console.log('Nombre País: ', vec[3][j].Country);
            console.log('Totad de muertes:', vec[3][j].TotalDeaths);
            console.log('Fecha: ',vec[3][j].Date);
            console.log('Total de confimados: ', vec[3][j].TotalConfirmed);
            console.log('');
        }
    }
})

async function loader(){
    const res=await fetch(URL);
    const data=await res.json();
}
loader()
//https://documenter.getpostman.com/view/10808728/SzS8rjbc