// modelo Vanilla
var testeScript = document.getElementsByTagName('script'); 
console.log(testeScript); 

if(testeScript[0].hasAttribute('name') != false){
    $("body").css("background-image", "url('img/m-logo.png')"); 
    $("body").css("background-size", "8%"); 
    $("body").css("background-repeat", "not-repeat"); 
    $("html").css("background", "linear-gradient(to left top, rgba(11,54, 8, 0.9) 10%, rgba(255,255,255,0.35) 80%)"); 
    
    $("head").append('<link rel="author" href="https:/www.linkedin.com/in/marcodigital/">')
}
else{
    var nodeLink = document.createElement("link"); 
    document.getElementsByName("head")[0].appendChild(nodeLink); 
    document.getElementsByTagName('link')[1].setAttribute('rel', 'author');
    document.getElementsByTagName('link')[1].setAttribute('href', 'https:/www.linkedin.com/in/marcodigital/'); 
    document.getElementsByTagName('body')[0].setAttribute('style', 'background-image: url(img/m-logo.png); background-size: 8%; background-repeat: no-repeat');

    document.getElementsByTagName('html')[0].setAttribute('style', 'background:linear-gradient(to left top, rgba(11,54,8,0.9) 10%, rgba(255,255,255, 0.35) 80%)'); 
}

var abreModal = document.getElementById('abreModal'); 
if(abreModal.innerHTML.length != null) 
abreModal.onclick = function(){
        document.getElementById('modal').style.display ='inline-table'; 
        document.getElementById('próximo').style.display = 'block'; 
}

var fechaModal = document.getElementById('fechaModal');
var itemModal = document.getElementById('modal'); 
    fechaModal.onclick = function(){
        itemModal.style.display = 'none'; 
    }

    window.localStorage.setItem('Créditos', 'Por Marco de Freitas'); 
    var tagmain = document.getElementsByClassName('importante'); 
    var getCreditos = localStorage.getItem('Creditos'); 

    var teste = window.document.getRootNode(); 
    console.log(teste); 
