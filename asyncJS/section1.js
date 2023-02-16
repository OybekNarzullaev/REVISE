/* timeOuts & Intervals */

const myFunc = function (message) {
  console.log(message);
};

// setTimeOut
const timeOut = setTimeout(myFunc, 2000, "I will log after 2000 milliseconds");
console.log("I will log firstly!");

// to clear timeOut
// clearTimeout(timeOut);

// setInterval()
const interval = setInterval(myFunc, 1000, "I will log every 1 seconds");

// we should clearInterval when component where we use setInterval unmounted
// clearInterval(interval);

// CRUSIAL!!!
/* setTimeOut and setInterval functions are not belong to JS */
