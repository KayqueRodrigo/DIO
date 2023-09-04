//O que são vetores ou arrays

//como declarar um array
/*let array=['Stirng', 1, true];
console.log(array);*/

//Podem guardar varios tipo de dados
let array=['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
console.log(array);

                           //manipulando arrays
//Método forEach()

/*array.forEach(function(item, index){console.log(item, index)});*/
//Ele passa de posição em posição do array

//Método push()

/*array.push('novo item');
console.log(array);*/
//Adiciona um valor ao array

//Método pop()

/*array.pop();
console.log(array);*/
//remove o último item do array

//Método shift()

/*array.shift();
console.log(array);*/
//remove um item do início do array

//Método unshift()

/*array.unshift('vida');
console.log(array);*/
//adciona item no início do array

//Método indexOf()

/*console.log(array.indexOf(true));*/
//Retorna o índice de um valor

//Método splice()

/*array.splice(0, 3);
console.log(array);*/
//Os íncide de 0 á 3 foram apagados

//Método slice()

/*let novoarray = array.slice(0, 3);
console.log(novoarray);*/
//retorna apenas os valores dos index 0 a 3

                             //OBJETO

let object = {string: 'string', number: 1, Boolean: true, array:["array"], 
objectInterno: {objectInterno: 'objeto interno'}};

console.log(object);

//Desestruturação do objeto
//1º forma
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

//2ºforma
var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);





