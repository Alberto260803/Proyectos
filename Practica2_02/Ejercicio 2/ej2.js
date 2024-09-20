"use strict";

function multiplicar(num){
    let lineaTabla = '';
    for(let i=0;i<=10;i++)
        lineaTabla += `${num} x ${i} = ${num*i}\n`;

    return lineaTabla;
}

function tablas(num,funcion){
    let tablasEnteras = '';

    for(let i=num;i>=2;i--){
        tablasEnteras += `TABLA DEL ${i}:\n \n`;
        tablasEnteras += funcion(i);
        tablasEnteras += `\n`;
    }

    return tablasEnteras;
}

console.log(tablas(5,multiplicar));