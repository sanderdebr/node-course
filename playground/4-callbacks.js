// setTimeout(() => {
//   console.log("2 seconds are up");
// }, 2000);

// const names = ["Andrew", "Jenn", "Jess", "Peter"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };

//     callback(data);
//   }, 2000);
// };

// geocode("Philidelphia", (data) => {
//   console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (fn, ...args) => {
  setTimeout(() => {
    const result = args.reduce((acc, cur) => acc + cur, 0);
    fn(result);
  }, 2000);
};

add(
  (sum) => {
    console.log(sum); // Should print: 5
  },
  1,
  4
);
