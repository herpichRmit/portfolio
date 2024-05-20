import Image from 'next/image'
import Link from 'next/link';
import mockupURL from '../public/mockphone-zekiwellness.png';

export default function Project({ project }) {

    const acheivementItems = project.acheivements.map(item =>  <li>{item}</li>);  
    const techStackItems = project.techStack.map(item =>  <p>{item}</p>);
    const toolsItems = project.tools.map(item =>  <p>{item}</p>);  

    return (
        <div className="min-w-full flex items-center justify-between pl-32">
            <div className="min-w-min max-w-xl">
                <p className="font-bold text-xl">
                    { project.title }
                </p>
                <div className="h-4" />
                <p className="leading-normal">
                    { project.desc }
                </p>
                <div className="h-4" />
                <p className="leading-normal">
                    Some of my key achievements include:
                </p>
                <ul className="list-disc list-inside">{acheivementItems}</ul>
                <div className="h-10" />
                <div className="flex space-x-3 items-center">
                    <Image
                        src="/techstack-icon.png" 
                        width={16}
                        height={16}
                        alt="Icon for tech stack"
                    />
                    { techStackItems }
                </div>
                <div className="h-4" />
                <div className="flex space-x-3 items-center">
                    <Image
                        src="/tools-icon.png" 
                        width={16}
                        height={16}
                        alt="Icon for tools"
                    />
                    { toolsItems }
                </div>
                <div className="h-4" />
                <div className="flex space-x-3 items-center">
                    <Image
                        src="/github-icon.png" 
                        width={16}
                        height={16}
                        alt="Github Logo"
                    />
                    <Link href={ project.githubURL }>
                        <p className="tracking-tight" >See Github</p>
                    </Link>
                </div>
            </div>
            <div className="w-20 h-20 relative">
                <Image
                    src={ project.mockupURL }
                    alt="Mockup of project"
                    fill
                    className="min-w-min object-contain"
                />
            </div>

        </div>
    );
  }
  