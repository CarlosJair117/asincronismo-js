const promise = new Promise(function (resolve, reject){
    resolve('Hey');
});

const cows = 15;

const countCows = new Promise(function (resolve, reject){
   if (cows > 10) {
    resolve(`we have ${cows} in the farm`)
   } else {
    reject('There are no cows in the farm')
   }
})

countCows.then( result => {
    console.log(result)
}).catch( error => {
    console.log(error)
}).finally(() => console.log('Finally'))