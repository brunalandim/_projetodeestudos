
// criando uma função para calcular média
(function(){
    
    function calcularMedia(){
        // var media = 0;
        var total = 0;
        var qtd = arguments.length;
        var x = 0;
        
        while(typeof arguments[x] == 'number'){
            total += arguments[x];
            x++;    
        
        }
        
        return total / qtd;
}
    var media1 = calcularMedia(5,3,1);
    var media2 = calcularMedia(6,6,6); 
    console.log("media1: ", media1);
    console.log("media2: ", media2);

})()
// criando uma função de soma 
 function soma_args(n1,n2){
     var soma = n1 + n2;
     return soma;
 }

 soma_args(10,10);
 soma_args(52,80); 

 console.log("soma é: " + soma_args(10,10)); 
 console.log("soma é: ", soma_args(58,10)); 