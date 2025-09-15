function calcularRank(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } 
    else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } 
    else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } 
    else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } 
    else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } 
    else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } 
    else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

    let jogadores = [

    { vitorias: 8, derrotas: 5 },
    { vitorias: 19, derrotas: 4 },
    { vitorias: 35, derrotas: 10 },
    { vitorias: 75, derrotas: 2 },
    { vitorias: 88, derrotas: 3 },
    { vitorias: 99, derrotas: 4 },
    { vitorias: 151, derrotas: 50 }
];

for (let i = 0; i < jogadores.length; i++) {
    let resultado = calcularRank(jogadores[i].vitorias, jogadores[i].derrotas);
    console.log(resultado);
}
