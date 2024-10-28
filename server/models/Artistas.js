import mongoose from "mongoose";

// Abaixo está sendo criado um schema para o artista, que será utilizado para criar um modelo de artista.
const artistaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    genero: {type: String},
    bio: {type: String},
    foto: {type: String}
});

// Abaixo está sendo criado um modelo de artista, que será utilizado para realizar operações no banco de dados. Os parâmetros são o nome da coleção e o schema.
const artistas = mongoose.model('artistas', artistaSchema);

export default artistas;