/*
  A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

  Determinar cual de los dos elementos de texto es mayor
  Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
  Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
*/


let valores = [true, 5, false, "hola", "adios","parangaricutirimicuaro","jijiji a perro como te gusta estar hablando", 2];
let objValues = {};
let arr = []
valores.map( (value,index) =>{
  if(typeof value == 'string'){
    let a = valores[index];
    objValues[a] = value.length;
  }else if(typeof value == 'number'){
    arr.push(value);
    if(arr.length>1){
      console.log(`Multiplicacion ${arr[0]} X ${arr[1]} = ${arr[0]*arr[1]}`)
      console.log(`Suma ${arr[0]} + ${arr[1]} = ${arr[0]+arr[1]}`)
      console.log(`Resta ${arr[0]} - ${arr[1]} = ${arr[0]-arr[1]}`)
      console.log(`Division ${arr[0]} / ${arr[1]} = ${arr[0]/arr[1]}`)
    }
  }
})


let prev = objValues["hola"]
for(const property in objValues){
  if(objValues[property]>prev){
      prev = objValues[property]
  }
}

console.log(prev)