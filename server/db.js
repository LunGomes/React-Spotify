import mongoose from "mongoose";

export default async function conectDb() {
    mongoose.connect("mongodb+srv://luanagomesdasilva281106:Luana1228@react-spotify.zeagh.mongodb.net/Spotify?retryWrites=true&w=majority&appName=react-spotify")

    return mongoose.connection
}