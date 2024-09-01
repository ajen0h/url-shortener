import { Url } from "@/types"
import { useEffect, useState } from "react"
import UrlForm from "../url-from"
import CardUrl from "../card-url"
import Navbar from "../navbar"
import BannerText from "../banner-text"
import Container from "../container"

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
      <Container>
        <Navbar />
        <BannerText />
        <div className="mt-12 w-full">
          <UrlForm setUrls={setUrls} urls={urls} />
        </div>
        <div className="w-full mt-12">
          {[...urls].reverse().map(url => (
            <CardUrl key={url.short_id} url={url} />
          ))}
          
        </div>
      </Container>
    </main>
  )
}
