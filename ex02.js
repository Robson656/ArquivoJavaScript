// Verificar se um numero é maior que 10

let num = 15

if(num > 10){
    console.log(`o número ${num} é maior que 10`);
}

//verifique se um numero é par ou impar

let num2 = 8
if (num2 % 2 === 0){
    console.log(`o numero ${num2} é par`);
}
else{
    console.log(`o numero ${num2} é impar`);
}

//verificar se um numero é positivo

let num3 = -45

if (num3 >= 0){
    console.log(`${num3} é um numero positivo`)
}
else{
    console.log(`${num3} é um numero negativo`)
}

let temp = 22
if(temp <= 15){
    console.log(`${temp}° é frio`)
}
else if(temp >=16 && temp <=25){
    console.log(`${temp}° é agradavel`)
}
else{
    console.log(`${temp}° é quente`)
}

let idade = 17

if(idade <= 12 ){
    console.log("é uma criança")
}
else if(idade >= 13 && idade <= 17){
    console.log("é um adolecente")
}
else{
    console.log("é um adulto")
}