// variáveis do formulário
var listaFicha = document.getElementsByClassName("tabHeroes"); 

var formNome = document.getElementById("nome").value; 

var formData = document.getElementById("dataNas").value;

var formIdade = document.getElementById("idade").value; 

var formPoder = document.getElementById("poder").value; 
var ficha_tecnica = JSON.parse(localStorage.getItem("ficha_Tecnica")); 

if (localStorage.getItem("ficha_Tecnica") !== null){
 
    var ficha_tecnica = JSON.parse(localStorage.getItem("ficha_Tecnica")); 
}else{
    console.log ('tem cadastro aqui');    
    console.log('tem cadastro vazio aqui' + ficha_tecnica); 
    var ficha_tecnica = []; 
    
}

listaFicha[0].innerHTML += '<tr><th>Item</th><th>Nome</th><th>Data de Nascimento</th><th>Idade</th><th>Poder</th><tr>'; 

if(ficha_tecnica !== 0){
    for (var a = 0; a < ficha_tecnica.length; a++){
        var lista_seq = a+1; 

        var lista_nome = ficha_tecnica[a].Nome; 
        var lista_dataNas = ficha_tecnica[a].Data_de_Nascimento;
        var lista_idade = ficha_tecnica[a].Idade; 
        var lista_poder = ficha_tecnica[a].Poder; 
   
    listaFicha[0].innerHTML += '<tr><td>' + lista_seq + '</td><td>' + lista_nome + '</td><td>' + lista_dataNas + '</td><td>' + lista_idade + '</td><td>' + lista_poder + '</td><tr>';
   
    }
}

var salvarCadastro = document.getElementById("salvarFicha"); 
var novaFicha = ""; 

salvarCadastro.onclick = function(){

    setSeq = ficha_tecnica.length+1;
    
    getNome = document.getElementById("nome").value; 
    getData = document.getElementById("dataNas").value; 
    getIdade = document.getElementById("idade").value; 
    getPoder = document.getElementById("poder").value; 
        
    // console.log(getNome);

    novaFicha = {
        'Nome': getNome, 
        'Data de Nascimento': getData,
        'Idade': getIdade,
        'Poder': getPoder
    }

    console.log('valor do set =' + setSeq); 

    ficha_tecnica.push(novaFicha); 

    listaFicha[0].innerHTML += '<tr><td>' + setSeq + '</td><td>' + getNome + '</td><td>' + getData + '</td><td>' + getIdade + '</td><td>' + getPoder + '</td></tr>'; 

    var renovaInserDados = document.getElementById("fichaTecnica"); 

    renovaInserDados.onreset = function()
    {
        ficha_tecnica_json = JSON.stringify(ficha_tecnica); 

    window.localStorage.setItem('ficha_Tecnica', ficha_tecnica_json);

    }

    document.getElementById('fichaTecnica').reset(); 
    return false; 

}

// A PARTIR DAQUI, DEU RUIM! 
// QUANDO COLOQUEI A ROTINA DE LIMPAR FICHA, A FUNÇÃO SALVAR FICHA NÃO ESTAVA FUNCIONANDO

tiraFicha = document.getElementById('limparFicha'); 

tiraFicha.onclick = function(){

    delFicha = document.getElementById('delFicha').value; 

    delIndice = delFicha-1; 
    console.log(delFicha + 'índice a ser delatado: ' + delIndice); 
    // ficha_Tecnica.splice(delIndice,1); 
    alert(delFicha +' índice a ser delatado: ' + delIndice + ficha_tecnica.slice(delIndice,1));

    if (delFicha != -1){
        listaFicha[0].innerHTML += '<th>Item</th><th>Nome</th><th>Data de Nascimento</th><th>Idade</th><th>Poder</th>'; 

        ficha_tecnica.splice(delIndice, 1); 

        ficha_tecnica[0].innerHTML = ""; 

        listaFicha[0].innerHTML += '<th>Item</th><th>Nome</th><th>Data de Nascimento</th><th>Idade</th><th>Poder</th>'; 

        for(var a = 0; a < ficha_tecnica.length; a++){
            var lista_seq = a+1; 

            var lista_nome = ficha_tecnica[a].Nome; 
            var lista_dataNas = ficha_tecnica[a].Data_de_Nascimento;
            var lista_idade = ficha_tecnica[a].Idade; 
            var lista_poder = ficha_tecnica[a].Poder; 

            listaFicha[0].innerHTML += '<tr><td>' + lista_seq + '</td><td>' + lista_nome + '</td><td>' + lista_dataNas + '</td><td>' + lista_idade + '</td><td>' + lista_poder + '</td><tr>'
        }

        renovaInsertDados = document.getElementById('deleteFicha')

        renovaInsertDados.onreset = function(){
            ficha_tecnica_json = JSON.stringify(ficha_tecnica); 
            window.localStorage.setItem('ficha_Tecnica', ficha_tecnica); 
        }

        document.getElementById('deleteFicha').reset();

        return false; 
    }
}
