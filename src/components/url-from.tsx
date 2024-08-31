import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Url } from "@/types"

const formSchema = z.object({
    url: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

interface UrlFormProps {
    setUrls: (values: Url[]) => void
    urls: Url[]
}

export default function UrlForm({ setUrls, urls }: UrlFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            url: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {

        const existUrl = urls.find(url => values.url === url.long_url)
        if (existUrl) {
            form.setError("url", {
                message: "Esta url ya existe!"
            })
            return
        }
        const short_id = crypto.randomUUID().slice(0, 6)

        const newUrl = {
            long_url: values.url,
            short_id
        }

        setUrls([...urls, newUrl])

        localStorage.setItem("urls", JSON.stringify([...urls, newUrl]))

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
                <div >
                    <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className=" bg-white" placeholder="Enter de link..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Cutting ✂</Button>
                </div>
            </form>
        </Form>
    )
}
