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
  let valorMax = 0;
  let valorMin = 0;
  let novaArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > valorMax) {
      valorMax = arr[i];
      valorMin = valorMax;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < valorMin) {
      valorMin = arr[i];
    }
  }

  novaArr.unshift(valorMin);
  novaArr.push(valorMax);

  return novaArr;
}
