let solutions = document.getElementById('answers');

function calculateRoots(form) {
  let message = "";
  let inputs = document.querySelectorAll('input[type=number]');
  for (var i = 0; i < inputs.length; i++) {
    // console.log(+inputs[i].value);
    if (inputs[i].name === 'a' && !validate(inputs[i])) {
      message += 'Invalid entry for a. Must be non-zero integer between -99 and 99\n';
      inputs[0].value = "";
      inputs[1].value = "";
      inputs[2].value = "";
      solutions.innerHTML = "";

    } else if (!validate(inputs[i])) {
      message += `Invalid entry for ${inputs[i].name}. Must be an integer between -99 and 99\n`;
      inputs[0].value = "";
      inputs[1].value = "";
      inputs[2].value = "";
      solutions.innerHTML = "";
    }
  }
  if (message.trim() === "") {
    calculate(inputs);
  } else {
    alert(message);
  }
}

function validate(val) {
  if (
    (+val.value < -99 || +val.value > 99) ||
    (val.name === 'a' && +val.value === 0) ||
    +val.value === '' ||
    !Number.isInteger(+val.value)) {
    val.className = "incorrect";
    return false;
  } else {
    val.className = "correct";
    return true;
  }
}

function calculate(inputs) {
  let a = +inputs[0].value;
  let b = +inputs[1].value;
  let c = +inputs[2].value;
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