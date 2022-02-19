import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar Section/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({});

  useEffect(() => {
    document.title = "CNN Indonesia Clone | Homepage";

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
                    <>
                      <div className="W-8/12 block">
                        <img
                          src={newsDisplay.image.large}
                          className="h-[470px] w-[1000px] object-cover"
                        />
                        <a href={newsDisplay.link}>
                          <div className="px-5 py-4 inline-block relative bg-[#fff] -mt-[70px] shadow-gray-300 shadow-md w-[90%] relative left-[5%] inline-block">
                            <h3 className="text-2xl text-black-900 opacity-70 font-semibold hover:text-[#c00] transition-all">{newsDisplay.title}</h3>
                            <div className="flex">
                              <h3 className="pt-2 text-sm text-red-900 font-semibold text-[#c00]">
                                Nasional -
                              </h3>
                              <h3 className="pt-2 text-sm text-black-900 opacity-50">
                                - 15 Menit yang lalu
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="w-4/12 block">
                        {news.slice(2, 6).map((newsItem) => {
                          return (
                            <div className="flex pb-2">
                              <div className="px-4">
                                <img
                                  src={newsItem.image.small}
                                  className="h-[85px] max-w-sm"
                                />
                              </div>
                              <div>
                                <p className="text-sm text-black-900 items-start opacity-70 font-semibold leading-5">
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
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
