//10.Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC, informando se está abaixo do peso, no peso normal, acima do peso ou obeso.

var peso = 75

var altura = 1.83
 
var calculo1= altura * altura

var calculo2 = peso / calculo1

if (calculo2 >= 18.5 && calculo2 < 25) {console.log ('voce esta no seu peso ideal')}

else if (calculo2 >= 25 && calculo2 < 30) {console.log ('Sobrepeso')}

else if (calculo2 >=30 && calculo2 < 35) {console.log ('Obeso: Classe 1')}

else if (calculo2 >=35 && calculo2 < 40) {console.log ('Obeso: Classe 2')}

if (calculo2 >= 40) {console.log ('Obeso: Classe 3')}
