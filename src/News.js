import { useState, useEffect } from "react";

export default function News() {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const request = await fetch(
        "https://berita-indo-api.vercel.app/v1/cnn-news/nasional"
      )

      const response = await request.json()

      setNews(response)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <>
      {loading ? <h1>Loading...</h1> : <div>{news.data.map((newsItem) => {
          return (
              <>
                <h1>{newsItem.title}</h1>
                <img src={newsItem.image.small} />
                <p>{newsItem.contentSnippet}</p>
              </>
          )
      })}</div>}
    </>
  );
}
