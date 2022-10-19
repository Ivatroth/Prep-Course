// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 
  var matriz=[]
  for(let clave in objeto){
    matriz.push([clave, objeto[clave]]);
   
  }
  return matriz

  //FUNCIONA:
  //PEEEERO HAY UN Metodo de Objet mas fasil, QUE DEBUEVE LO MISMO EN UN SOLO PASO
  //AQUI ABAJO LO DEJO
  //return  Object.entries(objeto);
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 
  //Creo el objeto con los caracteres no repetidos.
  var obj={};
  for(i=0; i<string.length; i++){
    obj[string[i]] =0 ;
  }
  //ahora cuento cuantos hay de cada uno NOTA: NO ME DEJABA HACERLO DE UNA VEZ
  //POR ESO TUVE QUE REPETIR EL FOR
  for(i=0; i<string.length; i++){
    obj[string[i]] ++ ;
  }
   
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var s2=s.toUpperCase();
  var s3=s.toLowerCase();
  var may='';
  var min='';
  for (i=0; i<s.length; i++){
    if(s2.includes(s.charAt(i))){
      may=may.concat(s.charAt(i));
    }else if (s3.includes(s.charAt(i))){
      //return 'entro por else'
      min=min.concat(s.charAt(i));
    }
  }

  return may+min;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  //transformo la frase en array de palabras
  var frase = str.split(' ');

  // itero en el array y trabajo en cada palabra, primero la convierto en array (split)
  // luego la invierto (reverse) y luego la uno de nuevo en una palabra (join)
  // voy concatenando cada una y luego la retorno
  var salida= '';
  for(i=0; i<frase.length; i++){
    var a = frase[i].split('');
    var b = a.reverse();
    var c = b.join('');
    salida += c +' '; 
  }
  return salida.trimEnd();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
/*
  // transformo el numero en string
  var a = numero.toString();
  // luego al string lo hago array
  var b = a.split('');                //PARECE QUE PODIA HACER TODO EN UNA SOLA LINEA
  // luego lo invierto                // numero.toString().split('').reverse().join('');
  var c = b.reverse();                // y a la mm....
  // luego lo vuelvo cadena de nuevo
  var d = c.join('');

  if (a === d){ return "Es capicua";}   // TAMBIEN PODIA HACER TODO DENTRO DEL IF
  else {return "No es capicua";}
*/

// TODO LO ANTERIOR SE RESUMIO EN LO SIGUIENTE :)

  if(numero === Number(numero.toString().split('').reverse().join(''))){ 
    return "Es capicua";
  }
  else {
    return "No es capicua";
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var a = cadena.replaceAll('a','');
  var b = a.replaceAll('b', '');
  var c = b.replaceAll('c', '');
  
  return c;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //ESTA ME COSTO UN MONTON PORQUE QUERIA HACER YO
  //LA LOGICA DE ORDENACION, PEERO NO ME SALIA
  //ASI QUE APRENDI COMO USAR SORT Y LISTO
  arr.sort( (a,b) => {
    if (a.length<b.length) {
      return -1;
    }
    if (a.length>b.length) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  });

  return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var arr2=[];
  for(i=0; i<arreglo1.length; i++){
    if(arreglo2.includes(arreglo1[i])){
      arr2.push(arreglo1[i])
    }
  }
  return arr2;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

