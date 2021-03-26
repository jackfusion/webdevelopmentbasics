let solutions = document.getElementById('answers');

function calculateRoots(form) {
  let x1, x2;
  let message = "";
  let inputs = document.querySelectorAll('input[type=number]');​
  for (var i = 0; i < inputs.length; i++) {
    // console.log(+inputs[i].value);
    if (inputs[i].name === 'a' && !validate(inputs[i])) {
      message += 'Invalid entry for a. Must be non-zero integer between -99 and 99\n';
    } else if (!validate(inputs[i])) {
      message += `Invalid entry for ${inputs[i].name}. Must be an integer between -99 and 99\n`;
      // message += 'Invalid entry for ' + inputs[i].name
      //             + '. Must be an integer between -99 and 99\n';
    }
  }​
  if (message.trim() === "") {
    // do calculation
    ​} else {
    alert(message);
  }

}

function validate(el) {
  // console.log(typeof el.value);
  if (
    (+el.value < -99 || +el.value > 99) ||
    (el.name === 'a' && +el.value === 0) ||
    el.value === '' ||
    !Number.isInteger(+el.value)
  ) {
    el.className = "redBorder";
    return false;
  } else {
    el.className = "greenBorder";
    return true;
  }
}