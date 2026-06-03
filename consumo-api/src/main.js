// console.log(1)
// console.log(2)
// console.log(3)

// setTimeout(() =>{
//    alert("My homebody just domed a nigga") 
// }, 10000);

// console.log(4)
// console.log(5)
// console.log(6)

// const btn = document.getElementById("btn")

// btn.addEventListener("click", ()=>{
//     mandarALaKKaAlguien(" me insultaste")
// })

// function mandarALaKKaAlguien(texto){
//     alert("vete a la versh" + texto)
// }

// Promesas
const silvioBrito = new Promise((resolve, reject)=> {
    let edad = Number(prompt("Ingrese su edad"))

    if (edad >= 18){
        resolve("Puedes tomar birra")
    }else{
        reject("F")
    }
})