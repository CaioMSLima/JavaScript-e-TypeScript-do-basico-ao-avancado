const data = new Date("1915-07-14 00:00:00")
const weekDay = data.getDay()
const weekDayText = getWeekDayText(weekDay);

function getWeekDayText(weekDay) {
    switch (weekDay) {
        case 0:
            return   "Sunday"
        
        case 1:
            return "Monday"
           
        case 2:
            return  "Tuesday"
           
        case 3:
            return  "Wednesday"
           
        case 4:
            return "Thursday"
            
        case 5:
            return  "Friday "
            
        case 6:
            return  "Saturday "
            
        default:
            return  "This day of week not exist"
    }

}

//3
console.log(weekDay)

//Wednesday 
console.log(weekDayText)

