function isPalindrome(str) {
  let texto = str.toLowerCase();
  let textoInverso = "";
  for (let i = texto.length; i > 0; i--) {
    textoInverso += texto[i - 1];
  }
  if (texto.replaceAll(" ", "") === textoInverso.replaceAll(" ", "")) {
    return true;
  }
  return false;
}

function arrayMaxMin(arr) {
  /* Seu código aqui */
}
