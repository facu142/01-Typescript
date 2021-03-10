/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles,
    
}

interface Detalles{
    autor:string,
    anio:number,
}

const reproductor:Reproductor = {
    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
        autor: 'Edd sheran',
        anio: 2015,
    }
}

const autor = 'fulano';

const { volumen, segundo, cancion, detalles } = reproductor;
const {autor:AutorDetalle} = detalles

/* 
console.log(`El volumen actual es ${volumen}`);
console.log(`El segundo actual es ${segundo}`);
console.log(`La cancion actual es ${cancion}`);
console.log(`El autor es ${AutorDetalle}`);
*/

const dbz:string[] = ['Goku', 'Vegetta', 'Trunks'];

const [, , p3] = dbz

//console.log(`personaje 1 ${p1}`);
//console.log(`personaje 2 ${p2}`);
console.log(`personaje 3 ${p3}`);



