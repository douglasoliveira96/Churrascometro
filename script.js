// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 200 ml
// Refrigerante/água - 100 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas= bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML =`<p>${qtdTotalCarne/1000}kg de carne.</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qtdTotalCerveja/355)} latas de cerveja.</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qtdTotalBebidas/2000)} garrafas de 2L de bebidas (refrigerante, água, etc).</p>`

}

function carnePP(duracao) {
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}