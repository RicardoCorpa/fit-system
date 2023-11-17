document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordConfirmation = document.getElementById("password-confirmation");

    const errorMessages = {
        username: "Preencha um username!",
        emailRequired: "O email é obrigatório.",
        emailValid: "Digite um email válido.",
        passwordRequired: "A senha é obrigatória.",
        passwordLength: "A senha precisa ter no mínimo 4 caracteres.",
        passwordConfirmation: "As senhas não coincidem.",
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (
            validateInputUsername() &&
            validateInputEmail() &&
            validateInputPassword() &&
            validateInputPasswordConfirmation()
        ) {
            alert("Conta criada com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
        // Adicione chamadas para outras funções de validação aqui, se necessário.
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

    function validateInputUsername() {
        const usernameValue = username.value.trim();
        if (usernameValue === "") {
            showError(username, errorMessages.username);
            return false;
        } else {
            clearError(username);
            return true;
        }
    }

    function validateInputEmail() {
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "") {
            showError(email, errorMessages.emailRequired);
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(email, errorMessages.emailValid);
            return false;
        } else {
            clearError(email);
            return true;
        }
    }

    function validateInputPassword() {
        const passwordValue = password.value.trim();
        if (passwordValue === "") {
            showError(password, errorMessages.passwordRequired);
            return false;
        } else if (passwordValue.length < 4) {
            showError(password, errorMessages.passwordLength);
            return false;
        } else {
            clearError(password);
            return true;
        }
    }

    function validateInputPasswordConfirmation() {
        const passwordConfirmationValue = passwordConfirmation.value.trim();
        const passwordValue = password.value.trim();

        if (passwordConfirmationValue === "") {
            clearError(passwordConfirmation);
            return false;
        } else if (passwordConfirmationValue !== passwordValue) {
            showError(passwordConfirmation, errorMessages.passwordConfirmation);
            return false;
        } else {
            clearError(passwordConfirmation);
            return true;
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordConfirmation = document.getElementById("password-confirmation");

    const errorMessages = {
        username: "Preencha um username!",
        emailRequired: "O email é obrigatório.",
        emailValid: "Digite um email válido.",
        passwordRequired: "A senha é obrigatória.",
        passwordLength: "A senha precisa ter no mínimo 4 caracteres.",
        passwordConfirmation: "As senhas não coincidem.",
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (
            validateInput(username, errorMessages.username) &&
            validateInputEmail(email, errorMessages.emailRequired, errorMessages.emailValid) &&
            validateInputPassword(password, errorMessages.passwordRequired, errorMessages.passwordLength) &&
            validateInputPasswordConfirmation(password, passwordConfirmation, errorMessages.passwordConfirmation)
        ) {
            alert("Conta criada com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
        // Adicione chamadas para outras funções de validação aqui, se necessário.
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

    function validateInput(input, ...messages) {
        const value = input.value.trim();
        const isEmpty = value === "";

        if (isEmpty) {
            showError(input, messages[0]);
        } else {
            clearError(input);
        }

        if (messages.length > 1 && !isEmpty) {
            const regex = new RegExp(messages[1]);
            if (!regex.test(value)) {
                showError(input, messages[2]);
                return false;
            } else {
                clearError(input);
            }
        }

        return !isEmpty;
    }

    function validateInputPasswordConfirmation(passwordInput, confirmationInput, message) {
        const passwordValue = passwordInput.value.trim();
        const confirmationValue = confirmationInput.value.trim();

        if (confirmationValue === "") {
            clearError(confirmationInput);
            return false;
        } else if (confirmationValue !== passwordValue) {
            showError(confirmationInput, message);
            return false;
        } else {
            clearError(confirmationInput);
            return true;
        }
    }
});
