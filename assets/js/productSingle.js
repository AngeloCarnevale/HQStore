let desc_produto = document.getElementById('infos-produto')
let link = document.getElementsByTagName('a')
let lista = new Array
let carrinho = JSON.parse(localStorage.getItem('carrinho'))
let produtoUnico = JSON.parse(localStorage.getItem('produto'))


if (carrinho == null) {
    localStorage.setItem('carrinho', JSON.stringify(lista))
}

/* Exibir informações de um produto específico em uma página separada */
exibirProduto = () => {

    let produto = JSON.parse(localStorage.getItem('produto'))

    desc_produto.innerHTML += `
    
        <div class="info-produto">
            <img src="`+ produto.img + `" alt="Imagem do produto"/>
            <div class="nome-preco">
                <h2 class="nome-produto" >`+ produto.nome + `</h2>
                <hr>
                <p class="descricao-produto">`+ produto.descricao + `</p>
                <p class="preco-produto">R$`+ produto.preco + `,00</p>
                <a class="botao-adicionar" onclick="atualizarCarrinho(`+ produto.id + `, '` + produto.nome + `', ` + produto.preco + `, '` + produto.img + `')" href="#">Adicionar ao carrinho</a>
                
            </div>
        </div>
        `
}
exibirProduto()

/* Função para validar e adicionar um item no carrinho */

atualizarCarrinho = (id, nome, preco, img) => {
    let ids = []
    for (let i = 0; i < carrinho.length; i++) {
        ids.push(carrinho[i].id)
    }
    let produto = {
        id: id,
        nome: nome,
        preco: preco,
        img: img,
        quantidade: 1
    }
    if (carrinho == '') {
        carrinho.push(produto)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
    else {
        if (ids.includes(id)) {
            for (let i = 0; i < carrinho.length; i++) {
                if (carrinho[i].id == id) {
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
  
    Swal.fire(
    'Parabéns',
    'Produto adicionado ao carrinho com sucesso',
    'success'
    )
} 