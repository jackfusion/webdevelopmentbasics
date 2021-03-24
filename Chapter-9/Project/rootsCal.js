let solutions = document.getElementById('answers');

function calculateRoots(form){
  let a = form.elements["a"].value;
  let b = form.elements["b"].value;
  let c = form.elements["c"].value;
  let solution1, solution2;
  let num = document.getElementById('num');
  if(Math.sqrt(b) < 4*a*c){
    solutions.innerHTML = "Solution: x’s roots are imaginary";
  }else if(Math.sqrt(b) === 4*a*c){
    solutions.innerHTML = "Solution: x = single-root";
    }else{
    solution1 = ((-1*b)+Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2*a);
    solution2 = ((-1*b)-Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2*a);
    solutions.innerHTML = "Solution: x = " + solution1 + " x = " + solution2;
  }
};

function validate(val){
  if(
    (+val.value < -99 || +val.value > 99) || 
    (val.name === 'a' && +val.value === 0) || 
    +val.value === '' || 
    !Number.isInteger(+val.value)){
    val.className = "incorrect";
    solutions = 
    "Invalid entry for a. Must be a non-zero integer between -99 to +99. <br> Invalid entry for b. Must be an integer between -99 to +99. <br> Invalid entry for c. Must be an integer between -99 to +99.";
  } else {
    val.className = "correct";
  }
}