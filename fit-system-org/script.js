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
