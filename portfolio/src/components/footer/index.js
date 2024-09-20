import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#252426] w-full text-[#D9D9D9] py-8">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <p className="text-sm text-[#A6A6A6] mb-2">All rights reserved &copy; 2024.</p>
          <p className="text-xs text-[#A6A6A6]">Designed and Developed by Aman Vishwakarma using NextJS and Tailwind</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
