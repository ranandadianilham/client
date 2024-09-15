import React, { ReactNode, useEffect } from "react";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {}, []);

  return (
    <div className="">
      <div>
        {/* header */}
        <div className="flex justify-start gap-5 bg-[#16423C] text-white text-medium h-20 items-center px-10">
          <a
            className="font-medium hover:bg-white hover:text-[#6A9C89] p-1"
            href="/"
          >
            Home
          </a>
          <a
            className="font-medium  hover:bg-white hover:text-[#6A9C89] p-1"
            href="/warranty"
          >
            Warranty
          </a>
          <a
            className="font-medium  hover:bg-white hover:text-[#6A9C89] p-1"
            href="/profile"
          >
            Profile
          </a>
        </div>
      </div>
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
