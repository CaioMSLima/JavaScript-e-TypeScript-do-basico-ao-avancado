// fetch("pessoas.json")
//     .then(response => response.json())
//     .then(json => chargeResultElementsInPage(json));
 
//or
axios("pessoas.json").then(response => chargeResultElementsInPage(response.data));

function chargeResultElementsInPage(json){
    const table = document.createElement('table')
    for(let person of  json){

        const tr = document.createElement('tr');
      
        let td1 = document.createElement('td');
        td1.innerHTML = person.nome;
        tr.appendChild(td1)

        let td2 = document.createElement('td');
        td2.innerHTML = person.idade;
        tr.appendChild(td2)

        let td3 = document.createElement('td');
        td3.innerHTML = person.salario;
        tr.appendChild(td3)

        table.appendChild(tr)

    }

    const result = document.querySelector('.result')
    result.appendChild(table)


}