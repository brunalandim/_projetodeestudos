n2 = prompt('digite um número: '); 
n2 = parseFloat(n2);


var output = escreve(); 


function escreve(){
    var output = document.querySelector('#output'); 
    output.innerHTML = n2; 
}

function soma(){
    var n = prompt('digite um número: '); 
    n = parseFloat(n); 

    n2 = n2 + n; 
    escreve(); 
}

console.log(escreve()); 

function multiplicar(){
    var nm = prompt('digite um número: '); 

    n2 = n2 * nm; 
    escreve(); 
}

function subtrair(){
    var ns = prompt('digite um número: '); 
    
    n2 = n2 - ns; 
    escreve(); 

}

function divisao(){
    var nd = prompt('digite um número: '); 

    n2 = n2 / nd; 
    escreve(); 
}
