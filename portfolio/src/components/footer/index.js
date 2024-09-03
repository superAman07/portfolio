import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#252426] w-full text-[#D9D9D9] py-8">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/superAman07/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6C733D] transition-colors duration-300">
            <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" className="h-8 w-8" />
          </a>
          <a href="https://x.com/superAman_7" target="_blank" rel="noopener noreferrer" className="hover:text-[#6C733D] transition-colors duration-300">
            <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/aman-vishwakarma07/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6C733D] transition-colors duration-300">
            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="mailto:amanvishwa2806@gmail.com" className="hover:text-[#6C733D] transition-colors duration-300">
            <img src="https://img.icons8.com/fluent/48/000000/new-post.png" alt="Email" className="h-8 w-8" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm text-[#A6A6A6] mb-2">&copy; 2024 Aman Vishwakarma. All rights reserved.</p>
          <p className="text-xs text-[#A6A6A6]">Designed and Developed by Aman Vishwakarma</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
