function map(arr, f) {
  const img = [];
  for (let x of arr) {
    img.push(f(x));
  }
  return img;
}

function filter(arr, p) {
  const img = [];
  for (let x of arr) {
    if (p(x)) {
      img.push(x);
    }
  }
  return img;
}

function reduce(arr, f) {
  if (arr.length === 2) {
    return f(arr[0], arr[1]);
  } else {
    return f(arr[0], reduce(arr.slice(1), f));
  }
}

const arr = [1, 2, 3, 4];
const f = (x) => x * x;
const p = (x) => x > 2;
const g = (x, y) => x + y;
console.log(map(arr, f));
console.log(filter(arr, p));
console.log(reduce(arr, g));
