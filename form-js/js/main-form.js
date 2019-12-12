// variáveis do formulário
var listaFicha = document.getElementsByClassName("tabHeroes"); 

var formNome = document.getElementById("nome").value; 

var formData = document.getElementById("dataNas").value;

var formIdade = document.getElementById("idade").value; 

var formPoder = document.getElementById("poder").value; 

if (localStorage.getItem("ficha_tecnica") === null){
    console.log ('tem cadastro aqui'); 
    console.log('tem cadastro vazio aqui' + ficha_Tecnica); 
    var ficha_Tecnica = []; 
}else{
    var ficha_Tecnica = JSON.parse(localStorage.getItem("ficha_tecnica")); 
}

listaFicha[0].innerHTML += '<tr><th>Item</th><th>Nome</th><th>Data de Nascimento</th><th>Idade</th><th>Poder</th><tr>'; 

if(ficha_Tecnica !== 0){
    for (var a = 0; a < ficha_Tecnica.length; a++){
        var lista_seq = a+1; 

        var lista_nome = ficha_Tecnica[a].Nome; 
        var lista_dataNas = ficha_Tecnica[a].Data_de_Nascimento;
        var lista_idade = ficha_Tecnica[a].Idade; 
        var lista_poder = ficha_Tecnica[a].Poder; 
   
    listaFicha[0].innerHTML += '<tr><td>' + lista_seq + '</td><td>' + lista_nome + '</td><td>' + lista_dataNas + '</td><td>' + lista_idade + '</td><td>' + lista_poder + '</td><tr>'
   
    }
}

var salvarCadastro = document.getElementById("salvarFicha"); 
var novaFicha = ""; 

salvarCadastro.onclick = function(){

    setSeq = ficha_Tecnica.length+1;
    
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

    ficha_Tecnica.push(novaFicha); 

    listaFicha[0].innerHTML += '<tr><td>' + setSeq + '</td><td>' + getNome + '</td><td>' + getData + '</td><td>' + getIdade + '</td><td>' + getPoder + '</td></tr>'; 

    var renovaInserDados = document.getElementById("fichaTecnica"); 

    renovaInserDados.onreset = function()
    {
        ficha_tecnica_json = JSON.stringify(ficha_Tecnica); 

    window.localStorage.setItem('ficha_tecnica', ficha_tecnica_json)

    }

    document.getElementById('fichaTecnica').reset(); 
    return false; 

}
