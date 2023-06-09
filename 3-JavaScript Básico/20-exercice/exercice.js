function myScope() {
    //select one element to class or tag
    const form = document.querySelector(".form")
    const result = document.querySelector(".result")

    const people = []

    // omsubmit is when the form will be send
    // form.onsubmit = function(event){
    //     cancels an event, in this case cancels sending  or submit information  and reloads the page
    //     event.preventDefault()
    // };

    //or
    
    function receveEventForm(envent){
        event.preventDefault()
        const name = form.querySelector(".name").value
        const lastName = form.querySelector(".last").value
        const weigth = form.querySelector(".weight").value
        const height = form.querySelector(".height").value

    
       people.push( { name:name,lastName:lastName,weigth:weigth,height:height})

       console.log(people)

       result.innerHTML += `<p>${name} ${lastName} ${height} ${weigth}</p>`;
    }

    //associate an event with an HTML element and define a function (or code) to be executed when this event happen
    form.addEventListener("submit",receveEventForm)

}

myScope();