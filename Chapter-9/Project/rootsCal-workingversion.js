let solutions = document.getElementById('answers');

function calculateRoots(form) {
  let a = document.getElementsByName;
  let b = form.elements["b"].value;
  let c = form.elements["c"].value;
  let solution1, solution2;

  if (b * b < 4 * a * c) {
    solutions.innerHTML = "Solution: x’s roots are imaginary";
  } else if (b * b === 4 * a * c) {
    solutions.innerHTML = "Solution: x = single-root";
  } else {
    solution1 = ((-1 * b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    solution2 = ((-1 * b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    solutions.innerHTML = "Solution: x = " + solution1 + " x = " + solution2;
  }
}

function validate(val) {
  if (
    (+val.value < -99 || +val.value > 99) ||
    (val.name === 'a' && +val.value === 0) ||
    +val.value === '' ||
    !Number.isInteger(+val.value)) {
    val.className = "incorrect";
  } else {
    val.className = "correct";
  }
}