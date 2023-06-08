
var soma = 0
var total = []
var produtos =  JSON.parse(localStorage.getItem('carrinho'))
var botao = document.getElementById('div-botao')
var carrinho = document.getElementById('produtos-carrinho')

finalizarCompra = () => {
    localStorage.clear()
    alert('Compra finalizada com sucesso')
    location.reload()
    return false
}

if(produtos == null || produtos == '') {
    botao.innerHTML += `
    <p>Este carrinho está vazio</p>
    `
}
else{
    botao.innerHTML += `
    <a id="botao-finalizar" onclick="finalizarCompra()" href="#">Finalizar compra</a>
    `
}


paginaCarrinho = () => {
    produtos.map((val)=>{
        let valorTotal = val.preco * val.quantidade
        carrinho.innerHTML += `
    <div class="produto-carrinho">
        <img class="imagem-produto-carrinho" src="`+val.img+`"/>
        <div class="info-produto-carrinho">
            <p class="textoProduto" >Título: `+val.nome+`</p>
            <p class="preco-carrinho">Preço: R$`+valorTotal+`,00</p>
            <p class="quantidade">Quantidade: `+val.quantidade+`</p>
        </div>
    </div>
    `
    total.push(valorTotal)
    })
    var soma = 0
    for(var i = 0; i < total.length; i++){
        soma += total[i]
    }
    if (produtos.length != 0){
        carrinho.innerHTML += `
        <b class="total">Valor total: `+soma+`</b>
        `
    }
}
paginaCarrinho()

remover = (id) => {

    console.log(produtos.id)
}
