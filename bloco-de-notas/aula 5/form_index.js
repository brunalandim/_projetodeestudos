var listaCadastro = document.getElementById('cadInd'); 
// nome do indíviduo
var formnameCad = document.getElementById('name').value; 
// data de nascimento
var formdataNasc = document.getElementById('data_nasc').value; 
// cidade 
var formcidade = document.getElementById('cidade').value;
// curso escolhido
var formcursoCad = document.getElementById('curso').value; 
// estado 
var formestado = document.getElementById('estado').value; 
//cep 
var formcepCad = document.getElementById('cep').value; 

if(localStorage.getItem('Cadastro')== null){
    console.log('tem cadastro aí');
    console.log('cadastro vazio' + Cadastro); 
    var Cadastro = [];
} else{
    var Cadastro = JSON.parse (localStorage.getItem('Cadastro'));
}

listaCadastro[0].innerHTML += '<tr><th>Item</th><th>Name</th><th>data de nascimento</th><th>Cidade</th><th>Curso</th><th>Estado</th><th>CEP</th><tr>'; 

if(Cadastro.length !== 0){
    for (var a = 0; a < Cadastro.length; a++){
        var lista_seq = a+1; 
        var lista_name = Cadastro[a].name; 
        var lista_curso = Cadastro[a].curso; 
        var lista_datanas = Cadastro[a].data_nasc; 
        var lista_cep = Cadastro[a].cep; 
        var lista_estado = Cadastro[a].estado; 
        var lista_cidade = Cadastro[a].cidade;
        
        listaCadastro[0].innerHTML += '<tr><td>' + lista_seq + '</td><td>' + lista_name + '</td><td>' + lista_curso + '</td><td>' + lista_datanas + '</td><td>' + lista_cep + '</td><td>' + lista_estado + '</td><td>' + lista_cidade + '</td><tr>';
    }
}

var guardarCadastro = document.getElementById('guardarCadas'); 
var novoCadas = ""; 


guardarCadastro.onclick = function() {

    setSeq = Cadastro.length+1; 

    getName = document.getElementById('name').value; 
    getDatanas = document.getElementById('data_nasc').value;
    getCurso = document.getElementById('curso').value; 
    getCEP = document.getElementById('cep').value; 
    getEstado = document.getElementById('estado').value;
    getCidade = document.getElementById('cidade').value; 
    
    novoCadastro = {
        'Nome': getName, 
        'Data de nascimento' : getDatanas, 
        'Curso' : getCurso, 
        'CEP': getCEP, 
        'Estado': getEstado, 
        'Cidade' : getCidade 
    }

    Cadastro.push(novoCadastro); 
    console.log('que cadastro estou inserindo' + setSeq + novoCadastro.name + novoCadastro.cep + novoCadastro.estado + novoCadastro.cidade + novoCadastro.curso + novo.Cadastro.data_nasc); 

    console.log('Quantos cadastros tem' + Cadastro.length);
    
    listaCadastro[0].innerHTML += '<tr><td>' + setSeq + '</td><td>' + getName + '</td><td>' + getDatanas + '</td><td>' + getCurso + '</td><td>' + getCEP + '</td><td>' + getEstado + '</td><td>' + getCidade + '</td></tr>'; 

    var renovarInsertDados = document.getElementById('CadPessoa'); 

    renovarInsertDados.onreset = function(){
        cadastro_json = JSON.stringify(Cadastro);
        
        window.localStorage.setItem('Cadastro', cadastro_json); 
    }

    document.getElementById('CadPessoa').reset(); 

    return false; 

}


