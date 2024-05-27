import React, { useRef, useEffect, useState } from 'react';
import Project from "@/components/project";
import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import Intro from "@/components/intro";
import Contact from "@/components/contact";
import SectionLabel from "@/components/sectionLabel";
import ProgressBar from '@/components/progressBar';
import { projectData } from "@/data/data";

export default function Home() {
    const [activeProjectIndex, setActiveProjectIndex] = useState(null);
    const projectRefs = useRef([]);
    const prevScrollY = useRef(0);

    const createObserver = (rootMargin, setIndex) => {
        return new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = projectRefs.current.indexOf(entry.target);
                        setIndex(index);
                    }
                });
            },
            {
                root: null, // Relative to the viewport
                rootMargin: rootMargin,
                threshold: 0, // Trigger as soon as it hits the margin
            }
        );
    };

    useEffect(() => {
        const downObserver = createObserver('-60% 0px -40% 0px', (index) => {
            setActiveProjectIndex(index);
        });

        const upObserver = createObserver('-40% 0px -60% 0px', (index) => {
            setActiveProjectIndex(index);
        });

        projectRefs.current.forEach((project) => {
            if (project) {
                downObserver.observe(project);
                upObserver.observe(project);
            }
        });

        return () => {
            projectRefs.current.forEach((project) => {
                if (project) {
                    downObserver.unobserve(project);
                    upObserver.unobserve(project);
                }
            });
        };
    }, []);

    const projectsItems = projectData.map((item, index) => (
        <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`transition-transform duration-200 ease-in ${activeProjectIndex === index ? 'scale-[1.008]' : ''}`}
        >
            <Project project={item} />
            <div className="h-40" />
        </div>
    ));

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pl-72 pr-72 font-sans">
            <Hero />

            <ProgressBar />
            <div className="flex min-w-full">
                <Sidebar />
                <div className="min-w-full">
                    <div className="h-12" />
                    <SectionLabel text="About" color="bg-blue-500" leftOffset={true} />
                    <Intro />
                    <div className="h-40" />
                    <SectionLabel text="Projects" color="bg-green-500" leftOffset={true} />
                    {projectsItems}
                    <div className="h-22" />
                </div>
            </div>
            <div className="min-w-full">
                <SectionLabel text="Contact" color="bg-indigo-500" rightOffset={true} />
                <Contact />
                <div className="h-44" />
            </div>
        </main>
    );
}
