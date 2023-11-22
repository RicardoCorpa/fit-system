const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = calculateBMI(weight, height);

    const value = document.getElementById('value');
    let description = '';
    value.classList.add('attention');
    document.getElementById('infos').classList.remove('hidden');

    if (isNaN(weight) || isNaN(height) || height === 0) {
        value.textContent = 'Preencha os campos corretamente';
        value.classList.remove('attention');
        value.classList.add('error');
        document.getElementById('description').textContent = '';
        return;
    }

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    } else {
        description = "Cuidado! Você está com obesidade mórbida!";
    }

    value.textContent = bmi.toFixed(2).replace('.', ',');
    document.getElementById('description').textContent = description;
});

function calculateBMI(weight, height) {
    // Converte altura para metros se necessário
    if (height > 3) {
        height /= 100; // Converte centímetros para metros
    }

    // Calcula o IMC
    const bmi = weight / (height * height);
    return bmi;
}
