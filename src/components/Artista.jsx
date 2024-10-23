import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Artista(){
    const [artista, setArtista] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/artista/${id}`)
        .then( res => res.json())
        .then( data => setArtista(data))
    }, [])

    return(
        <>
        <h1>{artista.name}</h1>
        </>
    )
}


