// This function generates a compound interest table

function generateTable(form) {
  let amount;     // accumilated value for each new year
  let rate;       // interest rate
  let years;      // years for principal to grow
  let interest;   // interest earned each year
  let table;      // compound interest table
  let year = 1;   // the year being calculated

  amount = form.elements["deposit"].valueAsNumber;
  rate = form.elements["rate"].valueAsNumber;
  years = form.elements["years"].valueAsNumber;

  table =
  "<table>" +
  "<tr><th>Year</th><th>Starting Value</th>" +
  "<th>Interest Earned</th><th>Ending Value</th></tr>";

  while (year <= years){
    table += "<tr>";
    table += "<td>" + year + "</td>";
    table += "<td>$" + amount.toFixed(2) + "</td>";
    interest = amount * rate / 100;
    
  }
}