'use client'
import barknbond from "./images/barknbond.png";
import investmentCalc from "./images/investmentCalc.png";
import wotwebsite from "./images/wotwebsite.png"; 
import filterSystem from "./images/filterSystem.png"; 
import portfolio from "./images/portfolio.png"; 
import pglife from "./images/pglife.png";
import paytmClone from "./images/paytmClone.png";
import weatherapp from "./images/weather.png"

const projects = [
    {
      id: 1,
      title: "PayTM Clone",
      imageUrl: paytmClone,
      description: "A web application that simulates a money transfer platform similar to Paytm. Users can sign up, manage contacts, and transfer money securely through a user-friendly interface. Features: User Registration, Authentication , Dashboard ,Money Transfer, Search Functionality, Responsive Design......................<---------------------Technologies Used-------------------->:  Frontend: React.js, Tailwind CSS  Backend: Node.js, Express.js, MongoDB Others: CORS, Axios",
      previewUrl: "https://github.com/superAman07/PaytmClone",  
    },
    {
      id: 2,
      title: "Portfolio",
      imageUrl: portfolio,
      description: "My portfolio, created using Next.js and Tailwind CSS, showcases a blend of modern frontend technologies. It offers a responsive design, smooth navigation, and detailed project displays with preview options. Powered by Next.js for efficient rendering and Tailwind CSS for sleek styling, it highlights my skills in web development and design innovation.",
      previewUrl: "https://aman-vishwakarma.vercel.app/",  
    },
    {
      id: 3,
      title: "PGLife",
      imageUrl: pglife,
      description: "PG Life is a dynamic web application for discovering and managing paying guest (PG) accommodations. Users can search for PGs by city, view detailed property listings with ratings, and manage their favorite properties. The platform features secure user authentication and displays testimonials from previous residents. Built with PHP and MySQL for the backend, and HTML, CSS, and Bootstrap for the frontend, PG Life offers a user-friendly experience for managing and exploring PG options.",
      previewUrl: "http://pglife-project.free.nf/",  
    },
    {
      id: 4,
      title: "Weather App",
      imageUrl: weatherapp,
      description: "I developed an interactive, real-time weather and AQI checker using React and Tailwind CSS, delivering up-to-the-minute weather details and air quality insights for any city or country. The application seamlessly integrates the OpenWeather API, offering users an intuitive interface to explore comprehensive environmental data, including temperature, humidity, and air quality index levels. This project reflects my dedication to creating responsive, user-centered applications that simplify access to crucial information, aligning with my passion for enhancing digital interactions with functional design.",
      previewUrl: "https://weather-app-beryl-eight-73.vercel.app/",
    },
    {
      id: 5,
      title: "WOT website",
      imageUrl: wotwebsite,
      description: "I crafted a dynamic e-commerce platform using HTML, CSS, and JavaScript, offering a seamless user experience with full functionality. The product pages showcase multiple images per product, allowing users to explore different varieties effortlessly using an intuitive slider. This project reflects my commitment to creating engaging web solutions tailored for optimal user interaction and satisfaction, inspired by my passion for enhancing digital experiences.",
      previewUrl: "https://wotwebsite.vercel.app/",
    },
    {
      id: 6,
      title: "investment Calculator",
      imageUrl: investmentCalc,
      description: "I developed an intuitive investment calculator using React, featuring essential fields such as CURRENT SAVINGS ($), YEARLY SAVINGS ($), EXPECTED INTEREST (%, PER YEAR), and INVESTMENT DURATION. This tool empowers users to plan and visualize their financial goals effectively, providing accurate projections based on their input parameters.",
      previewUrl: "https://investment-calculator-d9yx5u5rc.vercel.app/",
    },
    {
      id: 7,
      title: "barknbond",
      imageUrl: barknbond,
      description: "I created a unique dating platform designed exclusively for dogs using Bootstrap. This project combines my passion for web development with a playful twist, offering dogs a chance to find their pawfect match online. The website features a modern design, user-friendly interface, and responsive layout, ensuring an enjoyable experience for both canine users and their owners",
      previewUrl: "https://barknbond.netlify.app/",  
    },
    {
      id: 8,
      title: "Filter System",
      imageUrl: filterSystem,
      description: "I developed an advanced expense tracker using React, featuring a robust filter system for organizing expenses by date (DD/MM/YYYY). Inspired by platforms like Amazon and Flipkart, users can view and filter expenses based on purchase dates, providing insights into spending habits over time. Additionally, the interface includes a vertical filling bar for visualizing expense distribution, ensuring a comprehensive financial management tool.",
      previewUrl: "https://filtersystem.vercel.app/",  
    },
  ];
  export default projects;
  