import "./styles/global.css"


const cabezera = document.getElementsByTagName("header")
let nombre = "Diego Rodriguez"
cabezera[0].innerHTML = `
    <h3>este es un titulo</3>
    <p>Dies irae, dies illa</p>
    <p>Solvet sæclum in favilla, teste David cum Sibylla</p>
    <span>My name is ${nombre}</span>
    `

console.groupCollapsed("por nombre de etiqueta")    
const elements = document.getElementsByClassName("article")
for (const element of elements){console.log(element)}

console.groupEnd

console.groupCollapsed("por clase")
const mySections = document.getElementsByClassName("special-card")
for  (const section of mySections){
    console.log(section)
}
console.groupEnd()




console.group("por id")
const myTitle = document.getElementById("title")

const btnUno = document.getElementById("uno")
const btnDos = document.getElementById("dos")


console.log(myTitle)
console.log(btnUno)
console.log(btnDos)

