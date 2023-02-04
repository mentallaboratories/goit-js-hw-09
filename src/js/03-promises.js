//   function createPromise(position, delay) {
//       const promise = new Promise((resolve, reject) => {
//         const shouldResolve = Math.random() > 0.3;
//         setTimeout(()=>{
//           if(shouldResolve){
//             resolve('resolved');
//           }
//             reject('rejected');
//         }, delay)
//       })
// }


// const promise = new Promise((resolve, reject) => {
//   const shouldResolve = Math.random() > 0.3;
//   setTimeout(()=>{
//     if(shouldResolve){
//       resolve('resolved');
//     }
//       reject('rejected');
//   }, 2000);
// })

// promise.then(
//   result => {
//     console.log('yeaaaaa')
//   },
//   error => {
//     console.log('fffaaaaak')
//   }
// )

//createPromise(4, 5000);


// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });