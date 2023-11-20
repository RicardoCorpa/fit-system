function calculateIMC() {
  const peso = parseFloat(document.getElementById("Peso").value);
  const altura = parseFloat(document.getElementById("Altura").value);
  const genero = document.getElementById("Gênero").value;
  const idade = parseInt(document.getElementById("Idade").value);
  const imc = peso / (altura * altura);

  let resultado = "Seu IMC é de: " + imc.toFixed(2) + " - ";

  if (genero === "Masculino") {
    if (imc < 18.5) {
      resultado += "Abaixo do peso.";
    } else if (imc < 24.9) {
      resultado += "Peso normal.";
    } else if (imc < 29.9) {
      resultado += "Sobrepeso.";
    } else {
      resultado += "Obeso.";
    }
  } else {
    if (imc < 18.5) {
      resultado += "Abaixo do peso.";
    } else if (imc < 23.9) {
      resultado += "Peso normal.";
    } else if (imc < 28.9) {
      resultado += "Sobrepeso.";
    } else {
      resultado += "Obeso.";
    }
  }

  document.getElementById("Resultado: ").textContent = resultado;
}
