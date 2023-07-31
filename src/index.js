import validator from './validator.js';


console.log(validator);
// estudar material variáveis https://curriculum.laboratoria.la/pt/topics/javascript/basics/variable

document.getElementById("enviar").addEventListener("click", validarCard)
document.getElementById("enviar").addEventListener("click", validarNome)
document.getElementById("enviar").addEventListener("click", validarData)
document.getElementById("enviar").addEventListener("click", validarCvv)
document.getElementById('numero').addEventListener("input", maskify)
document.getElementById('cvv').addEventListener("input", validarCvv)
document.getElementById('nome').addEventListener("input", validarNome)
document.getElementById('validade').addEventListener("input", validarData)

function validarCard(event) {
    event.preventDefault()
    const validarCard = document.getElementById("numero").value;
    console.log(validarCard)
    const validado = validator.isValid(validarCard)
    if (validado) {
        alert("Seu cartão é válido")
    } else {
        alert('Seu cartão é inválido')

    }
}

function validarNome(event) {
    event.preventDefault()
    const nomeCliente = document.getElementById("nomeCartao");
    const textoNome = document.getElementById("nome").value;
    const mostrarNome = validator.validarNome(textoNome);
    nomeCliente.textContent = mostrarNome
    console.log('validarNome')

}
function validarData(event) {
    event.preventDefault()
    const cartaoCvv = document.getElementById("dataValidade");
    const numeroData = document.getElementById("validade").value;
    const mostrarData = validator.validarData(numeroData)
    cartaoCvv.innerHTML = mostrarData
    console.log('validarData')

}
function validarCvv(event) {
    event.preventDefault()
    const cartaoCvv = document.getElementById("numeroCvv");
    const numeroCvv = document.getElementById("cvv").value;
    const mostrarCvv = validator.validarCvv(numeroCvv)
    cartaoCvv.innerHTML = mostrarCvv
    console.log('validarCvv')

}

function maskify(event) {
    const cartaoMascarado = document.getElementById("mascarado");
    const numeroCard = document.getElementById("numero").value;
    const numeroMascarado = validator.maskify(numeroCard)
    cartaoMascarado.innerHTML = numeroMascarado
    console.log('mascara');

}

