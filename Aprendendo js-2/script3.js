// cria referencia ao forme e ao h3 e h4
const form = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

// cria um "ouvinte" do evento, acionado quando o botão submit for acionado

form.addEventListener("submit", (e) =>{
    const veiculo = form.Veículo.value
    const preço = Number(form.Preço.value)

    const entrada = preço * 0.5
    const parcela = entrada / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()
})