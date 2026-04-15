//foreach
let lista = ["robson", 39, "maçã", true];
console.log(lista);
console.log(lista[1]);
lista.push("carlos"); // adiciona no fim da lista
console.log(lista);
lista.unshift("pablo") // adiciona no começo da lista
console.log(lista);
lista.pop(lista); // remove do final da lista
console.log(lista);
lista.shift(); // remove o inicio da lista
console.log(lista);
lista.reverse(); // reverte a ordem da lista
console.log(lista);
console.log(lista.length); // mostra a quantidade de elementos na lista

lista.push([2], "jose");
lista.splice(1, 0, " carlos"); // adiciona no meio da lista
console.log(lista);
lista.splice(5, 1); // 1° numero é a posição, o 2° é a quantidade q quero remover (5 <- posição 5, 1<- apenas remove posição 5)
console.log(lista)