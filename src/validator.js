const validator = {



  isValid: function (validarCard) {

    const cardNumbers = validarCard.split('').map(Number); //array guarda valores em uma sequência

    for (let i = 1; i < cardNumbers.length; i += 2) { // loop dois em dois
      cardNumbers[i] *= 2; // multiplicando i por dois

      if (cardNumbers[i] > 9) { // se for menor que 9
        cardNumbers[i] -= 9; // se for maior que 9 (dois digitos), subtrai por 9


      }
    }
    const sum = cardNumbers.reduce((acc, curr) => acc + curr, 0);
    console.log("Numero ", validarCard, " sum ", sum, " cardNumber ", cardNumbers)
    if (sum % 10 === 0) { //multiplica a soma por 10

      return true;

    } else {
      return false;
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

  segurancaCvv: function (numeroCvv) {

    if (/^[0-9]+$/.test(numeroCvv)) {
      return numeroCvv;
    } else {
      return null;
    }
  },

  dataCard: function (numeroData) {

    if (/^\d{2}\/\d{4}$/.test(numeroData)) {
      const [mes, ano] = numeroData.split('/');
      const mesInt = parseInt(mes, 10);
      const anoInt = parseInt(ano, 10);

      if (mesInt >= 1 && mesInt <= 12 && anoInt >= 1900) {
        return numeroData;
      } else {
        return "Formato Inválido"

      }
    }
  },

  nameClient: function (nomeCliente) {

    if (/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeCliente)) {
      return nomeCliente;
    }

    return "";
  }


};

export default validator