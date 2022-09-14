function ejercicio(x,y) {
    return new Promise(resolve, reject => {
        var y = 0;
        var x = 0;
        resolve('valores')
        if (x == y){
            console.log('el valor es igual.')
        }else{
            console.log('el valor es direfente')
        }
    });
  }
ejercicio();