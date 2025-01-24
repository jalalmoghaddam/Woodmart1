const numerics = document.querySelectorAll(".numeric");
const numbers = []; //empty array

for (let i = 0; i < numerics.length; i++) {
  numbers.push(Number(numerics[i].innerHTML));
}

let cnt = 0;
const delay = 1;
const counter = setInterval(() => {
  numerics[0].innerHTML = cnt;
  cnt += 3;
  if (cnt > numbers[0]) {
    clearInterval(counter);
  }
}, delay);

// ***********************
let cnt1 = 0;
const counter1 = setInterval(() => {
  numerics[1].innerHTML = cnt1;
  cnt1 += 1;
  if (cnt1 > numbers[1]) {
    clearInterval(counter1);
  }
}, delay * 10);
// ***********************
let cnt2 = 0;
const counter2 = setInterval(() => {
  numerics[2].innerHTML = cnt2;
  cnt2 += 1;
  if (cnt2 > numbers[2]) {
    clearInterval(counter2);
  }
}, delay * 100);
