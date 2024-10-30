import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci"; 
import { useState } from "react";

export default function Header() {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')

    function handleSearch(e) {
        setSearch(e.target.value)
        navigate(`/pesquisar/${e.target.value}`)
    }

    return (
        <header className="bg-white w-full h-28 p-7 flex justify-around items-center">
            <Link to="/">
                <img src="/spotyGL_header.png" className="h-56 mt-2  "/>
            </Link>

            <form className="relative">
            <input 
                type="text" 
                id="search" 
                className="rounded-full text-white w-96 h-14 indent-10 outline-none  bg-gray-300 focus:outline-2 focus:outline-vermelho transition-all duration-500 ease-in-out"
                placeholder="Pesquise seu artista favorito..." 
                value={search}
                onChange={handleSearch}
                onFocus={()=> navigate('pesquisar')}
                onBlur={()=> navigate('/')}/>
            <CiSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-vermelho"/>
            </form>
        </header>
    )
}