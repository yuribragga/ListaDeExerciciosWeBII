const numero1 = Number(prompt('Digite um numero: '))
const sinal = prompt('Digite uma operação como o exemplo: (Ex: soma ou subtração) ')
const numero2 = Number(prompt('Digite um segundo valor: '))

function verificaVariavel(n1, n2){
    if (numero1 === null){
        numero1 = 0
    }
    if (numero2 === null){
        numero2 = 0
    }
}

function verificaSinal(sinal){
    if (sinal === 'soma'){
         return '+'
    }
    else if (sinal === 'subtração'){
        return '-'
    }
    else{
        return alert('Operador não encontrado, por favor digite novamente!')
    }
}

function calcula(n1, n2, sinal){
    verificaVariavel()
    const operador = verificaSinal(sinal)
    if (operador === '+'){
        return alert( numero1 + numero2)
    }
    else if (operador === '-'){
        return alert(numero1 - numero2)
    }
    else{
        return operador
    }
}

calcula(numero1,numero2, sinal)