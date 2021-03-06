<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quadratic Equation Roots</title>
  <style>
    .incorrect,
    .correct:focus {
      border: 3px red solid;
      outline: none;
      box-shadow: 0 0 3px red;
    }

    .correct {
      border: 3px green solid;
      outline: none;
      box-shadow: 0 0 3px green;
    }
  </style>

</head>

<body>
  <h1>Quadratic Equation Roots Calculator</h1>

  <p>This web page finds the root of a polynomial equation of the following form:<br>
    ax<sup>2</sup>+bx+c=0</p>

  <p>a, b, and c must be integers between -99 and +99 and <b>a</b> must be non-zero.</p>
  <form id="validation">
    <label for="a">a:</label>
    <input oninput="validate(this)" onfocus="validate(this)" type="number" id="a" name="a" min="-99" max="99">
    <label for="b">b:</label>
    <input type="number" id="b" name="b" min="-99" max="99" onfocus="validate(this)" oninput="validate(this)">
    <label for="c">c:</label>
    <input type="number" id="c" name="c" min="-99" max="99" onfocus="validate(this)" oninput="validate(this)">

    <p><input type="button" id="solutionSubmit" value="Calculate roots" onClick="calculateRoots(this.form);"></p>
  </form>
  <p id="answers"></p>
  <script src="rootsCal.js" type=text/javascript> </script> </body> </html>