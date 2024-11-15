const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function generateAverage(array) {
  const addedArray = array.reduce((a, b) => {
    return a + b;
  }, 0);
  const averageArray = addedArray / array.length;
  console.log(averageArray);
}

generateAverage(num);

const numTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function updateArray() {
  const descendingVar = numTwo.sort((a, b) => {
    return b - a;
  });
  console.log(descendingVar);
}

updateArray();

const dishes = {
  plates: 3,
  cups: 7,
  cutlery: {
    forks: 3,
    knives: 3,
  },
};

delete dishes.plates;
console.log(dishes);

const myJSON = {
  name: "Oladipupo",
  age: 9,
  class: "JSS IB",
};

const stringify = JSON.stringify(myJSON);
console.log(stringify);

const parseJSON = '{"name": "Oladipupo", "age": 9, "class": "JSS IB"}';

const parse = JSON.parse(parseJSON);
console.log(parse);
