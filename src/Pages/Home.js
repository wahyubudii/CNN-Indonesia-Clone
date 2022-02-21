import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar Section/Navbar";
import DisplayImage from "../Components/News/NewsImage";
import NewsTime from "../Components/News/NewsTime";
import NewsTitle from "../Components/News/NewsTitle";
import NewsType from "../Components/News/NewsType";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({});

  const baseURL = "https://berita-indo-api.vercel.app/v1/cnn-news/";

  useEffect(() => {
    document.title = "CNN Indonesia Clone | Homepage";

    async function getNews() {
      const request = await fetch(baseURL);
      const response = await request.json();

      setNews(response.data);
      setLoading(false);
    }
    getNews();
  }, []);

  if (!news) return null;

  return (
    <div>
      <Navbar />

      <section>
        <div className="container mx-auto">
          <div className="py-12 px-48">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="flex">
                <div className="W-8/12 block">
                  {news.slice(0, 1).map((newsDisplay) => {
                    return (
                      <>
                        <a href={newsDisplay.link} className="hover:text-[#c00] transition-all" target="_blank">
                          <DisplayImage data={newsDisplay} variant="large" />
                          <div className="relative left-[5%] inline-block -mt-[70px] px-5 py-4 w-[90%] bg-[#fff] shadow-gray-300 shadow-md">
                            <NewsTitle data={newsDisplay} variant="large"/>
                            <div className="flex pt-2">
                              <NewsType variant="large"/>
                              <NewsTime variant="large">18 Menit Lalu</NewsTime>
                            </div>
                          </div>
                        </a>
                      </>
                    )
                  })}
                </div>

                <div className="w-3/12 block">
                  {news.slice(2, 6).map((newsItem) => {
                    return (
                      <>
                        <a href={newsItem.link} className="hover:text-[#c00] transition-all" target="_blank">
                          <div className="flex pb-2">
                            <div className="px-3">
                              <DisplayImage data={newsItem} variant="small" />
                            </div>
                            <div className="w-8/12">
                              <NewsTitle data={newsItem} variant="small" />
                              <NewsType variant="small"/>
                              <NewsTime variant="small">15 Menit Lalu</NewsTime>
                            </div>
                          </div>
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
