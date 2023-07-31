import validator from './validator.js';
//console.log(validator);

document.getElementById("enviar").addEventListener("click", validarCard)
document.getElementById("enviar").addEventListener("click", validarNome)
document.getElementById("enviar").addEventListener("click", validarData)
document.getElementById("enviar").addEventListener("click", validarCvv)
document.getElementById('numero').addEventListener("input", maskify)
document.getElementById('cvv').addEventListener("input", validarCvv)
document.getElementById('nome').addEventListener("input", validarNome)
document.getElementById('validade').addEventListener("input", validarData)

function validarCard(event) {
  event.preventDefault();
  const numberCard = document.getElementById("numero").value;
  const validado = validator.isValid(numberCard);
  console.log(numberCard);
  if (validado) {
    alert("Seu cartão é válido");
  } else {
    alert('Seu cartão é inválido');
  }
}

function validarNome(event) {
  event.preventDefault();
  const nomeCliente = document.getElementById("nomeCartao");
  const textoNome = document.getElementById("nome").value;
  const mostrarNome = validator.nameClient(textoNome);
  nomeCliente.textContent = mostrarNome;
  console.log('validarNome');

}
function validarData(event) {
  event.preventDefault();
  const cartaoCvv = document.getElementById("dataValidade");
  const numeroData = document.getElementById("validade").value;
  const mostrarData = validator.dataCard(numeroData);
  cartaoCvv.innerHTML = mostrarData;
  console.log('validarData');

}
function validarCvv(event) {
  event.preventDefault();
  const cartaoCvv = document.getElementById("numeroCvv");
  const numeroCvv = document.getElementById("cvv").value;
  const mostrarCvv = validator.segurancaCvv(numeroCvv);
  cartaoCvv.innerHTML = mostrarCvv;
  console.log('validarCvv');

}

function maskify( ) {
  const cartaoMascarado = document.getElementById("mascarado");
  const numeroCard = document.getElementById("numero").value;
  const numeroMascarado = validator.maskify(numeroCard);
  cartaoMascarado.innerHTML = numeroMascarado;
  console.log('mascara');

}

