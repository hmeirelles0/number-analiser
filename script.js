let array = []

function adicionou() {
    let n = window.document.getElementById('input')
    let inp = Number(n.value)

    if (inp > 100 || inp < 1) {
        window.alert('Por favor, digite um número válido e tente novamente.')
    } else {
        if (array.indexOf(inp) != -1) {
            window.alert('Valor já encontrado na lista! Favor, digite um valor diferente.')
        } else {
            array.push(inp)
            let li = window.document.getElementById('flista')
            let item = window.document.createElement('option')
            item.text = `O número ${inp} foi adicionado!`
            li.appendChild(item)
        }
    }
    n.value = ''
    n.focus()
}

function finalizar() {
    if (array.length == 0 || array.length == 1) {
        window.alert('Por favor, cadastre mais números na sequência e tente novamente.')
   // } else if () {
    } else {
        array.sort()
        let s = Number(array[0])
        for (let pos = 1;pos < array.length; pos++) {
            s += Number(array[pos]) 
        }

        let m = Number(array[0])
        for (let pos2 = 0; pos2 < array.length; pos2++) {
            m = Number(array[pos2])
        }
        
        let res = window.document.querySelector('div#aguardando')
        res.innerHTML = `Ao todo temos ${array.length} números cadastrados.
        <br><br> O menor valor cadastrado é ${array[0]}.
        <br><br> O maior valor cadastrado é ${m}.
        <br><br> A soma dos valores é ${s}.
        <br><br> A média dos valores é ${s/array.length}.`
    }
}
