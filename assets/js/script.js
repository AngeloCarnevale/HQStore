lista = new Array
var carrinho = JSON.parse(localStorage.getItem('carrinho'))
if (carrinho == null) {
    localStorage.setItem('carrinho', JSON.stringify(lista))
}

const items = [
    {
        id: 0,
        nome: 'Batman',
        img: '/assets/img/batman.jpg',
        preco: 7,
        quantidade: 0,
        descricao: 'Na cidade sombria de Gotham, mergulhada no caos e corrupção, um novo protetor surge das trevas. Nesta edição, testemunhamos a transformação do bilionário Bruce Wayne em um vigilante enigmático, conhecido como Batman. A narrativa começa com o brutal assassinato dos pais de Bruce quando ele ainda era uma criança, evento que moldou sua vida para sempre. Determinado a combater o crime que assola sua cidade, Bruce embarca em uma jornada intensa de treinamento físico, intelectual e emocional.'
    },
    {
        id: 1,
        nome: 'Almanaque Capitão América',
        img: '/assets/img/capitao-america.jpg ',
        preco: 14,
        quantidade: 0,
        descricao: 'No universo dos quadrinhos, o Almanaque Capitão América traz uma emocionante coletânea de histórias que celebram o legado do icônico herói patriota. Em suas páginas, somos transportados para os momentos mais emblemáticos da vida e das aventuras do Capitão América. Desde seu surgimento durante a Segunda Guerra Mundial, quando o jovem e corajoso Steve Rogers se voluntariou para um experimento que o transformou no supersoldado conhecido como Capitão América, até os dias atuais, onde ele lidera os Vingadores e defende o mundo contra as ameaças mais perigosas.'
    },
    {
        id: 2,
        nome: 'Heróis da TV',
        img: '/assets/img/herois-da-tv.jpg',
        preco: 10,
        quantidade: 0,
        descricao: '"Heróis da TV" é uma eletrizante história em quadrinhos que reúne os icônicos heróis da televisão em uma aventura épica. Nesse universo, os personagens que conquistaram os corações dos telespectadores ganham vida de forma ainda mais vibrante e se unem para enfrentar uma ameaça de proporções catastróficas. A trama se desenrola quando um misterioso vilão, determinado a dominar o mundo, começa a causar caos nas diversas realidades da televisão. Os heróis, famosos por suas séries e programas de sucesso, são convocados para formar uma equipe improvável e proteger a ordem do multiverso.'
    },
    {
        id: 3,
        nome: 'O Homem-Aranha Venom voltou',
        img: '/assets/img/homem-aranha.jpg',
        preco: 15,
        quantidade: 0,
        descricao: 'Em "Homem-Aranha: Venom Voltou", somos lançados em uma trama repleta de tensão e reviravoltas, quando o arqui-inimigo do Homem-Aranha, Venom, retorna para aterrorizar Nova York. Nessa história em quadrinhos emocionante, Peter Parker enfrenta um dos desafios mais pessoais e perigosos de sua carreira como herói. Quando Eddie Brock, o hospedeiro original do simbionte alienígena conhecido como Venom, escapa de sua prisão e se reúne com a criatura, uma nova onda de crimes e violência assola a cidade. Agora, o Homem-Aranha precisa lidar com a ameaça dupla de Venom e Eddie, ambos sedentos por vingança contra o herói.'
    },
    {
        id: 4,
        nome: 'O Homem de Ferro',
        img: '/assets/img/homem-de-ferro.jpg',
        preco: 5,
        quantidade: 0,
        descricao: '"Homem de Ferro: A Armadura da Justiça" nos apresenta ao brilhante inventor e magnata Tony Stark, que se torna o lendário super-herói conhecido como Homem de Ferro. Nessa história em quadrinhos eletrizante, somos transportados para o mundo da alta tecnologia e heroísmo, onde Tony Stark enfrenta ameaças tanto no campo de batalha quanto em sua vida pessoal. Após sofrer um grave acidente e ser mantido em cativeiro, Tony Stark constrói uma poderosa armadura de alta tecnologia que não só o mantém vivo, mas também lhe concede habilidades sobre-humanas. Assumindo a identidade do Homem de Ferro, ele decide utilizar sua invenção para combater o crime e proteger o mundo.'
    },
    {
        id: 5,
        nome: 'O Invensível Homem de Ferro',
        img: '/assets/img/iron-man.jpg',
        preco: 17,
        quantidade: 0,
        descricao: '"O Invencível Homem de Ferro: Herói Além do Aço" nos leva a uma jornada fascinante pelo mundo de Tony Stark, o gênio, bilionário e filantropo que se transforma no lendário Homem de Ferro. Nessa história em quadrinhos envolvente, testemunhamos o aprimoramento das habilidades de Tony e seu compromisso contínuo em proteger o mundo. A narrativa começa quando uma nova ameaça tecnológica surge, colocando em risco a segurança global. Tony Stark, usando sua inteligência brilhante e aprimorando sua armadura, enfrenta desafios cada vez mais perigosos. Ele precisa superar seus próprios limites para proteger a humanidade contra adversários poderosos.'
    },
    {
        id: 6,
        nome: 'O Incrível Hulk',
        img: '/assets/img/o-incrivel-hulk.jpg',
        preco: 12,
        quantidade: 0,
        descricao: '"O Incrível Hulk" nos leva a uma montanha-russa emocional através da vida do Dr. Bruce Banner e sua alter ego monstruosa, o Hulk. Nessa história em quadrinhos poderosa, testemunhamos a luta de Bruce para controlar sua raiva e lidar com as consequências de sua transformação incontrolável. A trama se desenrola enquanto Bruce Banner, um cientista brilhante atormentado por um acidente de laboratório, se vê transformado em uma criatura verde e poderosa sempre que perde o controle emocional. A busca por uma cura para sua condição se entrelaça com sua batalha interna para manter sua humanidade enquanto enfrenta a rejeição e o medo da sociedade.'
    },
    {
        id: 7,
        nome: 'Torneio de Campeões',
        img: '/assets/img/torneio-de-campeoes.jpg',
        preco: 13,
        quantidade: 0,
        descricao: 'Em "Torneio de Campeões: A Batalha Definitiva", mergulhamos em um épico confronto entre os maiores heróis e vilões do universo. Nessa eletrizante história em quadrinhos, testemunhamos a reunião dos personagens mais icônicos e poderosos, que se enfrentam em um torneio de proporções colossais. Os campeões, convocados de diferentes realidades e dimensões, são reunidos por uma entidade cósmica misteriosa. Cada lutador é desafiado a provar sua força, habilidade e determinação em combates um-a-um, com o destino do multiverso em jogo.'
    },
    {
        id: 8,
        nome: 'Wolwerine',
        img: '/assets/img/wolwerine.jpg',
        preco: 8,
        quantidade: 0,
        descricao: '"Wolverine" nos apresenta ao feroz e enigmático herói mutante conhecido como Wolverine. Nessa história em quadrinhos envolvente, adentramos o sombrio mundo de Logan, um homem com um passado misterioso e um presente repleto de violência. A narrativa se desenrola enquanto acompanhamos Wolverine em uma busca implacável por respostas sobre sua própria origem. Através de memórias fragmentadas e pistas enigmáticas, ele desvenda segredos sobre seu passado traumático e sua conexão com o sinistro Programa Arma X.'
    },
    {
        id: 9,
        nome: 'X-men',
        img: '/assets/img/xmen.jpg',
        preco: 10,
        quantidade: 0,
        descricao: '"X-Men" nos transporta para o mundo dos mutantes, onde os heróis se unem para proteger uma sociedade que os teme e os rejeita. Nessa história em quadrinhos repleta de ação e intriga, testemunhamos a luta dos X-Men, uma equipe de mutantes poderosos, para defender a coexistência pacífica entre humanos e mutantes. Liderados pelo sábio Professor Charles Xavier, os X-Men enfrentam desafios perigosos, desde a ameaça dos temíveis Sentinelas até a tirania de vilões como Magneto e a Irmandade dos Mutantes. Cada membro da equipe traz consigo habilidades extraordinárias e personalidades únicas, formando um grupo diversificado de heróis determinados a fazer a diferença.'
    },
    {
        id: 10,
        nome: 'Spider-Man',
        img: '/assets/img/spider-man.jpg',
        preco: 11,
        quantidade: 0,
        descricao: '"Spider-Man" mergulha nos aspectos emocionais da vida de Peter Parker, mostrando seus relacionamentos com seus entes queridos, como sua tia May e sua amada Mary Jane. Além disso, a história aborda temas universais como responsabilidade, redenção e a importância de usar nossos dons para fazer o bem. Com suas cenas de ação eletrizantes, diálogos cativantes e uma pitada de humor característica do Homem-Aranha, "Spider-Man: A Teia do Destino" é uma história em quadrinhos que nos leva a um mundo de aventuras, mostrando-nos que qualquer um pode ser um herói, desde que tenha coragem e determinação.'
    },
    {
        id: 11,
        nome: 'Thor Love and Thunder',
        img: '/assets/img/thor.jpg',
        preco: 12,
        quantidade: 0,
        descricao: 'Descrição: "Thor: Love and Thunder" é uma história em quadrinhos que mergulha nas aventuras do poderoso deus do trovão, Thor. Nessa empolgante narrativa, testemunhamos Thor enfrentando desafios épicos e descobrindo o verdadeiro significado de ser um herói. A trama se desenrola após os eventos de uma grande batalha que abalou o universo. Thor, agora no comando de Asgard, enfrenta uma nova ameaça que coloca em risco a paz que ele lutou para conquistar. Ao lado de seus aliados leais, como a poderosa Valquíria e o astuto Loki, Thor embarca em uma jornada emocionante para enfrentar inimigos formidáveis e proteger seu reino.'
    }
]

var containerProdutos = document.getElementById('productsList')

/* Carregar produtos da página */

productsPage = () => {
    items.map((val) => {
        containerProdutos.innerHTML += `
        
        <div class="produto">
            <a class="productImage" key='`+ val.id + `' href="/views/product.html"><img src='` + val.img + `'/></a>
            <a class="textoProduto" key='`+ val.id + `' href="/views/product.html">` + val.nome + `<p class="preco">R$` + val.preco + `,00</p></a>
        </div>
        `

    })
}

productsPage()

var links = document.getElementsByTagName('a')

/* Pegando evento de click */

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key')
        let produto = items[key]
        let produtoObj = {
            id: produto.id,
            nome: produto.nome,
            quantidade: produto.quantidade,
            preco: produto.preco,
            img: produto.img,
            descricao: produto.descricao
        }
        localStorage.setItem('produto', JSON.stringify(produtoObj))
    })
}
