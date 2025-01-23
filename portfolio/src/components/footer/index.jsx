'use client';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [emoji, setEmoji] = useState("💻");
  const emojis = ["💻", "🚀", "🎨", "🔥", "🌟"];

  useEffect(()=>{
    const interval = setInterval(()=>{
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)])
    },1000);
    return ()=>clearInterval(interval);
  },[])

  useEffect(() => {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    const columns = canvas.width / 20;  
    const drops = Array(Math.floor(columns)).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(37, 36, 38, 0.1)';  
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#6C733D';  
      ctx.font = '16px monospace';

      drops.forEach((y, x) => {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillText(text, x * 20, y * 20); 

        if (y * 20 > canvas.height && Math.random() > 0.975) {
          drops[x] = 0; 
        }
        drops[x]++;
      });
    };

    const matrixInterval = setInterval(drawMatrix, 50);
 
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 150;  
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); 

    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <footer id="footer" className="bg-[#252426] w-full text-[#D9D9D9] py-8 relative overflow-hidden">
      <canvas id="matrixCanvas" className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <p className="text-sm text-[#A6A6A6] mb-2">All rights reserved &copy; 2024.</p>
          <p className="text-xs text-[#A6A6A6]">Designed and Developed by Aman Vishwakarma using NextJS and Tailwind {emoji}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
