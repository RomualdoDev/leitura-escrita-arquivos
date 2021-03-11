const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    { nome: 'Jão' },
    { nome: 'Mario' },
    { nome: 'Armario' },
    { nome: 'huehue' }
];

const json = JSON.stringify(pessoas, '', 2); //convertendo um objeto javascript para json
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    mostra(dados);
}

function mostra(dados) {
    dados = JSON.parse(dados);//convertendo o json para objeto do javascript
    dados.forEach(element => console.log(element));
}

leArquivo(caminhoArquivo);
