
function decodificarMensaje() {
    const Codificador = document.getElementById('msj').value.trim();
    const Decodificadas = [];

    let parteActual = '';

    for (let simbolo of Codificador) {
        if (simbolo === '(') {
            Decodificadas.push(parteActual);
            parteActual = '';
        } else if (simbolo === ')') {
            Decodificadas.push(parteActual.split('').reverse().join(''));
            parteActual = '';
        } else {
            parteActual += simbolo;
        }
    }

    if (parteActual) {
        Decodificadas.push(parteActual);
    }

    const Decodificador = Decodificadas.join(' ');
    document.getElementById('resultado').innerText = Decodificador;
}