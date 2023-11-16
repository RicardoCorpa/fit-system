CREATE TABLE cadastro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);
CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    mensagem TEXT,
    data_feedback TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE alimentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    calorias FLOAT NOT NULL,
    proteinas FLOAT NOT NULL,
    carboidratos FLOAT NOT NULL,
    gorduras FLOAT NOT NULL
);
