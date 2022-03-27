var foto = document.getElementById('foto')
var idade = document.getElementById('idade')
var classe = document.getElementById('classe')
var nome = document.getElementById('nome')
var cor = document.getElementById('cor')

var img = ['<img src="assassino.png">', '<img src="bruxa.png">', '<img src="cavaleiro.png">', '<img src="espadachim.png">', '<img src="necromante.png">', '<img src="mago.png">', '<img src="vampiro.png">', '<img src="orc.png">']
var classes = ['Assassino', 'Bruxo', 'Cavaleiro', 'Espadachim', 'Necromante', 'Mago', 'Orc', 'Vampiro', 'Tank', 'Curandeiro']


var vogal =  ['a', 'e', 'i', 'o', 'u']
var consoante = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z']


function montar() {
    foto.innerHTML = img[Math.floor(Math.random() * img.length)]

    idade.innerHTML = Math.floor(Math.random() * (101 - 18)) + 18

    classe.innerHTML = classes[Math.floor(Math.random() * classes.length)]

    var nome1 = vogal[Math.floor(Math.random() * vogal.length)]
    var nome2 = vogal[Math.floor(Math.random() * vogal.length)]
    var nome3 = vogal[Math.floor(Math.random() * vogal.length)]

    var nome4 = consoante[Math.floor(Math.random() * consoante.length)]
    var nome5 = consoante[Math.floor(Math.random() * consoante.length)]

    nome.innerHTML = nome1.toUpperCase() + nome4 + nome3 + nome5 + nome2
 
    var cor1 = Math.floor(Math.random() * 10)
    var cor2 = Math.floor(Math.random() * 10)
    var cor3 = Math.floor(Math.random() * 10)
    var cor4 = Math.floor(Math.random() * 10)


    document.body.style.backgroundColor = "#" + cor1 + cor2 + cor3 + cor4
}