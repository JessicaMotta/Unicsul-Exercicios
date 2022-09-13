function calcularPar(){
var numum = document.getElementById("numum").value;
  if(numum % 2 === 0){
    document.getElementById("resultado").value="O número "+numum+" é par!"
    document.getElementById("resultado").style.visibility = 'visible';
  }
  else{
    document.getElementById("resultado").value="O número é ímpar!"
    document.getElementById("resultado").style.visibility = 'visible'; 
  }
}   
function limparDados(){
    document.getElementById("numum").value = '';
    document.getElementById("resultado").style.visibility='hidden';
    
}