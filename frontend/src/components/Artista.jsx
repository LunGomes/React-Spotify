import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { jelly } from 'ldrs'

export default function Artista(){

    jelly.register()

    const [artista, setArtista] = useState({})
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
        fetch(`https://spotyglserver.vercel.app/artistas/${id}`)
        .then( res => res.json())
        .then( data => {setArtista(data), console.log(data)})
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
      }, 3000)
    },[])
    
    return( 
        <div className="bg-vermelho rounded-t-2xl w-8/12 justify-items-start p-7">
        
        {isLoading ?
            <div className="flex flex-col flex-wrap justify-center items-center w-full h-full font-bold gap-4">
                <p className="text-xl text-white">Carregando...</p>
                <l-jelly
                    size="55"
                    speed="0.9" 
                    color="white" 
                ></l-jelly>
            </div>
          :
          <>
            <Link to="/">
                <div className="container mb-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </Link>
            <div className="flex items-center">
                <img src={artista.foto} alt="Capa do artista" className="rounded-lg w-[200px] h-[200px]"/>
                <h1 className="text-8xl font-bold text-white ml-6">{artista.name}</h1>
            </div>
            <h1 className="text-xl font-bold text-white mt-2 mb-4">{artista.genero}</h1>

            <p className="text-xl text-white">{artista.bio}</p>
            </>
            }
        </div>
    )
}