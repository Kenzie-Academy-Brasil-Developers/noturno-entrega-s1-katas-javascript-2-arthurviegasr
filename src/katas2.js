// comece a criar a sua função add na linha abaixo
function add(num1,num2){
    return num1+num2;
}
console.log(add(3,5));
console.assert(add(3,5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(num1,num2){ //num1 = 4 num2 = 6
    let result = 0; // result = 0 num1 = 4 num2 = 6
    for (let i = 1; i <= num1; i++){ // result = 0 num1 = 4 num2 = 6 i = 1
        result = add(result,num2) // result = 6 num1 = 4 num2 = 6 i = 1 // result = 12 num1 = 4 num2 = 6 i = 2 // result = 18 num1 = 4 num2 = 6 i = 3 // result = 24 num1 = 4 num2 = 6 i = 4
    }
    return result;
}
console.log(multiply(4,6));
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo
function power(num1,num2){
    let result = 1; 
    for (let i = 1; i <= num2; i++){ 
        result = multiply(result,num1)
    }
    return result;
}
console.log(power(3,4));
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

// comece a criar a sua função factorial na linha abaixo
function factorial(num1){
    if (num1===0) return 1;
    let result = num1;
    for (let i = 1; i < num1; i++){
        result = multiply(result,i);
    }
    return result;
}
console.log(factorial(5));
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
