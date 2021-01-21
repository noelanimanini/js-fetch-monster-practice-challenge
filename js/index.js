const monstersUrl = 'http://localhost:3000/monsters/?_limit=50&_page=3'

document.addEventListener("DOMContentLoaded", function(event) {     
    fetchMonsters(); 
    // fetchCreateMonster();
    createMonster(); 
 });

 //DATA 
    // GET
let fetchMonsters = () => {
    fetch(monstersUrl).then(response => response.json()).then(monsters => monsters.forEach(monster => renderMonsters(monster)))}

    // POST
let fetchCreateMonster = (monster) => {
    fetch('http://localhost:3000/monsters/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
         body: JSON.stringify({
             name: monster.target[0].value,
             age: monster.target[1].value, 
             description: monster.target[2].value
         }),
        })
        .then(response => response.json())
        .then(console.log);
}




let renderMonsters = (monster) => {
    const monsterContainer = document.querySelector('#monster-container')
    const div = document.createElement('li')
    const header = document.createElement('h1')
    const header2 = document.createElement('h3')
    const age = document.createElement('li')
    const label = document.createElement('label')
    const strong = document.createElement('strong')
    header2.innerText = "Age"
    header.innerText = monster.name
    age.innerHTML = parseInt(monster.age)
    div.innerText = monster.description

    monsterContainer.append(header, div, label, header2, age)

}

let createMonster = (monster) => {
    const createMonsterId = document.querySelector('#create-monster')
    const fieldset = document.createElement('form')
    const legend = document.createElement('legend')
    const label = document.createElement('label')
    const ageLabel = document.createElement('label')
    const descriptionLabel = document.createElement('label')
    const input = document.createElement('input')
    const ageInput = document.createElement('input')
    const descriptionInput = document.createElement('input')
    const btn = document.createElement('button')
    legend.innerText = "Create a MONSTER"
    btn.innerText = "submit"

    label.innerText = "Name: "
    label.setAttribute("for", "name")
    input.setAttribute("type", "text")
    label.appendChild(input)

    ageLabel.innerText = "age: "  
    ageLabel.setAttribute("for", "age")
    ageInput.setAttribute("type", "text")
    ageLabel.appendChild(ageInput)
   
    descriptionLabel.innerText = "description: "
    descriptionLabel.setAttribute("for", "description")
    descriptionInput.setAttribute("type", "text")
    descriptionLabel.appendChild(descriptionInput)
    
    btn.setAttribute("type", "submit")
    

    fieldset.append(legend, label, ageLabel, descriptionLabel, input, ageInput, descriptionInput,btn)
    createMonsterId.append(fieldset)

    fieldset.addEventListener("submit", (e) => {
        e.preventDefault()
        fetchCreateMonster(e)
    })
}
