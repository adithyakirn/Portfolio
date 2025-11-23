import React, { useEffect, useState } from "react";
import apps from "../../data/Apps.json";

const Main = ({ appname }: { appname: string | undefined }) => {
  const [bgColor, setBgColor] = useState("");
  const [color, setClr] = useState("");
  const [img, setImg] = useState("");
  const [data, setData] = useState({
    fullName: "",
    subtitle: "",
    pricing: "",
    color: "",
    gradient: "",
    img: "",
  });

  useEffect(() => {
    const safeName = (appname ?? "roosnest") as keyof typeof apps;
    const data = apps[safeName];
    setClr(data.color);
    setBgColor(data.gradient);
    setImg(data.img);
    setData(data);
  }, [appname]);

  const handleShare = () => {
    const shareData = {
      title: "My Portfolio",
      text: "Check out my portfolio!",
      url: "https://portfolio-rouge-six-85.vercel.app/",
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log(err));
    } else {
      window.open("https://portfolio-rouge-six-85.vercel.app/", "_blank");
    }
  };

  return (
    <>
      <div className="h-full w-screen">
        <section className="h-[200px] w-full" style={{ background: color }}>
          <div className="h-[200px] w-full" style={{ background: bgColor }}>
            <div className="h-full mx-7 w-screen flex items-center flex-row gap-4">
              <img src={img} className="h-30 w-auto" alt="" />
              <div className="flex flex-col items-start justify-center h-32 mt-[12px]">
                <h1 className="text-white text-[17px] font-sans font-semibold leading-tight">
                  {data.fullName}
                </h1>
                <p
                  className="text-white text-[13px] font-sans mt-1"
                  style={{ color: "rgba(245, 245, 245, 0.6)" }}
                >
                  {data.subtitle}
                </p>
                <p
                  className="text-white text-[13px] font-sans"
                  style={{ color: "rgba(245, 245, 245, 0.6)" }}
                >
                  {data.pricing}
                </p>
                <div className="flex items-center gap-2 w-full justify-between mt-2.5">
                  <button
                    onClick={handleShare}
                    className="bg-white/20 hover:bg-white/30 text-white text-[13px] font-sans px-4 py-1 rounded-full flex items-center gap-1 transition-colors backdrop-blur-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
