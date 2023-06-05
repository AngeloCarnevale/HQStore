lista = new Array
var carrinho = JSON.parse(localStorage.getItem('carrinho'))
if(carrinho == null){
    localStorage.setItem('carrinho', JSON.stringify(lista))
}

const items = [
    {
        id: 0,
        nome: 'Batman',
        img: '/assets/img/batman.jpg',
        preco: 7,
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'Almanaque Capitão <br>América',
        img: '/assets/img/capitao-america.jpg ',
        preco: 14,
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'Heróis da tv',
        img: '/assets/img/herois-da-tv.jpg',
        preco: 10,
        quantidade: 0,
    },
    {
        id: 3,
        nome: 'O homem aranha',
        img: '/assets/img/homem-aranha.jpg',
        preco: 15,
        quantidade: 0,
    },
    {
        id: 4,
        nome: 'O homem de ferro',
        img: '/assets/img/homem-de-ferro.jpg',
        preco: 5,
        quantidade: 0,
    },
    {
        id: 5,
        nome: 'O homem aranha',
        img: '/assets/img/iron-man.jpg',
        preco: 17,
        quantidade: 0,
    },
    {
        id: 6,
        nome: 'O incrível hulk',
        img: '/assets/img/o-incrivel-hulk.jpg',
        preco: 12,
        quantidade: 0,
    },
    {
        id: 7,
        nome: 'Torneio de campeões',
        img: '/assets/img/torneio-de-campeoes.jpg',
        preco: 13,
        quantidade: 0,
    },
    {
        id: 8,
        nome: 'Wolwerine',
        img: '/assets/img/wolwerine.jpg',
        preco: 8,
        quantidade: 0,
    },
    {
        id: 9,
        nome: 'X-men',
        img: '/assets/img/xmen.jpg',
        preco: 10,
        quantidade: 0,
    },
    {
        id: 10,
        nome: 'Spider-man',
        img: '/assets/img/spider-man.jpg',
        preco: 11,
        quantidade: 0,
    },
    {
        id: 11,
        nome: 'Thor love and thunder',
        img: '/assets/img/thor.jpg',
        preco: 12,
        quantidade: 0,
    }
]

var containerProdutos = document.getElementById('productsList')

productsPage = () => {
    items.map((val)=>{
        containerProdutos.innerHTML += `
        
        <div class="produto">
            <a class="productImage" href="/views/product.html"><img src='`+val.img+`'/></a>
            <a class="textoProduto" key='`+val.id+`' href="/views/product.html">`+val.nome+`</a>
            <p class="preco">R$`+val.preco+`,00</p>
        </div>
        `
        
    })
}

productsPage()

var links = document.getElementsByTagName('a')

for(var i=0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key')
        let produto = items[key]

        let produtoObj = {
            id: produto.id,
            nome: produto.nome,
            quantidade: produto.quantidade,
            preco: produto.preco,
            img: produto.img
        }
        localStorage.setItem('produto', JSON.stringify(produtoObj))
    })
}
