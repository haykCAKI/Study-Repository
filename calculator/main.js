
function Calcular() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var operation = document.getElementById('operacao').value;

    switch (operation) {
        case "+":
            var somar = valor1 + valor2;
            document.getElementById('saida').innerHTML = "A soma vai dar: " + somar;
            break;
        case "-":
            var menos = valor1 - valor2
            document.getElementById('saida').innerHTML = "A subtração vai dar: " + menos;
            break;
        case "*":
            var mult = valor1 * valor2;
            document.getElementById('saida').innerHTML = "A multiplicação vai dar: " + mult;
            break;
        case "/":
            var divisao = valor1 / valor2;
            document.getElementById('saida').innerHTML = "A divisão vai dar: " + divisao;
            break;
        default:
            console.log('Não achamos o valor')

    }
}

function Limpar(){
    document.getElementById('valor1').value="";
    document.getElementById('valor2').value="";
    document.getElementById('saida').innerHTML="";

}