const form = document.querySelector("form")
const r1 = document.querySelector("#resp1")
const r2 = document.querySelector("#resp2")

form.addEventListener("submit", (e) =>{
    const produto = form.produto.value
    const preço = Number(form.preço.value)
    const result = preço * 2.5
    const num = preço * 0.5

    r1.innerText = `${produto} - Promoção: leve 3 por R$: ${result.toFixed(2)}`
    r2.innerText = `O 3° produto custa apenas R$: ${num.toFixed(2)}`

    e.preventDefault()
})