var num = [];

for (let i= 0; i <= 19; i++){
    num [i] = Math.round((Math.random())*100);
}

// console.log(num.sort(function (a, b){
//     return a - b;
// }))

console.log(num.sort((a, b) => a - b ));