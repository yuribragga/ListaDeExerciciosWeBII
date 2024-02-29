alert('Descubra sua faixa etária!')
const idade = Number(prompt('Digite sua idade: '))

let classificado

if (idade >= 0 && idade < 15){
    classificado = `Criança`
}
else if (idade < 30){
    classificado = `Jovem`
}
else if (idade  < 60){
    classificado = `Adulto`
}
else {
    classificado = `Idoso`
}

alert(`Sua idade é ${idade} você é ${classificado}!`)