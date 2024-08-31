import { Url } from "@/types";
import { Button } from "./ui/button";

export default function CardUrl({ url }: { url: Url }) {
    return (
        <div key={url.short_id} className="bg-white shadow-xl border border-black grid grid-cols-[1fr_auto] items-center gap-2 p-3">
            <div>

            <h1>{url.long_url}</h1>
            <p>{import.meta.env.VITE_MAIN_URL}{url.short_id}</p>
            </div>
            <Button onClick={()=>{navigator.clipboard.writeText(`${import.meta.env.VITE_MAIN_URL}${url.short_id}`)}}>Copy Url</Button>
        </div>
    )
}
