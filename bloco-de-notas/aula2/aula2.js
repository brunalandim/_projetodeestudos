console.log("             ");
console.log('### strings e método SLICE ###');


var nomeCompleto = 'João da Silva Brasileiro';
var telefone = "11998887655";

console.log('Nome: ' + nomeCompleto); 
console.log('DDD: ' + telefone.slice(0,2)); 
console.log('Tel.: ' + telefone.slice(2,3) + ' - ' + telefone.slice(3,7) + ' - ' + telefone.slice(7-0)); 

// Dados de Sophia escritos em body
// IMPORTANTE! 
    // O uso de 'document.write()' é considerado uma violação de normas, portanto utilize somente para testes e avaliações próprias; 


var nome = 'Sofia Villani Scicolone'; 
var selecao1 = nome.slice(0, 10-5); // do zero até cinco
var selecao2 = nome.slice(10-5); // 10-5-5, no entanto, a partir de 5 (sinal negativo)
var selecao3 = nome.slice(10+5); // 10+5=15, ou seja, a partir de 15 
var selecao4 = nome.slice(15); // a partir de 15 
var selecao5 = nome.slice(0, -3); // cortando 3 posições a partir do final 

    // testar com (0,1), (-0), (0), (0,10-5), (4-2,10-5)...
    var arteNome = "Sophia Loren"; 
    document.write('Nome: ' + nome + '<br>'); 
    document.write('Nome com .slice(0,10-5): ' + selecao1 + '<br>');
    document.write('Nome com slice(10-5): ' + selecao2 + '<br>'); 
    document.write('Nome com .slice(10+5): ' + selecao3 + '<br>'); 
    document.write('Nome com .slice(15): ' + selecao4 + '<br>'); 
    document.write('Nome com .slice(0, -3): ' + selecao5 + '<br>' ); 
    document.write('Nome acima, aplicado .slice(3): ' + selecao5.slice(3)); 

                        //### INCREMENTOS ###

    console.log("         "); 
    console.log("### INCREMENTOS ###"); 

    var incremento = 1; 
    incremento = incremento + 5; 
    incremento += 5;

    console.log ('o valor atual do incremento: ' + incremento); 
    incremento = 10; 
    incremento++; 
    incremento++; 

    console.log('o valor redifinido é:  '  + incremento); 

    incremento--; 
    incremento--; 

    console.log('o valor redifinido é  ' + incremento); 

    incremento*=5; 
    console.log('o valor redifinido é  ' + incremento); 
    
    incremento/=5; 
    console.log('o valor redifinido é  '  +  incremento); 
    
    incremento-=5;
    console.log('o valor redifinido é  ' + incremento); 

    incremento*=incremento;
    console.log('### Cáculos ###'); 

    var num1 = 20; 
    var num2 = 3; 

    num1 = parseInt(num1);
    num2 = parseInt(num2); 

    var soma = num1 + num2; 
    var subtracao = num1 - num2; 
    var divisao = num1/num2; 
    var multiplicacao = num1 * num2;  
    var media = (num1 + num2) / 2; 

    console.log('A soma é: ' + soma); 
    console.log('A subtração é: ' + subtracao); 
    console.log('A divisão é: ' + divisao); 
    console.log('A multiplicação é: ' + multiplicacao); 
    console.log('A média é: ' + media); 
    console.log('20 elevado à 4º potência: ' + Math.pow(num1,4)); 
    console.log('3 elevado ao quadrado: ' + Math.pow(num2, 2)); 

    
                     // ### Booleanos ##
    console.log("           "); 
    console.log('### DADOS BOOLEANOS  (TRUE/FALSE) ###'); 
    
    console.log('Uma variável "teste" declarada como "true"'); 
    var teste = true; 
    var teste = 65 < 60; 
    console.log('E quando faço "teste" = 65 < 60, retorna: ' + teste); 
    console.log("       ");

        var idade = 65; 
        var testeidademenor = idade < 65;
        var testeidadeigual = idade == 65;
        var testeidadediferente = idade != 65; 
        console.log('a idade informada é: ' + idade); 
        console.log('a idade é menor que 65? Resposta: ' + testeidademenor); 
        console.log('a idade é igual a 65?Resposta: ' + testeidadeigual); 
        console.log('a idade é diferente de 65? Resposta: ' + testeidadediferente); 

        console.log("            "); 
        console.log('Posso criar testes de condição.'); 
        console.log('Testar se a idade é igual à idade informada (true), exibe... '); 
        idadeUser = 59; 
        idadeAposentar = 65;
        var liberacao = idadeUser == idadeAposentar; 
        if (liberacao == true){
            console.log('Você já tem idade para se aposentar!'); 
        } else{
            console.log('Você ainda não tem idade de se aposentar!'); 
        }

        console.log("               "); 
        console.log('Testando o tipo de variável com "tipeof" '); 

        var v_string = "teste";
        var n_numero = 4.55; 
        var idade = 21; 
        var v_boolean = idade > 18; 

        console.log('variável com valor entre aspas é do tipo: ' + typeof v_string);
        console.log('variável com número (sem aspas) é do tipo: ' + typeof n_numero); 
        console.log('variável comparativa é tipo: ' + typeof v_boolean); 

        var novaIdade ;
        console.log('variável idade ficou: ' + typeof novaIdade); 

        var info02 = document.getElementById('info02'); 
        console.log(info02);
        info02.innerHTML = "Olá mundo!"; 





