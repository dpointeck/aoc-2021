// get in.txt and store it in an array of numbers
const input = require("fs")
  .readFileSync("in.txt", "utf8")
  .split("\n")
  .map((x) => parseInt(x));
let p1 = 0;
let p2 = 0;

// iterate over input
input.forEach((_, i) => {
  // check if the current value is higher than the prev one
  if (i >= 1 && input[i] > input[i - 1]) {
    p1++;
  }
  // check if the current sliding window is higher than the prev one
  if (
    i >= 3 &&
    input[i] + input[i - 1] + input[i - 2] >
      input[i - 1] + input[i - 2] + input[i - 3]
  ) {
    p2++;
  }
});

console.log(p1, p2);
