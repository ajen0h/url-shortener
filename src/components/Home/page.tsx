import { Url } from "@/types"
import { useEffect, useState } from "react"
import UrlForm from "../url-from"
import CardUrl from "../card-url"
import { Github } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  const [urls, setUrls] = useState<Url[]>([])

  useEffect(() => {
    const urlsLS = localStorage.getItem("urls")
    if (urlsLS !== null) {
      setUrls(JSON.parse(urlsLS))
    }
  }, [])


  return (
    <main className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] overflow-auto" >
      <section className="p-14">

        <nav className="">
          <Link to={`https://github.com/ajen0h/url-shortener`} target="_blank">
          <Github/>
          </Link>
        </nav>
        <h1 className="text-4xl leading-snug w-fit tracking-tight font-extrabold uppercase">what do you want to cut ?</h1>
        <UrlForm setUrls={setUrls} urls={urls} />
        <section>
          {urls.map(url => (
            <CardUrl key={url.short_id} url={url} />
          ))}
        </section>
      </section>
    </main>
  )
}
