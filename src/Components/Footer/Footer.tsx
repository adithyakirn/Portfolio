const Footer = () => {
  return (
    <>
        <div className="footer p-[120px_0] text-center">
            <h2 className="footer-title text-[clamp(40px,8vw,100px)] font-black uppercase -tracking-[1px] mb-10 leading-[0.9]">
                LET'S BUILD SOMETHING GREAT
            </h2>
            <div className="contact-subtitle text-[14px] text-[#666] tracking-[3px] uppercase mb-15 ">Ready to collaborate?</div>
            <a className="text-[clamp(20px,4vw,40px)] font-normal text-white decoration-[none] border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-400 rounded-[2px]" href="mailto:adithyakirna021@gmail.com">adithyakiran021@gmail.com</a>
            <div className="social-links mt-15 flex justify-center gap-10 ">
                <a href="https://github.com/adithyakirn" className="text-[#666] decoration-0 text-[10px] tracking-[2px] uppercase font-normal transition-all duration-300 ease-in">GitHub</a>
                <a href="https://www.linkedin.com/in/adithya-kiran-c-b-6a4738355/" className="text-[#666] decoration-0 text-[10px] tracking-[2px] uppercase font-normal transition-all duration-300 ease-in">Linkedin</a>
            </div>
        </div>
        <div className="p-[40px_0] border-t-[#1a1a1a] border-t-1 text-center">
            <div className="footer-text text-[10px] text-[#444] tracking-[2px]">© 2025 — Designed &amp; Developed with Precision</div>
          </div>
    </>
  )
}

export default Footer