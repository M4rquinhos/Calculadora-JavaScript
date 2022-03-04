function sumar() {
    let num1 = document.getElementById('opA').value;
    let num2 = document.getElementById('opB').value;
    let resultado = parseInt(num1) + parseInt(num2);
    if (isNaN(resultado)) {
        resultado = 'No se puede sumar porque no son numeros';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}