// script.js

const calculateButton = document.getElementById("calcular");
const weightInput = document.getElementById("peso");
const resultElement = document.getElementById("resultado");

calculateButton.addEventListener("click", function () {
    const weight = parseFloat(weightInput.value);

    if (isNaN(weight) || weight <= 0) {
        resultElement.textContent = "Por favor, insira um peso válido.";
        return;
    }

    // Calculando a media de consumo diário de água (em mL)
    const waterIntake = weight * 30;

    resultElement.textContent = `Seu consumo diário de água estimado é de ${waterIntake} mL.`;
});
