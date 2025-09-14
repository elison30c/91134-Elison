-- Cria o banco de dados caso ainda não exista
CREATE DATABASE IF NOT EXISTS estoque_91134;

-- Usa o banco criado
USE estoque_91134;

-- Cria a tabela usuários 
CREATE TABLE IF NOT EXISTS usuários(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Insere o usuário admin com senha "admin123"
-- (a senha será armazenada com hash usando a função PASSWORD() do MySQL para executar)

INSERT INTO usuarios (usuario, senha)
VALUES ('admin', PASSWORD('admin123'));.