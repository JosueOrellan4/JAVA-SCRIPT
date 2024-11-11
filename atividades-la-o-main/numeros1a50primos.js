numeroF=1
 
while(numeroF<=50){
    if(numeroF==2 || numeroF==3||numeroF==5||numeroF==7||numeroF%1==0 && numeroF%numeroF==0 && numeroF%2!=0 && numeroF%3!=0 && numeroF%5!=0 && numeroF%7!=0){
        console.log(numeroF)
    }
    numeroF=numeroF+1
}