/*
    ===== Código de TypeScript =====
*/

import { calcularISV, Producto } from "./ejercicios/06-destructuracion-funcion";

const carritoCompras :Producto[] = [{
    desc:'telefono 1',
    precio:100,
},
{
    desc:'Telefono 2',
    precio:150
}];


const [total, isv ] = calcularISV(carritoCompras);


console.log('Total:', total);
console.log('ISV:', isv );
