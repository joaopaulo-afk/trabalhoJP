prepararMensagem = () => {
    localStorage.sTelefone = document.getElementById("campoTelefone").value;
    localStorage.sMensagem = document.getElementById("campoMensagem").value;
    
    document.getElementById('pMensagem').href = "https://api.whatsapp.com/send?phone=" + localStorage.sTelefone + "&text=" + localStorage.sMensagem;
    
    document.getElementById('pMensagem').target = "_blank";
}

var counter = 1;
setInterval(function() {
document.getElementById('r' + counter).checked = true;
counter++;
if(counter > 5){
    counter = 1;
}
}, 3000);

