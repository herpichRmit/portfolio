import Project from "@/components/project";
import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import SectionLabel from "@/components/sectionLabel";
import { projectData } from "@/data/projects";

export default function Home() {
  
  const projectsItems = projectData.map(item =>
    <>
      <div className="h-36"/>
      <Project project={ item } />
    </>
  );  
  
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between pl-36 pr-56 py-24 font-sans"
    >
      <Hero />
      <div className="flex min-w-full">
        <Sidebar />
        <div className="min-w-full">
          <div className="h-12"/>
          <SectionLabel />
          <Intro />
          { projectsItems }
          <div className="h-32"/>
        </div>
        
      </div>
      
    </main>
  );
}
