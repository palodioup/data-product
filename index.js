// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function generateAverage(array) {
//   const addedArray = array.reduce((a, b) => {
//     return a + b;
//   }, 0);
//   const averageArray = addedArray / array.length;
//   console.log(averageArray);
// }

// generateAverage(num);

// const numTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function updateArray() {
//   const descendingVar = numTwo.sort((a, b) => {
//     return b - a;
//   });
//   console.log(descendingVar);
// }

// updateArray();

// const dishes = {
//   plates: 3,
//   cups: 7,
//   cutlery: {
//     forks: 3,
//     knives: 3,
//   },
// };

// delete dishes.plates;
// console.log(dishes);

// const myJSON = {
//   name: "Oladipupo",
//   age: 9,
//   class: "JSS IB",
// };

// const stringify = JSON.stringify(myJSON);
// console.log(stringify);

// const parseJSON = '{"name": "Oladipupo", "age": 9, "class": "JSS IB"}';

// const parse = JSON.parse(parseJSON);
// console.log(parse);

// CLOSURES I

// function apple() {
//   var fruit = "pineapple";
//   function nameFruit() {
//     console.log(fruit);
//   }
//   return nameFruit;
// }

// apple()();

// // CLOSURES II

// var number = (function () {
//   var privateNumbers = 0;
//   function changeBy(val) {
//     privateNumbers += val;
//   }
//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateNumbers;
//     },
//   };
// })();

// console.log(number.value());
// number.increment();
// number.increment();
// number.increment();
// number.increment();
// console.log(number.value());
// number.decrement();
// console.log(number.value());

// SET TIMEOUT & INTERVAL

// setTimeout(timer, 1000)

// function timer() {
//   console.log("goodbye")
// }

// setInterval(callFunction, 1000)

// function callFunction() {
//   console.log("goodbye")
// }

// NOTIFICATIONS
// Notification.requestPermission()
// new Notification("We just found this")

// function notifyMe() {
//   if (!"Notification" in window) {
//     alert("This browser does not support system notifications");
//   } else if (Notification.permission === "granted") {
//     notify();
//   } else if (Notification.permission != "denied") {
//     Notification.requestPermission((permission) => {
//       if (permission === "granted") {
//         notify();
//       }
//     });
//   }

//   function notify() {
//     var notification = new Notification("TITLE OF NOTIFICATION", {
//       icon: "http://carnes.cc/jsnuggets_avatar.jpg",
//       body: "Hey! you are noticed :)",
//     });

//     notification.onclick = function () {
//       window.open("http://carnes.cc");
//     };
//     setTimeout(notification.close.bind(notification), 10000);
//   }
// }

// notifyMe()

// const button = document.getElementById("event");

// function notifyUser() {
//   button.onclick = () => {
//     Notification.requestPermission();
//     new Notification("Hello");
//   };

//   const userNotification = new Notification("The title", {
//     body: "Signin to Netflix and watch unlimited TV at just N2, 200",
//   });

//   userNotification.onclick = () => {
//     window.open("https://www.netflix.com/ng/");
//   };

//   setTimeout(userNotification, 10000);
// }

// notifyUser();

// const myPromise = new Promise((resolve, reject) => {
//   const boleean = true;
//   if (boleean) {
//     console.log("Operation success");
//   } else {
//     console.log("Operation failed");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



// TRY CATCH

try {
  const num = 5
  numb += 1
  console.log(num)
} catch (error) {
  console.error("Error caught:", error)
}


try {
  console.log("Unicorns are not real")

  poop
  console.log("user")
} catch (error) {
  console.error("Error caught:", error)
} finally {
  console.log("Bye bye user")
}

// IIEF

// Key:
// (() => {  is a function
// })()

(() => {
  Boolean = false
  if (!Boolean) {
    console.log("Determiner is true")
  }
})()

// ASYNC AND AWAIT TO FETCH DATA (Warning: Do not use it until API are used)

const getData = async() => {
  try {
    const response = await fetch("https://api/example.com")
    if (!response.ok) {
      throw new Error(`Error caught ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error("Error fetching data:", error.message)
  }
}

getData()