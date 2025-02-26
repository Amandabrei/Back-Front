const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3306;

app.use(express.json());
app.use(express.static('../frontend')); // Ajuste o caminho conforme necessário

const db = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: 'pedro0807', // Substitua pela sua senha do MySQL
    database: 'db_projectsportifolio' // Nome do banco de dados
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

app.get('/api/projects', (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar projetos');
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});