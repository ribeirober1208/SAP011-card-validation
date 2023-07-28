const validator = {

  // estudar array, funcion https://curriculum.laboratoria.la/pt/topics/javascript/arrays/arrays

  isValid: function (validarCard) {

    if (validarCard.length !== 16) {
      return false;
    }
    // array de números de manipulação
    const cardNumbers = validarCard.split('').map(Number);
    // loop
    for (let i = 0; i < cardNumbers.length; i += 2) {
      cardNumbers[i] *= 2;
      // se o número for maior que 9
      if (cardNumbers[i] > 9) {
        cardNumbers[i] -= 9;


      }
      //somar os números
      const sum = cardNumbers.reduce((acc, curr) => acc + curr, 0);
      //se o resultador for multiplo de 10
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

  }

};

export default validator