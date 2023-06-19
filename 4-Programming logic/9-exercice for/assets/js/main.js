const element =[
    {tag:"p",text:"Phrase 1"},
    {tag:"div",text:"Phrase 2"},
    {tag:"footer",text:"Phrase 3"},
    {tag:"section",text:"Phrase 4"},
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < element.length; i++) {

   let{ tag, text} = element[i];
   let createTag = document.createElement(tag);
   createTag.innerText = text;
   div.appendChild(createTag);

}

console.log(div);
container.appendChild(div);
