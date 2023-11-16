<?php
$data = json_decode(file_get_contents("php://input"));

$servername = "seu_servidor";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$emailLogin = $data->email;
$senhaLogin = $data->senha;

// Utilize hash e salt para armazenar senhas de maneira segura no banco de dados
// Aqui, estamos usando a função password_hash para gerar um hash da senha
$sqlLogin = "SELECT * FROM cadastro WHERE email = '$emailLogin'";
$result = $conn->query($sqlLogin);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hashSenhaArmazenada = $row["senha"];

    // Use password_verify para verificar se a senha fornecida corresponde ao hash armazenado
    if (password_verify($senhaLogin, $hashSenhaArmazenada)) {
        echo "Login bem-sucedido!";
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Usuário não encontrado.";
}

$conn->close();
?>
