// Object property shorthand
const name = "Berend";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Breda",
};

console.log(user);

// Object desctructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: productLabel, stock, rating = 5 } = product;

const transction = ({ type, myProduct }) => {
  //
};

transaction("order", product);
