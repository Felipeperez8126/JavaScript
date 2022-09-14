// Promise------
const promise = new Promise((resolve, reject) => {
    resolve('Hola...')
    })
    .then(value => {
        console.log('Nosotros');
        return value;
    })
    .then(value => {
        console.log('Amamos');
        return value;
    })
    .then(value => {
        console.log('La programación');
        return value;
    })
    .then(value => {
        console.log('Y tu que esperas para aprender..');
        return value;
    })
    .then(value => {
        console.log('---------------------------------');
        return value;
    })
    .catch(value => {
        console.log('error');
    })
// Async / Awit------
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(() => {resolve('ejempo de aync await');}, 3000);
    });
    const n = await myPromise;
    console.log(n);
    }
    myDisplay(); 

//Ejmplo2 
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  f1();

  async function f2() {
    var y = await 20;
    console.log(y); // 20
  }
  f2();

  async function f3() {
    try {
      var z = await Promise.reject(30);
    } catch(e) {
      console.log(e); // 30
    }
  }
  f3();