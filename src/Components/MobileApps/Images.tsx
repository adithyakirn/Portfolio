import React from "react";
import { useParams } from "react-router";
import apps from "../../data/Apps.json";

const Images = () => {
  const { appname } = useParams();
  const safeName = (appname ?? "roosnest") as keyof typeof apps;
  const data = apps[safeName];

  return (
    <div className="w-max overflow-x-auto h-full px-6 py-4 flex flex-row gap-3">
      {"images" in data &&
        data.images &&
        data.images.length > 0 &&
        data.images.map((img, index) => (
          <div key={index} className="w-full flex justify-center">
            <img
              src={img}
              className="w-auto rounded-3xl h-[310px] shadow-lg"
              alt={`mockup-${index}`}
            />
          </div>
        ))}
    </div>
  );
};

export default Images;
