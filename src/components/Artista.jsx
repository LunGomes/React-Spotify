import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Artista(){
    const [artista, setArtista] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/artistas/${id}`)
        .then( res => res.json())
        .then( data => setArtista(data))
    }, [])

    
    return( 
        <>
        <div className="bg-vermelho rounded-lg mb-2 w-8/12   justify-items-start pl-7 pt-7 pb-7">
            <Link to="/">
                <div className="container mb-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </Link>
            <div className="flex">
                <img src={artista.foto} alt="Capa do artista" className="rounded-lg w-[200px] h-[200px]"/>
                <h1 className="text-8xl font-bold text-white mt-28 ml-6">{artista.name}</h1>
            </div>
            <h1 className="text-xl font-bold text-white mt-2 mb-4">{artista.genero}</h1>

            <p className="text-xl text-white">{artista.bio}</p>
        </div>
        </>
    )
}