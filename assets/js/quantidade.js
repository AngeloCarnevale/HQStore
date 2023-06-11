var quant = document.getElementById('quantidade-carrinho')
var carrinho = JSON.parse(localStorage.getItem('carrinho')) 

quant.innerHTML += carrinho.length