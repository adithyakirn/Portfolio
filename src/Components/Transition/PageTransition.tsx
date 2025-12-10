import { ReactNode } from "react";

const PageTransition = ({
  children,
  locationKey,
}: {
  children: ReactNode;
  locationKey: string;
}) => {
  // Debug: Check if key changes on navigation
  // console.log("PageTransition Key:", locationKey);
  return (
    <div key={locationKey} className="animate-page-enter w-full min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition;
