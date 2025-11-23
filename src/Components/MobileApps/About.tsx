import React from "react";
import { useParams } from "react-router";
import apps from "../../data/Apps.json";

const About = () => {
  const { appname } = useParams();
  const safeName = (appname ?? "roosnest") as keyof typeof apps;
  const data = apps[safeName];

  return (
    <div className="w-full px-6 py-6 font-sans items-center">
      <div className="flex items-center gap-4 text-gray-400 text-[14px] mb-3">
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 315" className="w-4 h-4 fill-current">
            <path d="M213.803 167.451c-.358-35.737 29.06-52.834 30.405-53.616-16.56-24.297-42.38-27.61-51.406-27.986-21.855-2.207-42.65 12.87-53.67 12.87-11.02 0-28.14-12.54-46.3-12.2-23.84.358-45.74 13.86-57.96 35.17-24.72 42.88-6.3 106.53 17.72 141.37 11.74 17.1 25.8 36.28 44.22 35.6 17.72-.72 24.48-11.53 45.94-11.53 21.46 0 27.32 11.53 46.3 11.2 19.12-.36 31.28-17.46 42.94-34.64 13.52-19.78 19.12-38.96 19.48-39.96-.42-.18-37.36-14.3-37.72-56.28Zm-35.28-103.98c9.7-11.78 16.28-28.14 14.52-44.46-14.08.56-31.14 9.38-41.3 21.16-9.08 10.52-16.96 27.56-14.82 43.65 15.68 1.22 31.9-7.98 41.6-20.35Z"/>
          </svg>
          iPhone
        </span>
        <span className="flex items-center gap-1 font-sans">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M17.523 9.75h-11.07a.403.403 0 0 0-.403.403v6.944c0 .889.72 1.609 1.609 1.609h8.658c.889 0 1.609-.72 1.609-1.609V10.153a.403.403 0 0 0-.403-.403Zm-8.87 7.882H7.483v-1.207h1.17v1.207Zm0-2.414H7.483V14.01h1.17v1.207Zm0-2.414H7.483v-1.207h1.17v1.207Zm6.694 4.828h-1.17v-1.207h1.17v1.207Zm0-2.414h-1.17V14.01h1.17v1.207Zm0-2.414h-1.17v-1.207h1.17v1.207Z"/>
            <path d="m15.235 3.53.884-1.327a.403.403 0 1 0-.668-.45l-.92 1.382A6.688 6.688 0 0 0 12 3.346c-1.124 0-2.192.273-3.162.789l-.92-1.382a.403.403 0 1 0-.668.45L8.235 3.53A6.64 6.64 0 0 0 5.799 7.5h12.402a6.64 6.64 0 0 0-2.966-3.97ZM10.28 6.097a.806.806 0 1 1 0-1.612.806.806 0 0 1 0 1.612Zm3.44 0a.806.806 0 1 1 0-1.612.806.806 0 0 1 0 1.612Z"/>
          </svg>
          Android
        </span>
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4 stroke-current" fill="none" strokeWidth="3">
            <circle cx="24" cy="24" r="20" />
            <path d="M4 24h40" />
            <path d="M24 4c6 6 10 14 10 20s-4 14-10 20c-6-6-10-14-10-20s4-14 10-20z" />
            <path d="M12 12c8 4 16 4 24 0" />
            <path d="M12 36c8-4 16-4 24 0" />
          </svg>
          Web
        </span>
      </div>

      <div className="w-full border-t border-gray-700 mb-6"></div>

      <div className="text-left">
        <p className="text-[13px] font-sans font-[400]" style={{color : "rgba(255, 255, 255, 0.92)"}}>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default About;
