// Variables: Assignments

const body = document.getElementById("main");

const credentials = {
  name: "Oladipupo Nathan Akanji",
  password: 1029384756,
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
<p> Product Id: ${credentials.password}</p>
<p> Email: ${credentials.email}</p>
<p> Age: ${credentials.otherCredentials.age}</p>
<p> Siblings${credentials.otherCredentials.siblings}</p>
`;

// runner