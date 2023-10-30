// to simplify building own iterators we need to use generators

// as in 08_iterators.js we create itereable object with generators

function* generatorFunction() {
  yield "Hello", yield "World";
}

const generatorObject = generatorFunction();

for (let item of generatorObject) {
  console.log(item);
}

// Hello
// World
