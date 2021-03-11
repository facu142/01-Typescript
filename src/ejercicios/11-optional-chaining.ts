/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string,
  hijos?: string[]
}

const pasajero1: Pasajero = {
  nombre: 'Facundo',
}

const pasajero2: Pasajero = {
  nombre: 'Raquel',
  hijos: ['Facundo', 'Paloma']
}

function imprimirHijos(pasajero: Pasajero): void {

  const cantidadHijos = pasajero.hijos?.length || 0 ;


  console.log(cantidadHijos);

}

imprimirHijos(pasajero1);