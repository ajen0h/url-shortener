import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center px-6 mb-12">
            <h1 className="leading-snug tracking-tight font-extrabold uppercase text-xl">LINKIO</h1>
            <Link to={"https://github.com/ajen0h/url-shortener"} target='_blank'>
                <Github className="size-7 hover:text-black/50 transition-all" />
            </Link>
        </nav>
    )
}
