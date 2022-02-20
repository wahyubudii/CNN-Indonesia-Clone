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
                      <a href={newsDisplay.link} className="hover:text-[#c00] transition-all">
                        <div className="W-8/12 block">
                          <img
                            src={newsDisplay.image.large}
                            className="w-[740px]"
                          />
                          <div className="relative left-[5%] inline-block -mt-[70px] px-5 py-4 w-[90%] bg-[#fff] shadow-gray-300 shadow-md">
                            <h3 className="text-[22px] text-black-900 opacity-70 font-semibold transition-all">{newsDisplay.title}</h3>
                            <div className="flex">
                              <h3 className="pt-2 text-sm text-red-900 font-semibold text-[#c00]">Nasional</h3>
                              <h3 className="pt-2 text-sm text-black-900 opacity-50"> • 15 Menit yang lalu</h3>
                            </div>
                          </div>
                        </div>
                      </a>

                      <div className="w-3/12 block">
                        {news.slice(2, 6).map((newsItem) => {
                          return (
                            <a href={newsItem.link} className="hover:text-[#c00] transition-all">
                              <div className="flex pb-2">
                                <div className="px-3">
                                  <img
                                    src={newsItem.image.small}
                                    className="w-40 h-[75px]"
                                  />
                                </div>
                                <div className="w-8/12">
                                  <p className="text-[13px] text-black-900 items-start opacity-70 font-semibold leading-5">
                                    {newsItem.title}
                                  </p>
                                  <p className="text-[12px] text-[#c00] font-semibold">
                                    Teknologi
                                  </p>
                                  <p className="text-[12px] text-black-900 opacity-50 ">
                                    15 menit lalu
                                  </p>
                                </div>
                              </div>
                            </a>
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
