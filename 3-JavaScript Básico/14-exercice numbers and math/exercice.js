const num1 = Number(prompt("Enter one number"))

//select element by id
const numberTitle = document.getElementById("number-title");
const text = document.getElementById("text")

//this type my text in this div
numberTitle.innerHTML = num1

text.innerHTML = `<p> Square root: ${Math.sqrt(num1)}</p>` 
text.innerHTML += `<p> ${num1} is integer: ${Number.isInteger(num1)}</p> ` 
text.innerHTML += `<p> NaN is: ${Number.isNaN(num1)}</p>` 
text.innerHTML += `<p> Round to low: ${Math.floor(num1)}</p>` 
text.innerHTML += `<p> Round to up:  ${Math.ceil(num1)}</p>` 
text.innerHTML += `<p> With 2 decimal places: ${num1.toFixed(2)}</p>` 
