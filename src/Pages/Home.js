import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar Section/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({});

  useEffect(() => {
    document.title = "CNN Indonesia Clone | Homepage"

    async function getNews() {
      const request = await fetch(
        "https://berita-indo-api.vercel.app/v1/cnn-news/"
      );
      const response = await request.json();

      setNews(response.data);
      setLoading(false);

      console.log(response.data);
    }
    getNews();
  }, []);

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
                {news.slice(0, 1).map((newsDisplay) => {
                  return (
                    <div className="w-8/12">
                      <img
                        src={newsDisplay.image.large}
                        className="h-[470px] w-[760px] object-cover"
                      />
                    </div>
                  );
                })}

                <div className="w-4/12 block">
                  {news.slice(0, 4).map((newsItem) => {
                    return (
                      <div className="flex pb-6">
                        <div className="px-4">
                          <img
                            src={newsItem.image.small}
                            className="h-[80px] max-w-sm"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-black-900 opacity-70 font-semibold">
                            <a href={newsItem.link} target="_blank">
                              {newsItem.title}
                            </a>
                          </p>
                          <p className="text-sm text-red-900 font-semibold">
                            Teknologi
                          </p>
                          <p className="text-sm text-black-900 opacity-50">
                            15 menit lalu
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {/* {news.map((newsItem) => {
                    return (
                      <div className="flex pb-6">
                        <div className="px-4">
                          <img
                            src={newsItem.image.small}
                            className="h-[80px] max-w-sm"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-black-900 opacity-70 font-semibold"><a href={newsItem.link} target="_blank">{newsItem.title}</a>
                          </p>
                          <p className="text-sm text-red-900 font-semibold">
                            Teknologi
                          </p>
                          <p className="text-sm text-black-900 opacity-50">
                            15 menit lalu
                          </p>
                        </div>
                      </div>
                    );
                  })} */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
