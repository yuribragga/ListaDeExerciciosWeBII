
const rastreamento = document.getElementsByName('radioRastreiamento');
const regiao = document.getElementsByName('radioRegiao');
const quantidadePecas = document.querySelector('#pecasNumber');
const distanciaKm = document.querySelector('#pecasKm');
const resp = document.querySelector('#resultado');

const combustivel = 5.00;
let regiaoEscolhida;
let valorFinal = 0;
let fretePecas = 0;
let freteKm = 0;

const frete = {
    Sul: 1.0,
    Sudeste: 1.20,
    CO: 0.13
};

resp.innerHTML = '';

function determinaTaxaRastreio() {
    if (rastreamento[0].checked){
        valorFinal += 200;
        return 'R$200,00';
    }
    else {
        valorFinal += 0;
        return 'O rastreio não foi escolhido!';
    }
}

function determinaRegiao(){
    if (regiao[0].checked){
        return 'Sul';
    }
    else if (regiao[1].checked){
        return 'Sudeste';
    }
    else {
        return 'CO';
    }
}

function calcula() {
    const quantidade = Number(quantidadePecas.value);
    const distancia = Number(distanciaKm.value);
    const taxaRastreio = determinaTaxaRastreio();
    const regiaoEscolhida = determinaRegiao();

    if (quantidade < 1000) {
        fretePecas = (frete[regiaoEscolhida] * quantidade).toFixed(2);
        freteKm = (combustivel * distancia).toFixed(2);
        valorFinal += (frete[regiaoEscolhida] * quantidade) * (combustivel * distancia);
    } else {
        let diferenca = quantidade - 1000;
        let valorComDesconto = frete[regiaoEscolhida] - (frete[regiaoEscolhida] * freteDesconto[regiaoEscolhida]);
        fretePecas = ((frete[regiaoEscolhida] * 1000) + (diferenca * valorComDesconto)).toFixed(2);
        freteKm = (combustivel * distancia).toFixed(2);
        valorFinal += (frete[regiaoEscolhida] * 1000) + (diferenca * valorComDesconto) + (combustivel * distancia);
    }

    resp.innerHTML = `<p>Taxa de rastreamento: ${taxaRastreio}</p>
                    <p>Valor do frete pelas peças: R$${fretePecas}</p>
                    <p>Valor do frete por quilômetro: R$${freteKm}</p>
                    <p>Valor do frete: R$${valorFinal.toFixed(2)}</p>`;
}