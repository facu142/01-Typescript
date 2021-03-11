/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) : string{
  return argumento.toString();
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1,2,3,4,5,6]);
let soyExplicito = queTipoSoy<number>(100);
