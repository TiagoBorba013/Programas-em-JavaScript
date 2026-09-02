const form = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

form.addEventListener("submit", (e) =>{
    const nome = form.medicamento.value
    const preço = Number(form.preço.value)
    const num = Math.floor(preço) * 2

    resp1.innerText = `Promoção de ${nome}`
    resp2.innerText = `Leve 2 por apenas R$ ${num.toFixed(2)}`
    
    e.preventDefault()
})