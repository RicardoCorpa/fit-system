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

$emailCadastro = $data->email;
$senhaCadastro = $data->senha;

// Utilize hash e salt para armazenar senhas de maneira segura no banco de dados
// Aqui, estamos usando a função password_hash para gerar um hash da senha
$hashSenha = password_hash($senhaCadastro, PASSWORD_DEFAULT);

$sqlCadastro = "INSERT INTO cadastro (email, senha) VALUES ('$emailCadastro', '$hashSenha')";

if ($conn->query($sqlCadastro) === TRUE) {
    echo "Usuário cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar usuário: " . $conn->error;
}

$conn->close();
?>
