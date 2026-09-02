const form = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(form.saque.value)
    if(saque % 10 != 0){
        alert("Valor inválido para as notas disponíveis")
        form.saque.focus()
        return
    }
    const cem = Math.floor(saque/100)
    let resto = saque % 100
    const cinquenta = Math.floor(resto/50)
    resto = resto % 50
    const dez = Math.floor(resto/10)
    if(cem > 0){
        resp1.innerText = `Notas de R$ 100: ${cem}`
    }
    if(cinquenta > 0){
        resp2.innerText = `Notas de R$ 50: ${cinquenta}`
    }
    if(dez > 0){
        resp3.innerText = `Notas de R$ 10: ${dez}`
    }

})