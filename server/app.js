import express from 'express';
import conectDb from './db.js';
import cors from 'cors';
import artistas from './models/Artistas.js';

const app = express();
app.use(cors(), express.json());
const conexao = await conectDb();

conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});

conexao.once('open', () => {
    console.log('Conectado no MongoDB');
});

app.get('/artistas', async (req, res) => {
    const listaArtistas = await artistas.find({});
    res.status(200).json(listaArtistas);
});

app.get('/artistas/:id', async (req, res) => {
    const artista = await artistas.findById(req.params.id);
    res.status(200).json(artista);
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});