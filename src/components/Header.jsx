import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white w-full h-28 p-7 flex justify-around items-center">
            <Link to="/">
                <img src="/spotyGL_header.png" className="h-56 mt-2"/>
            </Link>
        </header>
    )
}