CREATE DATABASE DevWebll;

USE DevWebll;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    produto VARCHAR(100),
    quantidade INT,
    total DECIMAL(10,2),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

INSERT INTO cliente (nome, email) VALUES
('João', 'joao@example.com'),
('Felipe', 'felipe@example.com'),
('Pedro', 'pedro@example.com');

INSERT INTO pedido (cliente_id, produto, quantidade, total) VALUES
(1, 'Camiseta', 2, 39.99),
(2, 'Calça Jeans', 1, 49.99),
(3, 'Chinelo', 1, 59.99);
