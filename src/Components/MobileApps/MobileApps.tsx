import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "../Context/Context";

const MobileApps = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const [appsData, setAppsData] = useState<any>({});

  useEffect(() => {
    fetch("/JSON/Apps.json")
      .then((res) => res.json())
      .then((data) => setAppsData(data))
      .catch((err) => console.error("Failed to load apps data", err));
  }, []);

  return (
    <div className="h-screen w-screen flex items-center flex-col gap-6 justify-center">
      <div className="flex flex-row gap-5">
        {Object.entries(appsData).map(([key, app]: [string, any]) => (
          <Link to={`/mobileApps/${key}`} key={key}>
            <div className=" h-28 w-28 items-center rounded-lg flex-col flex hover:scale-110 transition-all duration-600 ease-in-out cursor-pointer">
              <img
                src={app.img}
                className={`w-full h-full rounded-3xl`}
                alt={app.name}
              />
              <p
                className={`text-center mt-2 text-[12px] ${
                  !isDark && "!text-black"
                } text-gray-300 font-sans`}
              >
                {app.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          window.scrollTo(0, 0);
          window.location.href = "/";
        }}
      >
        <h1
          className={`font-sans mt-5 text-sm text-gray-200  ${
            isDark
              ? "!text-[#F28F3B] drop-shadow-[0_0_40px_rgba(242,143,59,0.3)]"
              : "!text-[#ff391e] drop-shadow-[0_0_40px_rgba(255,57,30,0.2)]"
          } `}
        >
          Go Home
        </h1>
      </div>
    </div>
  );
};

export default MobileApps;
