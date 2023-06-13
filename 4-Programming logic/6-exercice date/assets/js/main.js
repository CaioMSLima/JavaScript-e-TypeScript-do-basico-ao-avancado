const h1 = document.querySelector(".container h1")
const data = new Date()

h1.innerHTML = data.toLocaleString("pt-BR", {dateStyle: "full",timeStyle: "short"})

//or

// const currentDate = new Date()
// var h1 = document.querySelector(".date")
//  h1.innerHTML = criateDate(currentDate)

// function criateDate(currentDate) {
//     const weekDay = getDaysOfWeek(currentDate.getDay())
//     const day = leftZero(currentDate.getDate())
//     const month = getMonth(currentDate.getMonth() + 1)
//     const year = leftZero(currentDate.getFullYear())
//     const hour = leftZero(currentDate.getHours())
//     const min = leftZero(currentDate.getMinutes())
//     return  (`${weekDay}, ${day} of ${month} of ${year} ${hour}:${min}`);
// }

// function leftZero(date) {
//     return date > 9 ? date : `0${date}`
// }

// function getDaysOfWeek(numberDay) {
//    const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
//    return weekdays[numberDay]

// }

// function getMonth(month) {
//     switch (month) {

//         case 1:
//             return "january";
//         case 2:
//             return "february";
//         case 3:
//             return "march";
//         case 4:
//             return "april";
//         case 5:
//             return "may";
//         case 6:
//             return "june";
//         case 7:
//             return "july"
//         case 8:
//             return "august";
//         case 9:
//             return "september";
//         case 10:
//             return "october";
//         case 11:
//             return "november";
//         case 12:
//             return "december";
//     }
// }






