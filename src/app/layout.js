import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";  

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>

        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}


// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
//       </head>
//       <body className={inter.className}>
//         {children}
//         <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
//       </body>
//     </html>
//   );
// }
