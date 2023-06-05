lista = new Array
var carrinho = JSON.parse(localStorage.getItem('carrinho'))
if(carrinho == null){
    localStorage.setItem('carrinho', JSON.stringify(lista))
}

var productSingle = document.getElementById('productSingle')

exibirProduto = () => {
    
    var produto = JSON.parse(localStorage.getItem('produto'))

    productSingle.innerHTML += `
    
        <div class="info-produto">
            <img src="`+produto.img+`"/>
            <div class="nome-preco">
                <p class="nome_produto" >`+produto.nome+`</p>
                <p class="preco_produto">R$`+produto.preco+`,00</p>
                <a class="botao-adicionar" onclick="atualizarCarrinho(`+produto.id+`, '`+produto.nome+`', `+produto.preco+`, '`+produto.img+`')" href="#">Adicionar ao carrinho</a>
            </div>
        </div>
        `
}

exibirProduto()

atualizarCarrinho = (id, nome, preco, img) => {
    
    let produto = {
        id: id,
        nome: nome,
        preco: preco,
        img: img,
        quantidade: 1
    }

    carrinho.push(produto)
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    
alert('Produto adicionado com sucesso!')
    
    
}  
