const date = new Date();

const date1 = new Date("2091-06-13 20:13:15.10")

//2091-06-13T23:13:15.100Z
console.log(date1);

//Fri Jun 09 2023 16:20:03 GMT-0300 (Horário Padrão de Brasília)
console.log(date.toString())

//get current day  10
console.log("Current day ",date.getDate())

//Current month  6
console.log("Current month ",date.getMonth() + 1)

//Current year  2023
console.log("Current year ",date.getFullYear())

//Current hour  19
console.log("Current hour ",date.getHours())

//Current minutes  21
console.log("Current minutes ",date.getMinutes())

//Current seg  34
console.log("Current seg ",date.getSeconds())

//Current ms  886
console.log("Current ms ",date.getMilliseconds())

//Current day of the week  6
 //0 sunday, 6 satuday
console.log("Current day of the week ",date.getDay())




