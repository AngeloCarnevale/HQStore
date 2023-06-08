var desc_produto = document.getElementById('infos-produto')
var link = document.getElementsByTagName('a')
lista = new Array
var carrinho = JSON.parse(localStorage.getItem('carrinho'))
var produtoUnico = JSON.parse(localStorage.getItem('produto'))

if(carrinho == null){
    localStorage.setItem('carrinho', JSON.stringify(lista))
}
console.log()

exibirProduto = () => {
    
    var produto = JSON.parse(localStorage.getItem('produto'))

    desc_produto.innerHTML += `
    
        <div class="info-produto">
            <img src="`+produto.img+`"/>
            <div class="nome-preco">
                <h2 class="nome-produto" >`+produto.nome+`</h2>
                <hr>
                <p class="descricao-produto">`+produto.descricao+`</p>
                <p class="preco-produto">R$`+produto.preco+`,00</p>
                <a class="botao-adicionar" onclick="atualizarCarrinho(`+produto.id+`, '`+produto.nome+`', `+produto.preco+`, '`+produto.img+`')" href="#">Adicionar ao carrinho</a>
                
            </div>
        </div>
        `
}

exibirProduto()

atualizarCarrinho = (id, nome, preco, img) => {

    var ids = []
    for(var i = 0; i < carrinho.length; i++){
        ids.push(carrinho[i].id)
    }
    let produto = {
            id: id,
            nome: nome,
            preco: preco,
            img: img,
            quantidade: 1
        }
    if(carrinho == ''){
        
        carrinho.push(produto)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
    else {
        if(ids.includes(id)){
            for(var i = 0; i < carrinho.length; i++){
                if(carrinho[i].id == id){
                    carrinho[i].quantidade++
                }
            }
        }
        else {
            let produto = {
                id: id,
                nome: nome,
                preco: preco,
                img: img,
                quantidade: 1
            }
            carrinho.push(produto)
        }
} 
    localStorage.setItem('carrinho', JSON.stringify(carrinho))   
    localStorage.setItem('produto', JSON.stringify(produtoUnico))
alert('Produto adicionado com sucesso!')
}  