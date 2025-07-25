const Footer = () => {
  return (
    <>
        <div className="footer p-[120px_0] text-center">
            <h2 className="footer-title text-[clamp(40px,8vw,100px)] font-black uppercase -tracking-[1px] mb-10 leading-[0.9] text-[#F28F3B]">
                LET'S BUILD SOMETHING GREAT
            </h2>
            <div className="contact-subtitle text-[14px] text-[#666] tracking-[3px] uppercase mb-15 ">Ready to collaborate?</div>
            <a className="text-[clamp(20px,4vw,40px)] font-normal text-white decoration-[none] border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-400 rounded-[2px]" href="mailto:adithyakirna021@gmail.com">adithyakiran021@gmail.com</a>
            <div className="social-links mt-15 flex justify-center gap-10 ">
                <a href="https://github.com/adithyakirn" className="flex items-center justify-center flex-col gap-2 text-[#888] decoration-0 text-[10px] tracking-[2px] uppercase font-normal transition-all duration-300 ease-in hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#888] transition-all duration-300 ease-in  hover:text-white group-hover:text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                GitHub
                </a>
                <a href="https://github.com/adithyakirn" className="flex items-center justify-center flex-col gap-2 text-[#888] decoration-0 text-[10px] tracking-[2px] uppercase font-normal transition-all duration-300 ease-in hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#888] transition-all duration-300 ease-in hover:text-white group-hover:text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                Linkedin
                </a>
            </div>
        </div>
        <div className="p-[40px_0] border-t-[#1a1a1a] border-t-1 text-center">
            <div className="footer-text text-[10px] text-[#444] tracking-[2px]">© 2025 — Designed &amp; Developed with Precision</div>
          </div>
    </>
  )
}

export default Footer