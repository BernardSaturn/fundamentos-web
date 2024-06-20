let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validarNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome inválido! (Mínimo de 3 caracteres)"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = "red"
        
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
    
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >100) {
        txtAssunto.innerHTML = "Assunto muito longo! Máximo de 100"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha os campos corretamente!")
    
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
    
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "300px"
    
}














