/* PROMISES */

const getUserName = new Promise((resolve, reject) => {
  const userName = "";
  if (userName.length > 0) resolve(userName);
  else reject("Error invalid name length");
});

getUserName
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

/* promise static methods */
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});

// Promise.all() is used a number of promises to become a single Promise
// this static method works when all promises have finished;
Promise.all([promise1, promise2, promise3]).then(
  (values) => console.log("all", values) // (node:10220) UnhandledPromiseRejectionWarning: foo
);

// this static method also works when all promises have completed, but even one of them has been rejected
Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log("allSettled", values);

  // allSettled [
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'fulfilled', value: 42 },
  //   { status: 'rejected', reason: 'foo' }
  // ]
});

// this static method get promise which is completed first.
// the first promise might be completed with resole or reject

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "promiseOne");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "promiseTwo");
});

Promise.race([promiseOne, promiseTwo]).then(
  (value) => console.log("race", value) // race promiseTwo because the promiseTwo's timeout is smaller than another one;
);
