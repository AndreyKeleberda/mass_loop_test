// const inputQuantityGlass = document.querySelector('.calc__container__quantityGlass__input');
// const inputQuantityMoney = document.querySelector('.calc__container__sum__input');

// inputQuantityMoney.addEventListener('blur', b);

// let a = inputQuantityGlass.addEventListener('blur', e => {
//   return Number(e.currentTarget.value);
// });

// function b() {
//   return (b = Number(e.currentTarget.value));
// }

// // function calc(A, B) {
// //   console.log(A, B);
// //   return A * B;
// // }
// // calc(a, b);
let input = document.querySelectorAll('input');
const totalText = document.querySelector('.calc__container__total__money');

let res;
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', function () {
    if (inputOne.value !== '' && inputTwo.value !== '') {
      res = Math.round(
        12 * (inputOne.value * inputTwo.value - (inputOne.value * inputTwo.value) / 5),
      );
      totalText.textContent = `${res} zł`;
    }
  });
}
