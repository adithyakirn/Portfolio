const Nav = ({ data }: { data: any }) => {
  const appName = data?.name || "";
  return (
    <nav className="bg-[#2e2e2e] lg:hidden  shadow-[0_1px_2px_rgba(0,0,0,.1)] h-[44px] z-[100] overflow-hidden fixed w-screen">
      <div className="items-center mx-4 flex justify-center h-full">
        <h1 className="text-white text-center font-sans">{appName}</h1>
      </div>
    </nav>
  );
};

export default Nav;
