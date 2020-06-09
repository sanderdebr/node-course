setTimeout(() => {
  console.log("2 seconds are up");
}, 2000);

const names = ["Andrew", "Jenn", "Jess", "Peter"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});
