const rastreamento = document.getElementsByName('radioRastreiamento')
const regiao = document.getElementsByName('radioRegiao')
const quantidadePecas = document.querySelector('#pecasNumber')
const distaciaKm = document.querySelector('#pecasKm')
const resp = document.querySelector('#resultado')

const combustivel = 5.00
let regiaoEscolhida
let valorFinal = 0
let fretePecas = 0
let freteKm = 0

const frete = {
    Sul: 1.0,
    Suldeste: 1.20,
    CO: 1.30
}

const freteDesconto = {
    Sul: 0.10,
    Suldeste: 0.12,
    CO: 0.13
}

resp.innerHTML = ''

function determinaTaxaRastreio() {
    if (rastreamento[0].checked) {
        valorFinal += 200
        return 'R$200,00'
    }
     else {
        valorFinal += 0
        return 'O rastreio não foi escolhido!'
    }
}

function determinaRegiao(){
    if (regiao[0].checked) {
        return 'Sul'

    } 
    else if (regiao[1].checked) {
        return 'Suldeste'

    }
     else {
        return 'CO'
    }
}

function calcula() {

    const quantidade = Number(quantidadePecas.value)
    const distacia = Number(distaciaKm.value)
    const taxaRastreio = determinaTaxaRastreio()
    const regiaoEscolhida = determinaRegiao()
    
    if (quantidade < 1000) {

        fretePecas = ((frete[regiaoEscolhida] * quantidade)).toFixed(2)

        freteKm = (combustivel * distacia).toFixed(2)

        valorFinal += (frete[regiaoEscolhida] * quantidade) + (combustivel * distacia)

    } 
    else {
        let diferença = quantidade - 1000

        let valorComDesconto = frete[regiaoEscolhida] - (frete[regiaoEscolhida] * freteDesconto[regiaoEscolhida])

        fretePecas = ((frete[regiaoEscolhida] * 1000) + (diferença * valorComDesconto)).toFixed(2)

        freteKm = (combustivel * distacia).toFixed(2)

        valorFinal += (frete[regiaoEscolhida] * 1000) + (diferença * valorComDesconto) + (combustivel * distacia)
    }

    resp.innerHTML = `<p>Taxa de rastreamento: ${taxaRastreio}</p>
                      <p>Valor do frete pelas peças: R$${fretePecas}</p>
                      <p>Valor do frete por quilometro: R$${freteKm}</p>
                      <p>Total do frete: R$${valorFinal.toFixed(2)}</p>`
}