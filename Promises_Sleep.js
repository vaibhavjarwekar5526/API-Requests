var time = 2000.5;

const promise = new Promise( (resolve, reject) => {

    if( Number.isInteger(time/1000) ) {
        resolve(`success`);
    }
    else {
        reject(`invalid argument, promise accepts only valid numbers`)
    }
});



promise.then((res)=> {
  console.log({success: true, message: res})

}).catch((error) => {
  console.log({success: false, message: error})

})
