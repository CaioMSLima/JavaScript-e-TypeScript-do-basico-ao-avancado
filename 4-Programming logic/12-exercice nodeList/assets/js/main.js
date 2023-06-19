const paragraphs = document.querySelector(".paragraphs");

//this select all elements, what behave like arrays
const ps = paragraphs.querySelectorAll("p")

//get all css style in this element
const styleBody = getComputedStyle(document.body)

//select what style you want
const backgroundColorBody = styleBody.backgroundColor
 
for(p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "white";

}