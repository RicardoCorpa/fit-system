//Atribuir no código após passar o HTML (<script></script>)

function calculateIMC() {
  const weight = parseFloat(document.getElementById("Peso").value);
  const height = parseFloat(document.getElementById("Altura").value);
  const gender = document.getElementById("Gênero").value;
  const age = parseInt(document.getElementById("Idade").value);
  const imc = weight / (height * height);

  let result = "Seu IMC é de: " + imc.toFixed(2) + " - ";

  if (gender === "Masculino") {
    if (imc < 18.5) {
      result += "Abaixo do peso.";
    } else if (imc < 24.9) {
      result += "Peso normal.";
    } else if (imc < 29.9) {
      result += "Sobrepeso.";
    } else {
      result += "Obeso.";
    }
  } else {
    if (imc < 18.5) {
      result += "Abaixo do peso.";
    } else if (imc < 23.9) {
      result += "Peso normal.";
    } else if (imc < 28.9) {
      result += "Sobrepeso.";
    } else {
      result += "Obeso.";
    }
  }

  document.getElementById("Resultado").textContent = result;
}

//* ----------------------------------------------//-----------------------------------------------*//
//* Script histórico *//

//* Adicionar itens consultados //*
function addToHistory() {
  var searchTerm = document.getElementById("search-box").value;

  if (searchTerm.trim() !== "") {
    var historyList = document.getElementById("search-history");
    var listItem = document.createElement("li");
    listItem.textContent = searchTerm;
    historyList.appendChild(listItem);

    //* Limpar a barra da pesquisa *//
    document.getElementById("search-box").value = "";
  }
}

//* Função para limpar as consultas *//
function clearHistory() {
  var historyList = document.getElementById("search-history");
  historyList.innerHTML = "";
}

//* ------------------------------------------//---------------------------------------------------*//
//* Script validação de login *//

function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  //* Verifica senha correta *//
  if (password !== "senhaCorreta") {
    errorMessage.textContent =
      "Senha incorreta. Altere ou cadastre no site do SENAC.";
    return false; //* Impede o acesso *//
  } else {
    errorMessage.textContent = ""; //* Limpa a mensagem do erro *//
    return true; //* Permite o envio *//
  }
}

// script.js calculadora de água

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

/*----------------------------------------------//-------------------------------------------*/
/* script caloria */

const calcButton = document.getElementById("calcular");
const foodSelect = document.getElementById("alimento");
const quantityInput = document.getElementById("quantitidade");
const resultadoElemento = document.getElementById("resultado");

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