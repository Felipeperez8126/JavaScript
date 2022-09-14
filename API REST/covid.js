import fetch from 'node-fetch';
const URL ='https://api.coronavirus.data.gov.uk/v1/data'

fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec=Object.values(data);
    for (let i = 0; i < vec.length; i++) {
        for (let j = 0; j < vec[3].length; j++) {
            console.log("Fechas: ", vec[3][j].date, "Muertes:", vec[3][j].death);
        }
    }
})