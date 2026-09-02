const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) =>{
    const valor = Number(form.valor.value)
    const tempo = Number(form.tempo.value)
    const num = tempo/15
    const result = (Math.ceil(num)) * valor

    resp.innerText = `Valor a Pagar R$: ${result.toFixed(2)}`

    e.preventDefault()

})