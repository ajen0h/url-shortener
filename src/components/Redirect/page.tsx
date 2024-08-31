import { Url } from "@/types"
import { useEffect } from "react";

import {  useParams } from "react-router-dom"
export default function Redirect() {
    
    const params = useParams()
    useEffect(() => {

        const init = () => {
            const urlsLS = localStorage.getItem("urls")
            if (params.id === null) return
            if (urlsLS !== null) {
                const urlsJson = JSON.parse(urlsLS)
                const urlFind = urlsJson.find((url: Url) => url.short_id === params.id)
                if (urlFind === undefined) return window.location.href = `${import.meta.env.VITE_MAIN_URL}`
                window.location.href = `${urlFind.long_url}`
            }
        }

        init()

    }, [])

    return (<></>)
}
