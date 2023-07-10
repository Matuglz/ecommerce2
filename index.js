function esPrimo(numero) {
    if (numero < 2) {
      return false
    }
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        return false
      }
    }
    return true
  }
  


function calculadora() {
    let ecuacion = prompt("¿Que ecuacion deseas realizar? \n 1-Suma \n 2-Resta \n 3-Multiplicacion \n 4-Division \n 5-Numero par \n 6-Consultar si un numero es primo")
    if (ecuacion.toLowerCase() === "suma" || ecuacion == 1) {
        let num1 = parseInt(prompt("Digita tu primer numero"))
        let num2 = parseInt(prompt("Digita tu segundo numero"))
        let suma = num1 + num2
        alert(suma)
    }
    else if (ecuacion.toLowerCase() === "resta" || ecuacion == 2) {
        let num1 = parseInt(prompt("Digita tu primer numero"))
        let num2 = parseInt(prompt("Digita tu segundo numero"))
        let resta = num1 - num2
        alert(resta)
    }
    else if (ecuacion.toLowerCase() === "multiplicacion" || ecuacion == 3) {
        let num1 = parseInt(prompt("Digita tu numero a multiplicar"))
        let num2 = parseInt(prompt("Digita tu multiplicador"))
        let multiplicacion = num1 * num2
        alert(multiplicacion)
    }
    else if (ecuacion.toLowerCase() === "division" || ecuacion == 4) {
        let num1 = parseInt(prompt("Digita tu dividendo"))
        let num2 = parseInt(prompt("Digita tu divisor"))
        let division = parseInt(num1 / num2)
        let resto = num1 % num2
        if (resto > 0) {
            alert("tu resultado es " + division + " y el resto es " + resto)
        }
        else {
            alert(division)
        }
    }
    else if (ecuacion.toLowerCase() === "numeros pares" || ecuacion == 5) {
        let tipoDeEcuacion = prompt("Queres saber si un numero es par (Digite 1) o saber los numeros pares que hay entre dos numeros (Digite 2)")
        if (tipoDeEcuacion == 1) {
            let num1 = parseInt(prompt("Ingrese su numero"))
            let esPar = num1 % 2
            if (esPar == 0) {
                alert(num1 + " es par")
            }
            else {
                alert(num1 + " no es par")
            }
        }
        else if (tipoDeEcuacion == 2) {
            let num1 = parseInt(prompt("Desde"))
            let num2 = parseInt(prompt("Hasta"))
            for (i = num1; i <= num2; i++) {
                if (i % 2 == 0) {
                    alert(i + " es par")
                }
            }
        }
        else {
            alert("Cometiste un error :(")
        }
    }
    else if (ecuacion.toLowerCase() === "consultar si un numero es primo" || ecuacion == 6) {
            let num1 = parseInt(prompt("Ingrese su numero"))

            if (esPrimo(num1)) {
                alert(num1 + " es primo.")
            }
            else {
                alert(num1 + " no es primo.")
            }
    }
    else{
        alert("Cometiste un error :(")
    }
}

calculadora()