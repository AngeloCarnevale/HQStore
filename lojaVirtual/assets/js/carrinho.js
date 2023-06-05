
var quant = localStorage.length
var carrinho = document.getElementById('cartProducts')
var total = []
var produto =  JSON.parse(localStorage.getItem('carrinho'))

for (i = 0; i <= produto.length; i++) {
    carrinho.innerHTML += `
    <div class="produto-carrinho">
        <img src='`+produto[i].img+`'/>
        <p class="textoProduto">`+produto[i].nome+`</p>
        <p class="preco">R$`+produto[i].preco+`,00</p>
        <p class="quantidade">`+produto[i].quantidade+`</p>
    </div>
    `
}

sum = 0
for (i = 0; i < total.length; i++) {
    sum += total[i]
}