window.onload = function() {
    var acesso = prompt("Senha de acesso:");

    if(acesso == "github") {
        alert("Acesso permitido ✔")
    }
    else{
        alert("Acesso negado ❌");
        location.reload();
    }
};