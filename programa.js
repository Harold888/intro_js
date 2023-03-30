//Ventana de alerta
//alert("Hola JavaScript");
//Mensaje en consola
//console.log("Hola mundo");

//No tipado: No define el tipo de dato que va a guardar en las variables 
/*
let a = 34;
let b = 56;

console.log(a+b);
*/

//Leer el dato que ingrean 
/*


let nombre

nombre = prompt();

console.log("Hola " + nombre);
*/

// Elevar a la potencia con ** o math.pow(a,2) math.sqrt(a**2+b**2)
/*
function calcular(base, altura){

    let area;
    let perimetro;

    area = base*altura;
    perimetro = 2*(base+altura);

    return [area, perimetro];

}
*/
var a = 4;
var b = 3;

if(a<b){

    console.log(a);

}else if(b<a){

    console.log(b);

}

var c = 5;
var d = 4;
var e = 3;

if(c>d && c>e){

    console.log(c);

}else if(d>e && d>c){

    console.log(d);

}else if(e>d && e>c){

    console.log(e);
    
}