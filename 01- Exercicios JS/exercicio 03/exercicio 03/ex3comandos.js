function calcularoMaior(){
    var valorum = document.getElementById("valorum").value;
    var valordois = document.getElementById("valordois").value;
   
   if(valorum > valordois){
    document.getElementById("resultado").value="O maior número é "+valorum+"!"
    document.getElementById("resultado").style.visibility = 'visible';
   }
   else if (valorum == valordois) {
    document.getElementById("resultado").value="Os números são iguais!"
    document.getElementById("resultado").style.visibility = 'visible';
   }else{
    document.getElementById("resultado").value="O maior número é "+valordois+"!"
    document.getElementById("resultado").style.visibility = 'visible';
   }
    
             
}
function limparDados(){
    document.getElementById("valorum").value = '';
    document.getElementById("valordois").value = '';
    document.getElementById("resultado").style.visibility='hidden';
    document.getElementById("valorum").focus();
}