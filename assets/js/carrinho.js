var total = []
var produtos = JSON.parse(localStorage.getItem('carrinho'))
var botao = document.getElementById('div-botao')
var carrinho = document.getElementById('produtos-carrinho')

finalizarCompra = () => {
    Swal.fire({
        title: 'Deseja mesmo finalizar a compra?',
        showDenyButton: true,
        confirmButtonText: 'Sim',
        denyButtonText: `Não`,
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear()
            Swal.fire(
                'Compra finalizada!',
                'Obrigad@ por comprar conosco',
                'success'
            )
        }
    })

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
        
        <p class="total">Subtotal: R$`+ soma + `,00</p>
        <div id="cep">
            <label id="textoCep">Verificar CEP de entrega<label>
            <input id="input-cep" type="text" placeholder="Digite seu cep">
            <input type="submit" onclick="verificarCep()" id="btn-cep" value="Verificar">
            
        </div>
        `
    }
}

verificarCep = () => {

    let cep = document.getElementById('input-cep').value

    if (cep.length == 8 && isFinite(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {

                if (JSON.stringify(data) == '{"erro":true}') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Infelizmente não encontramos seu cep',
                    })
                    document.getElementById('input-cep').value = ''
                }
                else {
                    console.log(data)
                    Swal.fire(
                        'CEP Válido',
                        'Verificação bem sucesida',
                        'success'
                    )
                    document.getElementById('input-cep').value = ''
                }
            })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Formato do cep inválido',
        })
        document.getElementById('input-cep').value = ''
    }
    localStorage.setItem('cep', cep)

}
paginaCarrinho()
