const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.post('/', function(req, res) {
  const nome = req.body.nome;
  res.send(`Seja bem-vindo, ${nome}!`);
});
  


app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000');
});

