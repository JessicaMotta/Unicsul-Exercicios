function Calculardados(){
let txt1 = document.getElementById("valorTotal").value;
let txt2 = document.getElementById("Parcela").value;
let valT = parseFloat(txt1)
let parc = parseInt(txt2)
let result;
if(parc == 1){
    result = (valT + (valT * 0/100))
    alert("O valor da parcela será 1x R$" + result)
}
else if(parc == 2){
    result = (valT+(valT* 3/100))
    alert("O valor da parcela será 2x R$"+(result /2))
}
else if(parc == 4){
    result = (valT+(valT* 7/100))
    alert("O valor da parcela será 4x R$"+(result/2))
}

}
function limparDados(){
    document.getElementById("valorTotal").value = '';
    document.getElementById("Parcela").value = '';
}