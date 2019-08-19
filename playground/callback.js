// setTimeout(() => {
//   console.log("ran after 1 sec");
// }, 1000);

// const names = ["aasdadad", "b"];
// const short = names.filter((name) => {
//   return name.length < 4;
// });

// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       l: address
//     };
//     callback(data);
//   }, 2000);
// }

// geoCode("a", (data) => {
//   console.log(data);
// });


const add = (a,b, callback) => {
  setTimeout(() => {
    const sum = a +b;
    callback(sum);
  }, 2000);
}

add(1,4, (sum) => {
  console.log(sum);
});