import dynamic from 'next/dynamic';

const Hero =  dynamic(() => import('../components/hero'));
const Projects = dynamic(() => import('../components/projects'));
const Footer =  dynamic(() => import('../components/footer'));
const Dot = dynamic(() => import('../components/Dots'));
const Contact = dynamic(() => import('../components/contact/contact'));
const Skill =  dynamic(() => import('../components/skill'));

export default async function Home() {
  await new Promise((resolve)=>setTimeout(resolve,2000))
  return (
    <div className="flex items-center flex-col overflow-x-hidden">
      <Hero />
      <Dot />
      <Skill />
      <Dot />
      <Projects />
      <Dot />
      <Contact />
      <Dot />
      <Footer />
    </div>
  );
}






// "use client";
// import React  from 'react';
// import dynamic from 'next/dynamic';

// const Loader = () => (
//   <div className="flex items-center justify-center h-screen">
//     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500 border-opacity-50"></div>
//   </div>
// );
// const Hero =  dynamic(() => import('../components/hero'), { ssr: false ,loading: Loader });
// const Projects = dynamic(() => import('../components/projects'), { ssr: false,loading: Loader });
// const Footer =  dynamic(() => import('../components/footer'), { ssr: false ,loading: Loader});
// const Dot = dynamic(() => import('../components/Dots'), { ssr: false,loading: Loader });
// const Contact = dynamic(() => import('../components/contact/contact'), { ssr: false ,loading: Loader});
// const Skill =  dynamic(() => import('../components/skill'), { ssr: false ,loading: Loader});

  
// export default function Home() {
//   return (
//     <div className="flex items-center flex-col overflow-x-hidden">
//       <Hero />
//       <Dot />
//       <Skill />
//       <Dot />
//       <Projects />
//       <Dot />
//       <Contact />
//       <Dot />
//       <Footer />
//     </div>
//   );
// }