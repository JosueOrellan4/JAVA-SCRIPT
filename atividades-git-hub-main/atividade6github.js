//6.Faça um programa que leia a nota de um aluno e informe se ele está aprovado (nota maior ou igual a 7), em recuperação (nota entre 5 e 7) ou reprovado (nota menor que 5).

var notaquevaiserlida = 5

if (notaquevaiserlida >= 7) {console.log (notaquevaiserlida, 'aprovado')}
else if (notaquevaiserlida >= 5 && notaquevaiserlida < 7 ) {console.log (notaquevaiserlida, 'recuperação')}
else if (notaquevaiserlida <= 4) {console.log (notaquevaiserlida, 'reprovado')}
