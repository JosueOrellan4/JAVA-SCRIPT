//12.Faça um programa que verifique se um triângulo é equilátero, isósceles ou escaleno com base nos comprimentos de seus lados.

var triangulolado1 = 60
var triangulolado2 = 50
var triangulolado3 = 50

if (triangulolado1 === triangulolado2 && triangulolado1 === triangulolado3 && triangulolado2 === triangulolado3) 
    {console.log ('Triângulo Equilátero')}
else if (triangulolado1 === triangulolado2 || triangulolado1 === triangulolado3 || triangulolado2 === triangulolado3)
    {console.log ('Triângulo Isósceles')}
else {console.log ('Triângulo Escaleno')}