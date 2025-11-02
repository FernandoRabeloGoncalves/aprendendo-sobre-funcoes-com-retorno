// Lê os valores de Entrada
const valorSalario = parseFloat(gets());
const valorBeneficio = parseFloat(gets());

// Calcula o imposto através da função "CalcularImposto"
const valorImposto = calcularImposto(valorSalario);
// Calcula e imprime a Saída (com 2 casas decimais);
const saida = valorSalario - valorImposto + valorBeneficio;
print(saida.tofixed (2));

// Função Útil para o calculo do imposto (baseado nas aliquotas)
function calcularImposto(salario){
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;

    } else if (salario >= 1100.01 && salario <= 2500.00) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}