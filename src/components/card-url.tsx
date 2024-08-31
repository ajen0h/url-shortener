import { Url } from "@/types";
import { Button } from "./ui/button";

export default function CardUrl({ url }: { url: Url }) {
    return (
        <div key={url.short_id} className="bg-white break-words">
            <div className="flex flex-col">
            <h1>{url.long_url}</h1>
            <p>{import.meta.env.VITE_MAIN_URL}{url.short_id}</p>
            <Button onClick={()=>{navigator.clipboard.writeText(`${import.meta.env.VITE_MAIN_URL}${url.short_id}`)}}>Copy Url</Button>
            </div>
        </div>
    )
}
