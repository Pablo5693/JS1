function determinarSigno(numero) {
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}

const miNumero = 7;
determinarSigno(miNumero);

// Algoritmo utilizando un ciclo
function imprimirNumeros() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

imprimirNumeros();
