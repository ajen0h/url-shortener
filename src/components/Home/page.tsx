import { Url } from "@/types"
import { useEffect, useState } from "react"
import UrlForm from "../url-from"
import MaxWitdhWrapper from "../max-witd-wrapper"
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
    <main className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" >
      <nav className="p-5 flex flex-row justify-start items-center">
        <Link to={"https://github.com/ajen0h/url-shortener"} target="_blank">
          <Github />
        </Link>
      </nav>
      <div className="min-h-screen z-50">
        <MaxWitdhWrapper className="relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="hidden lg:block absolute inset-0 top-8">

          </div>
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center flex flex-col items-center">
              <h1 className="text-4xl leading-snug w-fit tracking-tight font-extrabold uppercase">what do you want to cut ?</h1>
              <UrlForm setUrls={setUrls} urls={urls} />
            </div>
          </div>
        </MaxWitdhWrapper>


        <section className="grid gap-2">

          {urls.map(url => (
            <CardUrl url={url} />
          ))}
        </section>
      </div >
    </main>
  )
}
