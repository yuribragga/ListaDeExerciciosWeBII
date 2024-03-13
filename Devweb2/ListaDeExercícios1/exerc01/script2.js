alert('Calcule sua massa corporal')
const nome = prompt('Digite seu nome: ')
const altura = Number(prompt(`${nome}, digite sua Altura em centimetros: ` ))
const peso = Number(prompt(`${nome}, digite seu peso: ` ))

const metros = altura/100

const indiceMassaCorporal = peso / ( metros ** 2 )

const imcFinal = indiceMassaCorporal.toFixed(2)

let classificado;

if(imcFinal < 16) {
    classificado = `Baixo peso muito grave`
}
else if ( imcFinal < 16.99){
    classificado = `Baixo peso grave`
}
else if (imcFinal < 18.49){
    classificado = `Baixo peso`
}
else if ( imcFinal < 24.99){
    classificado = `Peso normal`
}
else if (imcFinal < 29.99){
    classificado = `Sobrepeso`
}
else if ( imcFinal < 34.99){
   classificado = `Obesidade grau l`
}
else if (imcFinal < 39.99){
    classificado = `Obesidade grau ll`
}
else {
    classificado = `Obesidade grau lll`
}
alert(`Você possui índice de massa corporal igual a ${imcFinal}, sendo classificado como: ${classificado}!`)