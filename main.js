
const PRECIO_ALBUM = 65000;
const PRECIO_PHOTOCARDS = 15000;
const COSTO_ENVIO = 12000;
const DESCUENTO = 0.1; // 10% de descuento
const MINIMO_DESCUENTO = 150000; // desde acá se aplica el descuento

let stockAlbum = 10;
let stockPhotocards = 20;
let cantidadAlbum = 0;
let cantidadPhotocards = 0;
let subtotal = 0;
let cantidad = 0; // la uso para guardar lo que escribe el usuario
let seguirComprando = true;

const nombre = prompt("¿Cómo te llamas?");
alert("Hola " + nombre + ", bienvenido/a a la Twice Fan Store");

while (seguirComprando) {

    const opcion = prompt(
        "MENÚ\n\n" +
        "1 - Álbum ($" + PRECIO_ALBUM + ") - Stock: " + stockAlbum + "\n" +
        "2 - Pack de photocards ($" + PRECIO_PHOTOCARDS + ") - Stock: " + stockPhotocards + "\n" +
        "3 - Ver carrito y pagar\n" +
        "0 - Salir"
    );

    switch (opcion) {

        case "1":
            cantidad = parseInt(prompt("¿Cuántos álbumes quieres?"));

            // Condicionales dentro del bucle
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Cantidad inválida, escribe un número mayor a 0");
            } else if (cantidad > stockAlbum) {
                alert("Solo quedan " + stockAlbum + " álbumes");
            } else {
                stockAlbum = stockAlbum - cantidad;
                cantidadAlbum = cantidadAlbum + cantidad;
                subtotal = subtotal + (cantidad * PRECIO_ALBUM);
                console.log("Agregaste " + cantidad + " álbum(es). Subtotal: $" + subtotal);
            }
            break;

        case "2":
            cantidad = parseInt(prompt("¿Cuántos packs de photocards quieres?"));

            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Cantidad inválida, escribe un número mayor a 0");
            } else if (cantidad > stockPhotocards) {
                alert("Solo quedan " + stockPhotocards + " packs");
            } else {
                stockPhotocards = stockPhotocards - cantidad;
                cantidadPhotocards = cantidadPhotocards + cantidad;
                subtotal = subtotal + (cantidad * PRECIO_PHOTOCARDS);
                console.log("Agregaste " + cantidad + " pack(s) de photocards. Subtotal: $" + subtotal);
            }
            break;

        case "3":
            if (subtotal === 0) {
                alert("Tu carrito está vacío, agrega algo primero");
            } else {
                let descuento = 0;

                // Solo hay descuento si la compra es grande
                if (subtotal >= MINIMO_DESCUENTO) {
                    descuento = subtotal * DESCUENTO;
                }

                const total = subtotal - descuento + COSTO_ENVIO;

                let resumen = "Resumen de " + nombre + ":\n";
                resumen = resumen + "Álbumes: " + cantidadAlbum + "\n";
                resumen = resumen + "Photocards: " + cantidadPhotocards + "\n";
                resumen = resumen + "Subtotal: $" + subtotal + "\n";
                resumen = resumen + "Descuento: $" + descuento + "\n";
                resumen = resumen + "Envío: $" + COSTO_ENVIO + "\n";
                resumen = resumen + "TOTAL: $" + total;

                console.log(resumen);
                alert(resumen);
                alert("¡Gracias por tu compra!");

                seguirComprando = false; // esto hace que termine el while
            }
            break;

        case "0":
        case null: // por si el usuario le da a "Cancelar"
            alert("¡Hasta pronto!");
            console.log("El usuario salió sin comprar");
            seguirComprando = false;
            break;

        default:
            alert("Opción no válida, elige entre 0 y 3");
            break;
    }
}

console.log("Fin del simulador");