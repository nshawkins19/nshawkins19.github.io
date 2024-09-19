//Finish table calculations 

document.getElementById("calculator");
//Math Section
let x, y, operator, result, min, max, avg, total;

x = prompt("Enter the first number");
x = parseInt(x);

//Creating the table
document.write("<table border = '1'>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

while(x!=null){
if (x!= null){
    operator = prompt("Enter a valid operation [ + , - , * , / , or %]")
    y = prompt("Enter another number");
    y = parseInt(y);
}


//Handling Operations
switch (operator) {
  case "+":
    result = x + y;
    break;
  case "-":
    result = x - y;
    break;
  case "*":
    result = x * y;
    break;
  case "/":
    result = x / y;
    break;
  case '%':
    result = x % y;
    break;
  default:
    result = 0 / 0;
    break;
}

result = parseFloat(result);
//Table Section

document.write(
  "<tr><td>" +
    x +
    "</td><td>" +
    operator +
    "</td><td>" +
    y +
    "</td><td>" +
    result +
    "</td></tr>"


);

x = prompt("Enter the first number");

} //end while
//After loop, compute these nums: minimum, maximum, average, and total

document.write(
  "<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>"
);
document.write(
  "<tr><td>" +
    min +
    "</td><td>" +
    max +
    "</td><td>" +
    avg +
    "</td><td>" +
    total +
    "</td></tr>"
);
document.write("</table>");
