
const date = new Date()
const dateBrazil = formateDate(date)

function leftZero(num){
    return num > 9 ? num : `0${num}`
}

function formateDate(date){
   const day = leftZero(date.getDate())
   const month = leftZero(date.getMonth() + 1)
   const year = leftZero(date.getFullYear())
   const hours = leftZero(date.getHours())
   const min = leftZero(date.getMinutes())

   return `${day}/${month}/${year} ${hours}:${min}`
}

//10/06/2023 19:41
console.log(dateBrazil)