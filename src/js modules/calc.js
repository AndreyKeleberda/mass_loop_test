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
