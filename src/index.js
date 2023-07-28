import validator from './validator.js';


console.log(validator);
// estudar material variáveis console. https://curriculum.laboratoria.la/pt/topics/javascript/basics/variables
// mensagem de return

document.getElementById("enviar").addEventListener("click",validarCard)
document.getElementById("enviar").addEventListener("click",validarNome)
document.getElementById("enviar").addEventListener("click",validarData)
document.getElementById("enviar").addEventListener("click",validarCvv)
document.getElementById('numero').addEventListener("input",maskify)

function validarCard(event) {
    event.preventDefault()
    const validarCard = document.getElementById("numero").value;
    console.log(validarCard)
    const validado = validator.isValid(validarCard)
    if (validado){
        alert("Seu cartão é válido")
    }else{
        alert('Seu cartão é inválido')

    }
}
function validarNome(event) {
    event.preventDefault()
    const validarNome = document.getElementById("nome").value;
    console.log(validarNome)
    
}
function validarData(event) {
    event.preventDefault()
    const validarData = document.getElementById("validade").value;
    console.log(validarData)
   
}
function validarCvv(event) {
    event.preventDefault()
    const validarCvv = document.getElementById("cvv").value;
    console.log(validarCvv)
   
}

function maskify(event) {
    const cartaoMascarado = document.getElementById("mascarado");
    const numeroCard = document.getElementById("numero").value;
    const numeroMascarado = validator.maskify(numeroCard)
    cartaoMascarado.innerHTML= numeroMascarado
    console.log('teste');
    
}
