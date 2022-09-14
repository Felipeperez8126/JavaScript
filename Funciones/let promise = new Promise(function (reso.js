let promise = new Promise(function (resolve, reject) {
    // do something that might take a while
    // let's just set x instead for this example
    let x = 20;
    if (x > 10) {
    resolve(x); // on success
    } else {
    reject("Too low"); // on error
    }
   });
   promise.then(
    function (value) {
    console.log("Success:", value);
    },
    function (error) {
    console.log("Error:", error);
    }
);


//----
const promise = new Promise((resolve, reject) => {
    resolve("success!");
   })
   .then(value => {
    console.log(value);
    return "we";
    })
    .then(value => {
    console.log(value);
    return "can";
    })
    .then(value => {
    console.log(value);
    return "chain";
    })
    .then(value => {
    console.log(value);
    return "promises";
    })
    .then(value => {
    console.log(value);
    })
    .catch(value => {
    console.log(value);
    })

//_______________________
const promise = new Promise((resolve, reject) => {
    reject("oops... ");
   })
    .then(value => {
    console.log(value);
    return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
        })
        .then(value => {
        console.log(value);
        return "chain";
        })
        .then(value => {
        console.log(value);
        return "promises";
        })
        .then(value => {
        console.log(value);
        })
        .catch(value => {
        console.log(value);
        })

//--------
function saySomething(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + x);
    }, 2000);
    });
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);