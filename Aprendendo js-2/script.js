// cria referencia ao form e ao elemento h3 (onde sera exibido a resposta)

const form = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado

form.addEventListener("submit", (e) =>{
    const nome = form.nome.value // obtem o nome digitado no form
    resp.innerText = `Olá ${nome}` // exibe a resposta do programa
    e.preventDefault() // evita o envio do form
})

