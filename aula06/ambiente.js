/*let num = [5, 8, 2, 9, 3]
num.sort()
num[5] = 1
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) */

/*let valores = [8, 1, 7, 4, 2, 9]

for(let pos =0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */


//um jeito mais simples porem mais avançado:

/* 
let num = [8, 7, 5, 9, 6]
    for(let pos in num){
        console.log(`A posição ${pos} tem o valor ${num[pos]}` )
    }
*/

let num = [8, 7, 4, 2, 9]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log("O valor não existe neste array")
} else {
    console.log(`O valor está na posição ${pos}`)
}

