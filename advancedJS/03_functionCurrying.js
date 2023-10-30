function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);

console.log(curriedSum(3)(5)(6));

const add3 = curriedSum(3);
const add5 = add3(5);
const add6 = add5(6);

console.log(add6);
