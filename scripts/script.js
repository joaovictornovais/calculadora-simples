/* Criando a função de calcular */
function calcular(){
    /* Importando as informações do HTML */
    let txtn1 = document.getElementById('txtn1')
    let txtn2 = document.getElementById('txtn2')

    let selector = document.getElementById('selector').value /* IMPORTANTE CONVERTER PARA VALUE */
    let res = document.getElementById('res')

    /* Convertendo de String para Number */
    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)

    switch(selector){
        case '+':
            calculo = (n1 + n2)
            res.innerHTML = `<p>${n1} + ${n2} = <span>${calculo}</span></p>`
            break
        
        case '-':
            calculo = (n1 - n2)
            res.innerHTML = `<p>${n1} - ${n2} = <span>${calculo}</span></p>`
            break
        
        case '/':
            calculo = (n1 / n2)
            res.innerHTML = `<p>${n1} ÷ ${n2} = <span>${calculo}</span></p>`
            break
        
        case '*':
            calculo = (n1 * n2)
            res.innerHTML = `<p>${n1} x ${n2} = <span>${calculo}</span></p>`
            break
    }
}
