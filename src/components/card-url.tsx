import { Url } from "@/types";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default function CardUrl({ url }: { url: Url }) {

    const [copy, setCopy] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText(
            `${import.meta.env.VITE_MAIN_URL}${url.short_id}`
        );
        setCopy(true)

        setTimeout(() => {
            setCopy(false)
        }, 2000);

    }

    return (
        <div
            key={url.short_id}
            className="mt-2 flex flex-col gap-3 max-w-4xl mx-auto border-2 border-black p-3 bg-white"
        >
            <div className="flex flex-col break-words gap-3">
                <div className="flex flex-row items-center gap-4">
                    {!copy ? (
                        <>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Clipboard
                                            className="cursor-pointer hover:text-black/60"
                                            size={24}
                                            onClick={handleCopy}
                                        /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Copy</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </>
                    ) : (<Check />)}

                    <p className="font-bold truncate">
                        {import.meta.env.VITE_MAIN_URL}
                        {url.short_id}
                    </p>
                </div>
                <h1 className="italic text-black/60 overflow-hidden text-ellipsis whitespace-nowrap">
                    Original Url : {url.long_url}
                </h1>
            </div>
        </div>
    )
}
