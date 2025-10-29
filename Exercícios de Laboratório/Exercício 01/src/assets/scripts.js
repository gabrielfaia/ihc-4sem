var count = 0

function mudarCor (cor) {
    document.body.style.backgroundColor = cor;
    limite()
}

function limite() {
    count++
    
    if (count > 5) {
        alert('Atenção: Você clicou no botão mais de 5 vezes!')
    } 
}
