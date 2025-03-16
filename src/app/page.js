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
    <div className="relative flex items-center flex-col overflow-x-hidden">
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




 