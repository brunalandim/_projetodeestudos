var info01 = document.getElementById('info01').innerHTML = 'Texto de informação'; 
console.log(info01); 

var heading01 = document.getElementById('info02').innerHTML = '<h2>' + info01 + '</h2>'; 
var heading02 = document.getElementById('info02').innerHTML = '<h1>' + info01 + '</h1>';
var concatHeadings = heading01 + heading02; 
document.getElementById('info02').innerHTML = concatHeadings; 
console.log(heading02)
console.log(heading01)

var n1 = 30;  
var n2 = 60; 

console.log('**A soma entre ' + n1 + ' e ' + n2 + ' é igual '+ (n1+n2)); 
//função estática 
function soma_numeros(){
        x = 5; 
        y = 2; 
        var soma1 = x + y; 
    console.log('** a soma entre x + y resulta em: ' + soma1); 
}

// console.log('*A soma entre x(1) e y(2) resulta em: ' + (x + y)); 
soma_numeros(); 

// função dinâmica 
function soma_args(num1, num2){
    var soma2 = num1 + num2; //define a operação
    return soma2; 
}

soma_args(1375,9);
soma_args(-2,47); 

            //observe no console 
            console.log("          "); 
            console.log("As variáveis 'n1' e 'n2' são: " + n1 + ' e ' + n2 + ' (respectivamente).'); 
            console.log("A soma entre as duas variáveis resulta: " + soma_args(n1,n2)); 
            console.log("            "); 
            console.log("As variáveis 'x' e 'y' são: " +  x + ' e ' + y + ' (respectivamente).'); 
            console.log("A soma entre as duas variáveis resulta: " + soma_args(x,y)); 
            console.log("               ")  


function valor_imc(peso,altura){
    var imc = peso / (altura * altura); 
    return imc; 
}

var meu_peso = document.getElementById('peso').innerHTML;
var minha_altura = document.getElementById('altura').innerHTML; 
var diagMed = ""; 

var meu_imc = valor_imc(meu_peso, minha_altura); 

document.getElementById('imc').innerHTML = meu_imc.toFixed(2); // método toFixed() para ajustar a quantidade de casa após a vírgula

var imcFix = meu_imc.toFixed(2); 
// document.getElementById('result-imc').innerHTML = imcFix.slice(0,2) + "," + imcFix.slice(-2); 
document.getElementById('result-imc').innerHTML =  imcFix.replace('.', ','); 

// Preenchimento de campo - formulário 

document.getElementById('result-imc2').onclick = function(){
    var meu_peso2 = document.getElementById('peso2in').value; 
    var minha_altura2 = document.getElementById('altura2in').value; 

    var mp = meu_peso2; 
    var ma = minha_altura2; 

    console.log('Teste de resgate dos campos: ' + mp + ' - ' + ma); 

    meu_imc2 = valor_imc(meu_peso2, minha_altura2);
    console.log(meu_imc2); 
    document.getElementById('imc2out').innerHTML = meu_imc2.toFixed(2).slice(0,2) + ',' + meu_imc2.toFixed(2).slice(-2); 

 

    if (meu_imc2 >= 18.5 && meu_imc2 <= 24.9){
        // console.log('Está no peso normal'); 
        // alert('está no peso normal');
        document.getElementById('diagMed').innerHTML = 'está no peso normal';
    } else if (meu_imc2 >= 25 && meu_imc2 <= 29.9){
        // console.log('sobrepeso');
        // alert('sobrepeso'); 
        document.getElementById('diagMed').innerHTML = 'sobrepeso'; 
    } else if (meu_imc2 >= 30 && meu_imc2 <= 34.9){
        // console.log('Obesidade grau 1'); 
        // alert('obesidade grau 1');
        document.getElementById('diagMed').innerHTML ='obesidade grau 1'; 
    } else if (meu_imc2 >= 35 && meu_imc2 <= 39.9){
        // console.log('obesidade grau 2 '); 
        // alert('obesidade grau 2'); 
        document.getElementById('diagMed').innerHTML ='obesidade grau 2';
    } else if (meu_imc2 < 18.5){
    // console.log('está abaixo do peso normal'); 
    // alert('está abaixo do peso normal!');
    document.getElementById('diagMed').innerHTML ='está abaixo do peso normal'; 
    } else {
    // console.log('Obesidade grau 3')
    // alert('obesidade grau 3'); 
    document.getElementById('diagMed').innerHTML ='obesidade grau 3'; 

}



    
 

    return false; // ele zera o formulário 

}