import { Url } from "@/types"
import { useEffect, useState } from "react"
import UrlForm from "../url-from"

export default function Home() {
    const [urls, setUrls] = useState<Url[]>([])

    useEffect(() => {
      const urlsLS = localStorage.getItem("urls")
      if (urlsLS !== null) {
        setUrls(JSON.parse(urlsLS))
      }
    }, [])
  return (
    <div>App

    <UrlForm setUrls={setUrls} urls={urls} />
    {urls.map(url => (
      <div key={url.short_id}>
        <h1>{url.long_url}</h1>

        <p>{import.meta.env.VITE_MAIN_URL}{url.short_id}</p>
      </div>
    ))}
  </div>
  )
}
