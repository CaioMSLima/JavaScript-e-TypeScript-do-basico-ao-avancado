
const fs = require('fs').promises;

module.exports = (path, data) => {
    //creat file txt
    //path of my file
    ///Pharse is text im my file 
    //flag:'w' delet all write in this file and write what I want
    //If i want it aways write another thing put flag:'a'
    //If i want broke line use \n 
    fs.writeFile(path, data, { flag: 'w' });
};
