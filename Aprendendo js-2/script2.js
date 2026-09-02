// cria referencia ao forme e ao h3 e h4

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte" do evento, acionado quando o botão submit for acionado

form.addEventListener("submit", (e) =>{
    const titulo = form.Titulo.value
    const duração = Number(form.Duração.value)

    const horas = Math.floor(duração/60)
    const min = duração % 60

    resp1.innerText = titulo
    resp2.innerText = `${horas} horas e ${min} minutos`

    e.preventDefault()
})

