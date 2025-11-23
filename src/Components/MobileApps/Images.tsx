import React from "react";
import { useParams } from "react-router";
import apps from "../../data/Apps.json";

const Images = () => {
  const { appname } = useParams();
  const safeName = (appname ?? "roosnest") as keyof typeof apps;
  const data = apps[safeName];

  return (
    <div
      className="w-full overflow-x-auto overflow-y-hidden px-6 py-4"
      style={{
        userSelect: "all",
        pointerEvents: "all",
        WebkitOverflowScrolling: "touch",
        touchAction: "pan-x",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      onWheel={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <style>{`
        div.images-scroll::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="flex gap-4 w-max snap-x snap-mandatory scroll-smooth pr-6 images-scroll" style={{scrollbarWidth :'none', msOverflowStyle: 'none'}}>
        {"images" in data &&
          data.images &&
          data.images.length > 0 &&
          data.images.map((img, index) => (
            <div key={index} className="flex-shrink-0 flex justify-center snap-start">
              <img
                src={img}
                className="h-[310px] w-auto rounded-3xl shadow-lg"
                alt={`mockup-${index}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Images;
