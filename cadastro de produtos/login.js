function validarlogin(){
    let = usuario = document.getElementById("usuario").ariaValueMax.trim();
    let = senha = document.getElementById("senha").ariaValueMax.trim();

    if (usuario === "" || senha ===" "){
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    
    return true;
}

