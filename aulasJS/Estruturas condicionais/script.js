       //estruturas condicionais
  //Estruturas de decisão

/*var jogador1 = 0;
var jogador2 = 1;
var placar;

//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : 
console.log('Os jogadores não são válidos');

//if, else if e else
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador1 marcou ponto!');
    placar = jogador1 > jogador2; 
} 
else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador2 marcou ponto!');
    placar = jogador2 > jogador1;
}
else{
    console.log('Niguém marcou ponto');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador2 ganhou!');
    default:
        console.log('Ninguém ganhou');
}*/

    //Estruturas de repetição

    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
    let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',};

    //for executa uma instrução até que ela seja falsa
    /*for (let indice = 0; indice < array.length; indice++){
        console.log(indice);
    }*/

    //O for/in executa repetição apartir de uma propriedade
    //com array
    /*for (let i in array){
        console.log(i);
    }

    //com object
    for(i in object){
        console.log(i);
    }*/

    //For/of - executa repetição apartir de valor
    //com array
    /*for (i of array){
        console.log(i);
    }

    //com object
    for (i of object.propriedade1){
        console.log(i);
    }*/

    //While
    var a = 0;
/*
    while(a < 10){
        a++;
        console.log(a);
    }*/

    //Do/While

do{
    a++;
    console.log(a);
}while(a < 10)

