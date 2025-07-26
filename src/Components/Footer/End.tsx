import ScrambleChar from "./Scramble";


const End = () => {
  const chars = ["L", "e", "t", "'", "s", "T", "a", "l", "k"];
  return (
    <>
      <footer className="pb-[282px] overflow-clip relative">
        <div className="footer-header group z-4 relative lg:p-[0_.46296vw]">
          <a href="" className="group flex items-center text-[#F28F3B] font-[reg] justify-between relative text-[7.2rem] lg:text-[12.15278vw]">
                <span className="relative -translate-x-[20px] overflow-hidden w-[10.70602vw] h-[8.96991vw] flex items-center justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19"
                    className="transition-transform  duration-700 ease-[cubic-bezier(.19,1,.22,1)] transform -translate-x-full group-hover:translate-x-0 lg:h-[8.96991vw] lg:w-[10.70602vw]">
                    <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
                  </svg>
                </span>
            <span className="flex relative lg:ml-[-.07em] -translate-x-[280px] transform transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:translate-x-[2vw] before:transition-[transform.8s_cubic-bezier(.19,1,.22,1)] before:delay-[.2] before:bg-current before:bottom-[3.13194vw] before:content-[''] before:h-[.1rem] before:left-[.072em] before:absolute before:right-[-.065em] origin-left">
              <span className="text-splitter--splitted text-splitter group">
                {chars.map((char, i) => (
                  <ScrambleChar key={i} char={char} />
                ))}
              </span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19"
              className="transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] transform group-hover:translate-x-full lg:h-[8.96991vw] lg:left-[.5787vw] lg:w-[10.70602vw] relative">
              <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

export default End;