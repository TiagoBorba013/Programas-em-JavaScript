const form = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

let erros = []
let sorteado = Math.floor(Math.random()*100 +1)
const CHANCES = 6

form.addEventListener("submit", (e) =>{
   e.preventDefault()
   const numero = Number(form.inNumero.value)
   if(numero == sorteado){
      respDica.innerText = `Parabéns!! Número sorteado ${sorteado}`
      form.btnSubmit.disabled = true
      form.btnNovo.className = "exibe"
   }
   else{
    if(erros.includes(numero)){
        alert(`Você ja apostou o número ${numero}. Tente outro...`)
    }
    else{
        erros.push(numero)
        const numErros = erros.length
        const numChances = CHANCES - numErros
        respErros.innerText = `${numErros} (${erros.join(", ")})`
        respChances.innerText = numChances
        if(numChances == 0){
            alert("Suas chances acabaram...")
            form.btnSubmit.disabled = true
            form.btnNovo.className = "exibe"
            respDica.innerText = `Game over! Número sorteado: ${sorteado}`
        }
        else{
            const dica = numero < sorteado ? "Maior" : "Menor"
            respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
        }
    }
   }
   form.inNumero.value=""
   form.inNumero.focus()

})

form.btnNovo.addEventListener("click", () => {
    erros = []
    sorteado = Math.floor(Math.random()*100 +1)
    respErros.innerText = ""
    respChances.innerText = CHANCES
    respDica.innerText = ""
    form.btnSubmit.disabled = false
    form.btnNovo.className = ""
    form.inNumero.value = ""
    form.inNumero.focus()
})