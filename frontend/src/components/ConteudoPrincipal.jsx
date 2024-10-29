import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { jelly } from 'ldrs'

export default function ConteudoPrincipal() {

    jelly.register()

    const [artistas, setArtistas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
        fetch('https://spotyglserver.vercel.app/artistas')
        .then(res => res.json())
        .then(data => {setArtistas(data);console.log(data)})
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
      }, 3000)
    },[])

    const [randomColor, setRandomColor] = useState('')

    const generateRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    useEffect(() => {
    const randomColor = generateRandomColor();
    setRandomColor(randomColor);
    }, [])

    return (
        <div className="bg-vermelho rounded-t-2xl w-8/12 grid grid-cols-1 justify-items-start pr-7 pl-7 pt-7 pb-4">
          
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
          <h1 className="text-white text-2xl font-bold mb-2">Rock</h1>
          <div className="grid grid-cols-5 gap-2 ml-6">
            {artistas
            .filter( genero => genero.genero.includes("Rock"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,5)
            .map(artista => (
            <div key={artista._id}>
            <Link to={`/artistas/${artista._id}`} >
            <div className="w-36 h-36 mr-12 flex flex-col justify-start items-center pt-3 relative rounded-md overflow-hidden" style={{backgroundColor: randomColor}}>
                <h1 className="w-3/4 h-7 text-white font-bold">{artista.name}</h1>
                <img src={artista.foto} alt="Capa do Album" className="w-2/3 h-2/3 absolute bottom-0 -right-2 rounded-lg rotate-[25deg] translate-x-[18%] translate-y-[-2%]" />
                        {/*? artista.foto : "/capa.jpg"*/}
            </div>            
            </Link>
            </div>
            ))}
            </div>

          <h1 className="text-white text-2xl font-bold mb-2 mt-2">Pop</h1>
          <div className="grid grid-cols-5 gap-2 ml-6 ">
            {artistas
            .filter( genero => genero.genero.includes("Pop"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,5)
            .map(artista => (
            <div key={artista._id}>
            <Link to={`/artistas/${artista._id}`} >
            <div className="w-36 h-36 mr-12 flex flex-col justify-start items-center pt-3 relative rounded-md overflow-hidden" style={{backgroundColor: randomColor}}>
                <h1 className="w-3/4 h-7 text-white font-bold">{artista.name}</h1>
                <img src={artista.foto} alt="Capa do Album" className="w-2/3 h-2/3 absolute bottom-0 -right-2 rounded-lg rotate-[25deg] translate-x-[18%] translate-y-[-2%]" />
            </div>            
            </Link>
            </div>
            ))}
            </div>

            <h1 className="text-white text-2xl font-bold mb-2 mt-2">Sertanejo</h1>
            <div className="grid grid-cols-5 gap-2 ml-6">
            {artistas
            .filter( genero => genero.genero.includes("Sertanejo"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,5)
            .map(artista => (
            <div key={artista._id}>
            <Link to={`/artistas/${artista._id}`} >
            <div className="w-36 h-36 mr-12 flex flex-col justify-start items-center pt-3 relative rounded-md overflow-hidden" style={{backgroundColor: randomColor}}>
                <h1 className="w-3/4 h-7 text-white font-bold z-40">{artista.name}</h1>
                <img src={artista.foto} alt="Capa do Album" className="w-2/3 h-2/3 absolute bottom-0 -right-2 rounded-lg rotate-[25deg] translate-x-[18%] translate-y-[-2%]" />
            </div>            
            </Link>
            </div>
            ))}
            </div>
            </>
          }
        </div>
    )
}