const form = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

form.addEventListener("submit", (e) =>{
     e.preventDefault()
    const nome = form.Nome.value
    const nota1 = Number(form.nota1.value)
    const nota2 = Number(form.nota2.value)
    const media = (nota1 + nota2)/2
    resp1.innerText = `Média das notas: ${media.toFixed(2)}`
    if(media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue"
    }
    else{
        resp2.innerText = `${nome}, infelizmente, você foi reprovado(a)!`
        resp2.style.color = "red"
    }

})