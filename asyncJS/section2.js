const axios = require("axios");

/* callbacks */
const callbackFunc = (name) => {
  console.log(`Hello ${name}`);
};

const higherOrderFunc = (name, callback) => {
  callback(name);
};

higherOrderFunc("Oybek", callbackFunc);

// ======================================
/* synchronous callback */

// callback function
const searchArr = (arr, key) => {
  for (let index = 0; index < arr.length; index++) {
    if (key === arr[index]) {
      console.log(index);
      break;
    }
  }
};

// higherOrder function
const findZeroFromArray = (arr, callback) => {
  const zero = 0;
  callback(arr, zero);
};

findZeroFromArray([1, 2, 3, 0, 1, 2, 3], searchArr); // log -> 3

// ======================================
/* asynchronous callback */

// callback function
const displayFetchingData = (data) => {
  console.log(data);
};

// heigher order function
const fetchingData = (callback) => {
  console.log("fetching...");
  const fetchFunc = axios.get("https://jsonplaceholder.typicode.com/todos/1");

  fetchFunc
    .then((response) => {
      callback(response.data);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

fetchingData(displayFetchingData);
