//like ajax
document.addEventListener('click', e => {
    const event = e.target;
    const tag = event.tagName.toLowerCase();

    if (tag == 'a') {
        e.preventDefault();
        pageLoad(event);
    }
})


// function pageLoad(event) {
//     const href = event.getAttribute('href');

//        fetch(href)
//         .then(response => {
//             if(response.status !== 200) throw new Error('ERRO 404!');
//             return response.text();
//         })
//         .then(html => chargeResult(html))
//         .catch(e => console.log(e));
    
// }

//or
//always return promise
//need the url of you want use in ajax

async function pageLoad(event) {

    try {
        const href = event.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('ERRO 404!');
        const html = await response.text();
        chargeResult(html);
        
    } catch (error) {
        console.log(error);
    }
       

}


    function chargeResult(response) {
        const result = document.querySelector('.result')
        result.innerHTML = response;
    }

//always return promise
//need the url of you want use in ajax
fetch('page2.html').then(response =>{
    if(response.status !== 200) throw new Error('ERROR 404');
    return response.text();
})
.then(html => console.log(html))
.catch(e => console.error(e));