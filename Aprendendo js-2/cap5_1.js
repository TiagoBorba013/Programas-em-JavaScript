const form = document.querySelector("form")
const resp = document.querySelector("pre")

form.addEventListener("submit", (e) =>
{
  e.preventDefault()

  const num = Number(form.numero.value)
  let resposta = ""
  
  for(let i = 1; i <= 10; i++)
 {
    resposta = resposta + num + "x" + i + "=" + (num*i) + "\n"
 } 
 resp.innerText = resposta


})