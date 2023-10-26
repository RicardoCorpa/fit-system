// script.js

const calculateButton = document.getElementById("calcular");
const foodSelect = document.getElementById("alimento");
const quantityInput = document.getElementById("quantitidade");
const resultElement = document.getElementById("resultado");

calculateButton.addEventListener("click", function () {
    const selectedFood = foodSelect.value;
    const quantity = parseFloat(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        resultElement.textContent = "Por favor, insira uma quantidade válida.";
        return;
    }

    let caloriesPerGram = 0;

    switch (selectedFood) {
        case "banana":
            caloriesPerGram = 0.9; // 100 calorias por unidade
            break;
        case "maçã":
            caloriesPerGram = 0.52; // 52 calorias por unidade
            break;
        case "laranja":
            caloriesPerGram = 0.62; // 62 calorias por unidade
            break;
        case "pera":
            caloriesPerGram = 0.57; // 57 calorias por unidade
            break;
    }

    const totalCalories = caloriesPerGram * quantity;
    resultElement.textContent = `Você consumiu aproximadamente ${totalCalories.toFixed(2)} calorias.`;
});
