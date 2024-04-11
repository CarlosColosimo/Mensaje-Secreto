function Mensaje() {
    const archivoInput = document.getElementById('archivoCodificado');
    const archivo = archivoInput.files[0];

    if (!archivo) {
        alert('No hay archivo');
        return;
    }

    const lector = new FileReader();

    lector.onload = function(evento) {
        const mensajeCodificado = evento.target.result.trim();
        const partesDecodificadas = [];

        let parteActual = '';

        for (let caracter of mensajeCodificado) {
            if (caracter === '(') {
                partesDecodificadas.push(parteActual);
                parteActual = '';
            } else if (caracter === ')') {
                partesDecodificadas.push(parteActual.split('').reverse().join(''));
                parteActual = '';
            } else {
                parteActual += caracter;
            }
        }

        if (parteActual) {
            partesDecodificadas.push(parteActual);
        }

        const mensajeDecodificado = partesDecodificadas.join(' ');
        document.getElementById('resultado').innerText = mensajeDecodificado;
    };

    lector.readAsText(archivo);
}
