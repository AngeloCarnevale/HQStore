var total = []
var produtos = JSON.parse(localStorage.getItem('carrinho'))
var botao = document.getElementById('div-botao')
var carrinho = document.getElementById('produtos-carrinho')

finalizarCompra = () => {
    localStorage.clear()
    alert('Compra finalizada com sucesso')
    location.reload()
    return false
}

if (produtos == null || produtos == '') {
    botao.innerHTML += `
    <p>Este carrinho está vazio</p>
    `
}
else {
    botao.innerHTML += `
    <a id="botao-finalizar" onclick="finalizarCompra()" href="#">Finalizar compra</a>
    `
}

/* Removendo um item do carrinho */

removerProduto = (id) => {
    let newArray = produtos.filter((item) => item.id !== id);
    console.log(newArray)
    localStorage.setItem('carrinho', JSON.stringify(newArray))
    location.reload()
    return false
}

/* Carregar os produtos no carrinho */

paginaCarrinho = () => {
    produtos.map((val) => {
        let valorTotal = val.preco * val.quantidade
        carrinho.innerHTML += `
    <div class="produto-carrinho">
        <img class="imagem-produto-carrinho" src="`+ val.img + `" alt="Imagem do produto que está no carrinho"/>
        <div class="info-produto-carrinho">
            <p class="textoProduto" >Título: `+ val.nome + `</p>
            <p class="preco-carrinho">Preço: R$`+ valorTotal + `,00</p>
            <p class="quantidade">Quantidade: `+ val.quantidade + `</p>
        </div>
        
    <a class="btn-remove-cart" onclick="removerProduto(`+ val.id + `)" href="#"><img class="lixeira-img" src="../assets/img/lixeira.png"></a>
    </div>

    `
        total.push(valorTotal)
    })
    var soma = 0
    for (var i = 0; i < total.length; i++) {
        soma += total[i]
    }
    if (produtos.length != 0) {
        carrinho.innerHTML += `
        <b class="total">Valor total: `+ soma + `</b>
        `
    }
}

paginaCarrinho()

