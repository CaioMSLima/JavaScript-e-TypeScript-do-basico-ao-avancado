//like ajax
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);

        //if this post use
        xhr.send()

        //when this ajax was send this cath your response
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        })
    })

}

document.addEventListener('click', e => {
    const event = e.target;
    const tag = event.tagName.toLowerCase();

    if (tag == 'a') {
        e.preventDefault();
        pageLoad(event);
    }
})


// function pageLoad(event){
//     const href = event.getAttribute('href');

//     const objConfig = {
//         method:"GET",
//         url: href
//     }

//     request(objConfig).then(response => chargeResult(response)).catch(error => console.log(error));
// }

//or

async function pageLoad(event) {
    const href = event.getAttribute('href');

    const objConfig = {
        method: "GET",
        url: href
    }

    try {
        const response = await request(objConfig)
        chargeResult(response)

    } catch (error) {
        console.log(error);
    }
}

    function chargeResult(response) {
        const result = document.querySelector('.result')
        result.innerHTML = response;
    }