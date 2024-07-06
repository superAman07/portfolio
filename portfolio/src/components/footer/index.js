import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#252426] w-full text-[#D9D9D9] py-8">
            <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/superAman07/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6C733D] transition-colors duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://x.com/superAman_7" target="_blank" rel="noopener noreferrer" className="hover:text-[#6C733D] transition-colors duration-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/aman-vishwakarma07/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6C733D] transition-colors duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:amanvishwa2806@gmail.com" className="hover:text-[#6C733D] transition-colors duration-300">
                        <FaEnvelope size={24} />
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
