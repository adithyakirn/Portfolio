import React from "react";
import { Briefcase, User, Smartphone } from "lucide-react";
import { useTheme } from "../Context/Context";
const Category = ({ data }: { data: any }) => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const items = [
    {
      label: "FRAMEWORK",
      value: data.framework,
      subLabel: data.framework,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.5 -10.23174 23 20.46348"
          className="w-6 h-6 xl:w-10 xl:h-10 text-[#61DAFB]"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      label: "AGES",
      value: data.age,
      subLabel: data.age,
      textValue: data.age === "Everyone" ? "E" : data.age,
    },
    {
      label: "CATEGORY",
      value: data.category,
      subLabel: data.category,
      icon: (
        <Briefcase
          className={`w-6 h-6 xl:w-10 xl:h-10 ${
            isDark ? "text-[#EBEBF599]" : "text-black"
          }`}
        />
      ),
    },
    {
      label: "DEVELOPER",
      value: data.developer,
      subLabel: data.developer,
      icon: (
        <User
          className={`w-6 h-6 xl:w-10 xl:h-10 ${
            isDark ? "text-[#EBEBF599]" : "text-black"
          }`}
        />
      ),
    },
    {
      label: "LANGUAGE",
      value: data.language,
      subLabel: "English",
      textValue: "EN",
    },
    {
      label: "PLATFORM",
      value: data.platform,
      subLabel: data.platform,
      icon: (
        <Smartphone
          className={`w-6 h-6 xl:w-10 xl:h-10 ${
            isDark ? "text-[#EBEBF599]" : "text-black"
          }`}
        />
      ),
    },
  ];

  return (
    <section className="mt-[13px] pt-[13px] select-none text-[13px] font-sans font-[400]">
      <div className="pb-[16px]">
        <ul
          className="px-[20px] flex m-0 list-none overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 lg:gap-4 category-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onWheel={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <style>{`
            ul.category-scroll::-webkit-scrollbar { display: none; }
          `}</style>
          {items.map((item, index) => (
            <li
              key={index}
              className={`shrink-0 px-6 ${index === 0 ? "ml-[9px]" : ""}`}
            >
              <div className="flex items-center flex-col min-w-[80px] xl:min-w-[200px]">
                <div className="text-center">
                  <div
                    className={`uppercase ${
                      isDark ? "text-[#EBEBF599]" : "text-black"
                    } mb-[3px] xl:text-[16px] text-[11px] xl:font-normal font-medium tracking-wide`}
                  >
                    {item.label}
                  </div>
                  <div className="flex items-center justify-center h-8 xl:h-12 mb-1">
                    {item.icon ? (
                      item.icon
                    ) : (
                      <span
                        className={`text-[22px] xl:text-[28px] font-bold ${
                          isDark ? "text-[#EBEBF599]" : "text-black"
                        }`}
                      >
                        {item.textValue}
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-[11px] xl:text-[20px] truncate xl:font-normal max-w-[100px] xl:max-w-[200px] ${
                      isDark ? "text-[#EBEBF599]" : "text-black"
                    }`}
                  >
                    {item.subLabel || item.value}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
