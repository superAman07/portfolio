'use client'
import barknbond from "./images/barknbond.png";
import investmentCalc from "./images/investmentCalc.png"; 
import todo from "./images/todo.png"; 
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
      title: "Todo",
      imageUrl: todo,
      description: "A modern Todo List app built with React and Tailwind CSS, featuring task management with add, edit, delete, and complete functionality. Includes category-based filters for better organization. Fully responsive and showcases clean, reusable code with React hooks. Technologies: React, Tailwind CSS, JavaScript and Features: Task management and Category filters",
      previewUrl: "https://todo-278t.vercel.app/",
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
  