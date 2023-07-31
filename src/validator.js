const validator = {

  

  isValid: function (validarCard) {

    if (validarCard.length !== 16) {
      return false;
    }
    
    const cardNumbers = validarCard.split('').map(Number);
   
    for (let i = 0; i < cardNumbers.length; i += 2) {
      cardNumbers[i] *= 2;
    
      if (cardNumbers[i] > 9) {
        cardNumbers[i] -= 9;


      }
      
      const sum = cardNumbers.reduce((acc, curr) => acc + curr, 0);

      if (sum % 10 === 0) {

        return true;

      } else {
        return false;
      }


    }

  },

  maskify: function (numero) {

    if (numero.length > 4) {

      const last4Digits = numero.slice(-4);
      const mask = "*".repeat(numero.length - 4);
      return mask + last4Digits;

    } else {
      return numero;
    }

  },

  validarCvv: function (numeroCvv) {

    if (/^[0-9]+$/.test(numeroCvv)) {
      return numeroCvv;
    } else {
      return null;
    }
  },

  validarData: function (numeroData) {
    
    if (/^\d{2}\/\d{4}$/.test(numeroData)) {
      const [mes, ano] = numeroData.split('/');
      const mesInt = parseInt(mes, 10);
      const anoInt = parseInt(ano, 10);

      if (mesInt >= 1 && mesInt <= 12 && anoInt >= 1900) {
        return numeroData;
      } else {  
        resultado.mensagem = "Formato Inválido"
      }
    }
  },

  validarNome: function (nomeCliente) {
  
    if (/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeCliente)) {
      return nomeCliente;
    }
  
    return ""; 
  }
  
  
};

export default validator