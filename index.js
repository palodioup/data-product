// Variables: Assignments

const body = document.getElementById("main");
const randomPassword =
  Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

const stringifiedPassword =
  randomPassword +
  "a" +
  (randomPassword +
    Math.floor(Math.random() * 10) +
    Math.floor(Math.random() * 5)) +
  "-" +
  (randomPassword +
    Math.floor(Math.random() * 10) +
    Math.floor(Math.random() * 5)) +
  "__" +
  (randomPassword +
    Math.floor(Math.random() * 10) +
    Math.floor(Math.random() * 5)) +
  "b" +
  (randomPassword +
    Math.floor(Math.random() * 10) +
    Math.floor(Math.random() * 5)) +
  "z" +
  (randomPassword +
    Math.floor(Math.random() * 10) +
    Math.floor(Math.random() * 5));

// Variables: Objects

const credentials = {
  name: "Oladipupo Nathan Akanji",
  password: stringifiedPassword,
  email: "name@example.com",
  otherCredentials: {
    age: 9,
    siblings: 2,
  },
};

// Making things show

body.innerHTML = `
<h1>We've created an account for you</h1>
<p> Name: ${credentials.name}</p>
<p> Password: ${credentials.password}</p>
<p> Email: ${credentials.email}</p>
<p> Age: ${credentials.otherCredentials.age}</p>
<p> Siblings: ${credentials.otherCredentials.siblings}</p>
`;

// runner