import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Pesquisas(){

    const { search } = useParams()
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch(`https://spotyglserver.vercel.app/pesquisar/${search}`)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(error => console.error("Erro ao buscar dados:", error))
    }, [search])
    
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

    return(
        <div className="bg-vermelho rounded-t-2xl w-8/12 grid grid-cols-5 gap-4 p-7">
            <h1 className="col-span-5 text-3xl font-bold text-white">Resultados:</h1>
            {
                searchResults.length > 0 ? (
                searchResults.map(resultado => (
                    <div key={resultado._id} className="">
                        <Link to={`/artistas/${resultado._id}`}>
                            <div className="w-36 h-36 mb-2 flex flex-col justify-start  pt-3 relative rounded-md overflow-hidden" style={{ backgroundColor: randomColor }}>
                                <h1 className="w-3/4 h-7 text-white font-bold z-40">{resultado.name}</h1>
                                <img src={resultado.foto} alt="Capa do Album" className="w-2/3 h-2/3 absolute bottom-0 -right-2 rounded-lg rotate-[25deg] translate-x-[18%] translate-y-[-2%]" />
                            </div>
                        </Link>
                    </div>
                ))
                ) : (
                <div className="col-span-5 flex flex-col justify-center items-center w-full h-full font-bold">
                    <h1 className="text-3xl font-bold text-white -translate-y-32">Infelizmente seu artista ainda não está no nosso site 😭</h1>
                </div>
                )
            }
        </div>
    )
}