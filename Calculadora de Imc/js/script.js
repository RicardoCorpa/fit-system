// script.js

const calculateButton = document.getElementById("calcular");
const weightInput = document.getElementById("peso");
const heightInput = document.getElementById("altura");
const resultElement = document.getElementById("resultado");

calculateButton.addEventListener("click", function () {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        resultElement.textContent = "Por favor, preencha os campos corretamente.";
        return;
    }

    const imc = weight / (height * height);
    const category = getImcCategory(imc);

    resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)} - ${category}`;
});

function getImcCategory(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso";
    } else if (imc < 24.9) {
        return "Peso Normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}
