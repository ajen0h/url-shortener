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
import toast from "react-hot-toast"

const formSchema = z.object({
    url: z.string()
        .nonempty({ message: "URL cannot be empty." }) 
        .url({ message: "Must be a valid URL." }) 
});

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
        toast('URL Created!!', {
            icon: '👏',
          });
        form.reset()

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-[1fr_auto] gap-2 max-w-4xl mx-auto">
                    <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                            <FormItem>
                                <FormMessage />
                                <FormControl>
                                    <Input className="placeholder:text-black p-6 bg-white " placeholder="Enter de link..." {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col justify-end iitece
                    ">
                    <Button type="submit" className=" p-6">Cutting ✂</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}
