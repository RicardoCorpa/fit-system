document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const errorMessages = {
        emailRequired: "O email é obrigatório.",
        emailValid: "Digite um email válido.",
        passwordRequired: "A senha é obrigatória.",
        passwordLength: "A senha precisa ter no mínimo 8 caracteres.",
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (
            validateInputEmail(email, errorMessages.emailRequired, errorMessages.emailValid) &&
            validateInputPassword(password, errorMessages.passwordRequired, errorMessages.passwordLength)
        ) {
            alert("Login efetuado com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });

    function showError(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a");
        textMessage.innerText = message;
        formItem.classList.add("error");
    }

    function clearError(input) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a");
        textMessage.innerText = "";
        formItem.classList.remove("error");
    }

    function validateInputEmail(input, requiredMessage, validMessage) {
        const value = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {
            showError(input, requiredMessage);
            return false;
        } else if (!emailRegex.test(value)) {
            showError(input, validMessage);
            return false;
        } else {
            clearError(input);
            return true;
        }
    }

    function validateInputPassword(input, requiredMessage, lengthMessage) {
        const value = input.value.trim();
        if (value === "") {
            showError(input, requiredMessage);
            return false;
        } else if (value.length < 8) {
            showError(input, lengthMessage);
            return false;
        } else {
            clearError(input);
            return true;
        }
    }
});
