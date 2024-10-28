import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ConteudoPrincipal() {

    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        fetch('https://spotyglserver.vercel.app')
        .then(res => res.json())
        .then(data => {setArtistas(data);console.log(data)})
        .catch(err => console.log(err))
        .finally(() => console.log('Finalizou a requisição'))
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
      <>
        <div className="bg-vermelho rounded-lg mb-2 w-8/12 grid grid-cols-1 justify-items-start p-4">
          
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
        </div>
      </>
    )
}