// um numero fatorial é um numero multiplicado pelo seu antecessor até 1
//exemplo 5 fatorial = 5! = 5 x 4 x 3 x 2 x 1

/*function fatorial(n){ //define o nome da função
    let fat = 1 // a variavel fat recebe valor 1
    for(let c = n; c > 1; c--){ //para variavel c = a variavel n e c maior que 1 retire um ate ser igual a c
        fat *= c //multiplique var fat pelo valor de c ate que c seja igual a 1
    }
    return fat //retorne o valor da variavel fat
}
console.log(fatorial(5)) //mostre no console a multilplicação fatorial de 5. */


//um exemplo de recursividade 

function fatorial(n){
    if (n ==1 ) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(8))