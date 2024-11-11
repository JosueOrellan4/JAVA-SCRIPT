o=10
i=1
numero1=0
numero2=1
Fibonacci=0
 
while(i!=o){
    Fibonacci=numero1+numero2
    numero1=numero2
    numero2=Fibonacci
    o=o-1
    console.log(Fibonacci)
}