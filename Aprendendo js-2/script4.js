// cria uma referncia para oo form e ao h3

const form = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" do evento, acionado quando o botão submit for acionado

form.addEventListener("submit", (e) =>{
    const buffet = Number(form.preço.value)
    const consumo = Number(form.peso.value)

    const KG = consumo/1000
    const valor = KG * buffet

    resp.innerText = `Valor a se pagar R$: ${valor.toFixed(2)}`

    e.preventDefault()


})