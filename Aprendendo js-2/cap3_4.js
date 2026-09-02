const prompt = require("prompt-sync")()
const quant = Number(prompt("Peso da ração em Kg: "))
const consumo = Number(prompt("Consumo diário do animal em grama: "))
const duração = Math.floor((quant*1000)/consumo)
const sobra = (quant*1000) % consumo
console.log(`Duraçaõ: ${duração}`)
console.log(`Sobra: ${sobra}g`)
