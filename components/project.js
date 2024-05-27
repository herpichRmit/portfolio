import Image from 'next/image'
import Link from 'next/link';

export default function Project({ project }) {

    const acheivementItems = project.acheivements.map(item =>  <li>{item}</li>);  
    const techStackItems = project.techStack.map(item =>  <p>{item}</p>);
    const toolsItems = project.tools.map(item =>  <p>{item}</p>);  
    const textSize = () => {
        if (project.mockType == "phone") {
            return "max-w-lg"
        } else if (project.mockType == "computer") {
            return "max-w-md"
        }
    }
    const mockupImage = () => {
        if (project.mockType == "phone") {
            return (
                <div className="relative w-40 h-80 rotate-1">
                    <Image
                        src={ project.mockupURL }
                        alt="Mockup of project"
                        fill
                        className="object-contain transition-transform duration-500 ease-out hover-enlarged"
                    /> 
                </div>
            );
        } else if (project.mockType == "computer") {
            return (
                <div className="relative w-60 h-60">
                    <Image
                        src={ project.mockupURL }
                        alt="Mockup of project"
                        fill
                        className="object-contain transition-transform duration-500 ease-out hover-enlarged"
                    />
                </div>
            );
        } else {
            return (
                <div className="relative w-80 h-60 "></div>
            );
        }
    }

    return (
        <div className="max-w-3xl flex items-start justify-between pl-8 ">
            <div className={"min-w-min " + textSize()}>
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
                <div className="h-8" />
                <div className="flex space-x-3 items-center">
                    <Image
                        src="/techstack-icon.png" 
                        width={16}
                        height={16}
                        alt="Icon for tech stack"
                    />
                    { techStackItems }
                </div>
                <div className="h-2" />
                <div className="flex space-x-3 items-center">
                    <Image
                        src="/tools-icon.png" 
                        width={16}
                        height={16}
                        alt="Icon for tools"
                    />
                    { toolsItems }
                </div>
                <div className="h-2" />
                { project.githubURL != "#" ?
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
                :
                    <div />
                }
                
            </div>
            { mockupImage() }

        </div>
    );
  }
  