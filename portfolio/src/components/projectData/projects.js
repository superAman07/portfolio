import barknbond from "./images/barknbond.png";
import investmentCalc from "./images/investmentCalc.png";
import wotwebsite from "./images/wotwebsite.png"; 
import filterSystem from "./images/filterSystem.png"; 
import portfolio from "./images/portfolio.png"; 

const projects = [
    {
      id: 1,
      title: "Portfolio",
      imageUrl: portfolio,
      description: "My portfolio, created using Next.js and Tailwind CSS, showcases a blend of modern frontend technologies. It offers a responsive design, smooth navigation, and detailed project displays with preview options. Powered by Next.js for efficient rendering and Tailwind CSS for sleek styling, it highlights my skills in web development and design innovation.",
      previewUrl: "https://aman-vishwakarma.vercel.app/",  
    },
    {
      id: 2,
      title: "investment Calculator",
      imageUrl: investmentCalc,
      description: "I developed an intuitive investment calculator using React, featuring essential fields such as CURRENT SAVINGS ($), YEARLY SAVINGS ($), EXPECTED INTEREST (%, PER YEAR), and INVESTMENT DURATION. This tool empowers users to plan and visualize their financial goals effectively, providing accurate projections based on their input parameters.",
      previewUrl: "https://investment-calculator-d9yx5u5rc.vercel.app/",
    },
    {
      id: 3,
      title: "WOT website",
      imageUrl: wotwebsite,
      description: "I crafted a dynamic e-commerce platform using HTML, CSS, and JavaScript, offering a seamless user experience with full functionality. The product pages showcase multiple images per product, allowing users to explore different varieties effortlessly using an intuitive slider. This project reflects my commitment to creating engaging web solutions tailored for optimal user interaction and satisfaction, inspired by my passion for enhancing digital experiences.",
      previewUrl: "https://wotwebsite.vercel.app/",
    },
    {
      id: 4,
      title: "barknbond",
      imageUrl: barknbond,
      description: "I created a unique dating platform designed exclusively for dogs using Bootstrap. This project combines my passion for web development with a playful twist, offering dogs a chance to find their pawfect match online. The website features a modern design, user-friendly interface, and responsive layout, ensuring an enjoyable experience for both canine users and their owners",
      previewUrl: "https://barknbond.netlify.app/",  
    },
    {
      id: 1,
      title: "Filter System",
      imageUrl: filterSystem,
      description: "I developed an advanced expense tracker using React, featuring a robust filter system for organizing expenses by date (DD/MM/YYYY). Inspired by platforms like Amazon and Flipkart, users can view and filter expenses based on purchase dates, providing insights into spending habits over time. Additionally, the interface includes a vertical filling bar for visualizing expense distribution, ensuring a comprehensive financial management tool.",
      previewUrl: "https://filtersystem.vercel.app/",  
    },
  ];
  export default projects;
  