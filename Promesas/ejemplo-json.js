const json = require('./ejemplo.json');
function ejemplo(){
    setTimeout(() => {
        console.log(`El nombre es: ${json.name}`);
    }, 1000);
    setTimeout(() => {
        console.log(`El apellido es: ${json.apellido}`);
    }, 2000);
    setTimeout(() => {
        console.log(`La edad es: ${json.edad}`);
    }, 3000);
    setTimeout(() => {
        console.log(`La profeción es: ${json.profeción}`);
    }, 4000);
}
ejemplo();