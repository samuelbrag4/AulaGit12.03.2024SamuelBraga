// Criei mais algumas variáveis 
let a = 10;
let b = 1;
let inicio = 0;
let fim = 0;

// Crio uma cadeia de if para dar valor a inicio e fim
if (a >= b) {
    inicio = b;
    fim = a;
} else {
    inicio = a;
    fim = b;
}

// Realizo o looping while/enquanto.
while (inicio <= fim) {
    // Faco a minha logica aqui.
    console.log(inicio);
    inicio++;
}

// Exibo as mensagens
console.log("terminou");