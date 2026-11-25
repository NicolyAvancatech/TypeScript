let produto1: string = "Arroz";
let produto2: string = "Feijão";
let produto3: string = "Leite";

let qtdArroz: number = 2;
let qtdFeijao: number = 3;
let qtdLeite: number = 4;

let valorArroz: number = 25;
let valorFeijao: number = 8;
let valorLeite: number = 5;

let totalArroz: number = qtdArroz * valorArroz;
let totalFeijao: number = qtdFeijao * valorFeijao;
let totalLeite: number = qtdLeite * valorLeite;

let totalCompra: number = totalArroz + totalFeijao + totalLeite;
let desconto: number = totalCompra * 0.1;

console.log( "==== SUPERMERCADO ==== \n");
console.log( `Arroz: R$ ${totalArroz} `);
console.log( `Feijão: R$ ${totalFeijao} `);
console.log( `Leite: R$ ${totalLeite} `);

console.log( `Total: R$ ${totalCompra} `);
console.log( `Arroz: R$ ${desconto} `);

console.log( `Valor a Pagar: R$ ${totalCompra - desconto} `);

