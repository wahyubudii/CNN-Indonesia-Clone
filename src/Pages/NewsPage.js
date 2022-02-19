import { useEffect, useState } from "react"
import Navbar from "../Components/Navbar Section/Navbar"

export default function NewsPage() {
    const [news, setNews] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const request = await fetch ("https://berita-indo-api.vercel.app/v1/cnn-news/")
            const response = await request.json();

            setNews(response)
            setLoading(false)

            console.log(response);
        }
        getData()
        
    }, [])


    return (
        <>
            <Navbar />
            <h1>New Page</h1>
        </>
    )
}