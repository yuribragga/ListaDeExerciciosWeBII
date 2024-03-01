const codigoFun = parseInt(prompt('Digite o código do funcionario: '))
const horasTrabalhadas = parseInt(prompt('Digite as horas trabalhadas no mês: '))
const turnoTrabalho = prompt('Digite o turno de trabalho: (Ex: M  V  N ) ').toLocaleLowerCase()
const categoriaFunc = prompt('Digite a categoria do funcionario: (Ex: G (Gerente), F (Funcionario)) ').toLocaleLowerCase()
const salarioMinimo = Number(prompt('Digite o valor do salario minimo da sua região: '))

function verificaTurno(turnoTrabalho) {
    if (turnoTrabalho === 'm') {
        return 'm'
    }
    else if (turnoTrabalho === 'v') {
        return 'v'
    }
    else if (turnoTrabalho === 'n') {
        return 'n'
    }
    else {
        return prompt('Digite seu turno de trabalho seguindo o exemplo: (Ex: M  V  N  ').toLocaleLowerCase()
    }
}
function verificaCategoria(categoriaFun) {
    if (categoriaFunc === 'f') {
        return 'f'
    }
    else if (categoriaFunc === 'g') {
        return 'g'
    }
    else {
        return prompt('Digite a categoria do funcionario seguindo o exemplo: (Ex: G (Gerente), F (Funcionario)) ').toLocaleLowerCase()
    }
}

function horaDeTrabalho() {
    const categoria = verificaCategoria(categoriaFunc)
    const turno = verificaTurno(turnoTrabalho)

    if (categoria === 'g') {
        if (turno === 'm' || turno === 'v') {
            return salarioMinimo * 0.04
        }
    }
    else if (categoria === 'f') {
        if (turno === 'n') {
            return salarioMinimo * 0.02
        }
        else {
            return salarioMinimo * 0.01
        }
    }

}

function salarioInicial() {
    const valorHora = horaDeTrabalho()
    return (valorHora * horasTrabalhadas)
}
function auxilioAlimentacao() {
    const salarioIncialValor = salarioInicial()

    if (salarioIncialValor <= 800) {
        return (salarioIncialValor * 0.25)
    }
    else if (salarioIncialValor <= 1200) {
        return (salarioIncialValor * 0.20)
    }
    else {
        return (salarioIncialValor * 0.15)
    }
}
function calculaSalarioFinal() {
    const salI = salarioInicial()
    const auxAliment = auxilioAlimentacao()
    return salI + auxAliment
}

function mostraResultado() {
    const valorHoraTrab = horaDeTrabalho()
    const salarInicial = salarioInicial()
    const auxAliment = auxilioAlimentacao()
    const salarioTotal = calculaSalarioFinal()

    const resultadoDiv = document.createElement('div');
    resultadoDiv.innerHTML = `
        <p>Código do funcionário: ${codigoFun}</p>
        <p>Horas trabalhadas: ${horasTrabalhadas}</p>
        <p>Valor da hora trabalhada: ${valorHoraTrab}</p>
        <p>Salário inicial: ${salarInicial}</p>
        <p>Auxílio Alimentação: ${auxAliment}</p>
        <p>Salário Final: ${salarioTotal}</p>
    `;
    document.body.appendChild(resultadoDiv);
    resultadoDiv.style.fontFamily = 'Arial'
}
document.addEventListener("DOMContentLoaded", function() {
    mostraResultado();
});
