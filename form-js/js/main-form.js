listaFicha = document.getElementById("tabHeroes")
var formNome = document.getElementById("nome").value; 
var formDate = document.getElementById("dataNas").value; 
var formIdade = document.getElementById("idade").value; 
var formPower = document.getElementById("poder").value; 


if(localStorage.getItem('listaFicha') === null){
    console.log(listaFicha);
    var listaFicha = [];

} else{
    var listaFicha = JSON.parse(localStorage.getItem('listaFicha'));
}

if(listaFicha != 0){
    for(var i = 0; i < listaFicha.lenght; i++){
        var lista_seq = i+1;
        var lista_nome = listaFicha[i].formNome; 
        var lista_date = listaFicha[i].formDate; 
        var lista_idade = listaFicha[i].formIdade; 
        var lista_power = listaFicha[i].formPower;  

        listaFicha [0] += '<tr><td>'+ lista_seq + '</td><td>' + lista_nome + '</td><td>' + lista_date + '</td><td>' + lista_idade + '</td><td>' + lista_power + '</td> <tr>'

    }



}

function salvarFicha(novaFicha){

setSeq = listaFicha.length + 1; 

getNome = document.getElementById("nome").value; 
getData = document.getElementById("dataNas").value; 
getIdade = document.getElementById("idade").value; 
getPoder = document.getElementById("poder").value; 

novaFicha = {
    "Nome": getNome, 
    "Data": getData, 
    "Idade": getIdade,
    "Poder": getPoder
}

novaFicha.push(listaFicha);

var renovarInsertdados = document.getElementById("fichaTecnica"); 
listaFicha [0].innerHTML += '<tr><td>' + getformNome + '</td><td>' + getformDate + '</td><td>' + getformIdade + '</td><td>' + getformPower + '</td> <tr>'

renovarInsertdados.onreset = function(){
    listaFicha_json = JSON.stringify(listaFicha); 
    window.localStorage.setItem("listaFicha", listaFicha_json); 

}

document.getElementById("fichaTecnica")


return false; 

}

// listaFicha[0].innerHTML += '<tr><th>Nome</th><th>Data</th><th>Idade</th><th>Poder</th>'; 


