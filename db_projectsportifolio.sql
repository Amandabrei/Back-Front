CREATE DATABASE Project_portifolio;
USE Project_portifolio;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO projects (name, description) VALUES 
	('Projeto 1', 'Descrição do Projeto 1'),
	('Projeto 2', 'Descrição do Projeto 2'),
	('Projeto 3', 'Descrição do Projeto 3');

INSERT INTO projects (name, description) VALUES 
	('Projeto 4', 'Descrição do Projeto 4');

INSERT INTO projects (name, description) VALUES 
	('Projeto 5', 'Descrição do Projeto 5');
    
    
-- select * from projects;