//13.Crie um programa que simule um jogo de adivinhação, onde o usuário tem que adivinhar um número entre 1 e 100 gerado aleatoriamente pelo programa, com dicas de "maior" ou "menor" após cada palpite.

var numeropalpite = 16
var numerocerto = 15
if (numeropalpite == numerocerto) {
    console.log('Boa você conseguiu acertar.')
}else if (numeropalpite > numerocerto) {
    console.log('Tente de novo, só que um numero menor.')
} else if (numeropalpite < numerocerto) {
    console.log('Tente de novo só que um numero maior.')
}