// the itereable object has [iterator] method end this method returns value<any> and done<boolean>. Done refers ending of iterator

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }

        return { value: undefined, done: true };
      },
    };

    return iterator;
  },
};

for (let item of obj) {
  console.log(item);
}

// Hello
// World
