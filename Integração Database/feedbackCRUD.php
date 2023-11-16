<?php
// Conectar ao banco de dados (substitua as credenciais conforme necessário)
$servername = "seu_servidor";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $feedback = $_POST["user-feedback"];

    // Operação de criação (Create)
    $sql = "INSERT INTO feedbacks (mensagem) VALUES ('$feedback')";

    if ($conn->query($sql) === TRUE) {
        echo "Feedback enviado com sucesso!";
    } else {
        echo "Erro ao enviar o feedback: " . $conn->error;
    }
}

// Fechar a conexão
$conn->close();
?>
