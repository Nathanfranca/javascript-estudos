function tabuada(){  //nome da função a ser chamada
    let num = document.getElementById('txtn') //atribui a variavel num ao elemento html txtn
    let tab = document.getElementById('seltab') //atribui a variavel tab ao elemnto html seltab
    if (num.value.length == 0){ //se o valor de num for = a 0
        window.alert("Por favor, digite um número!") //alerte a frase entre parenteses
    } else { //ou então
        let n = Number(num.value) // variavel n recebe o valor da variavel num
        let c = 1 // variavel c recebe o valor 1
        tab.innerHTML = "" // o campo html recebe valor null ou seja nada
        while (c <= 10) { // enquanto variavel c for menor ou igual a 10
            let item = document.createElement('option') //a variavel item cria um elemento html option
            item.text = `${n} x ${c} = ${n * c}` // item recebe o valor de n vezes c
            item.value = `tab${c}` // o item tab recebe o valor de c depois da multiplicação
            tab.appendChild(item) // cria um 'menu suspenso' para baixo no campo html tab
            c++ // adiciona 1 sempre que passar pelo loop ate chegar a 10
        }
    }
}