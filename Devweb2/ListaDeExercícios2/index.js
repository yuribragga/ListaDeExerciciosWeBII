const express = require('express');
const app = express();


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { titulo: 'Início', mensagem: 'Página Inicial' });
});

app.get('/pagina1', (req, res) => {
    res.render('1pagina', { titulo: 'Página 02', mensagem: 'Segunda Página' });
});

app.get('/pagina2', (req, res) => {
    res.render('2pagina', { titulo: 'Página 03', mensagem: 'Terceira Página, pao de batata' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});