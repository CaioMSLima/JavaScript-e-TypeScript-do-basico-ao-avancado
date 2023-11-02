
const path = require('path');
const filePath = path.resolve(__dirname,'text.json')
const write = require('./modules/write')
const read = require('./modules/read')

const bestVillains =[
    {name: 'Bane'},
    {name: 'Dr Doom'},
    {name: 'Riddler'},
    {name: 'Joker'},
    {name: 'Venon'},
    {name: 'Wolf'},
    {name: 'Green Goblin'},
];
const json = JSON.stringify(bestVillains,'',2)

write(filePath,json)

async function readFile(path) {
    const data = await read(path);
    renderData(data);
}

function renderData(data){
    data = JSON.parse(data);
    data.forEach(val => console.log(val.name));
}

readFile(filePath)