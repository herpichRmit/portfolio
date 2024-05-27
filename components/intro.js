import Image from 'next/image'
import React, { useState } from 'react';

export default function Intro() {

    const [traitText, setText] = useState("");

    const traitTextOptions = {
        contImpr : ["/toyota-way.png", 250, "I believe in continuous improvement. Technology is a diverse industry, with an ever evolving technical and creative landscape. I enjoy the process of learning and improving my craft.", "Toyota has also given me an opportunity to frame how I work around continuous improvement, through the Toyota way and the Toyota Production System."],
        prodMind : ["/safepo-badge.png", 150, "My recent experience at Toyota has taught me a lot about product management. Specifically, how to find, measure and incorporate value improvements into a product." , "I’ve recently also completed my SAFe Product Owner / Product Manager course, and actively participate in agile ceremonies at Toyota."],
        desiSkil : ["/design-system.png", 250, "I love to stretch my right brain as well as my left! For every project I do I always use Figma. In fact I try to my apply good visual design to everything I create from websites, to reports, to painting in my free time." , "I’ve recently been working on my own design system within Figma to consolidate my understanding of design fundamentals."],
        Collabor : ["/", 0, "Whilst I’ve only started corporate work recently, I’ve worked 6 customer services jobs across Australia, ranging from supermarkets, to cafes and bottle shops.", "I’m no stranger to working in a team, and I enjoy the process of collaborating with new people."],
        DetaOrie : ["/", 0, "In the work that I do, I enjoy focusing on tasks and being able to get into the details.", "This curiosity helps me understand things from the ground up, and is a part of why I spend much of my time programming and designing."]

    }

    return (
        <div className="max-w-3xl pl-8">
            <p className="font-bold text-xl">
                This is who I am.
            </p>
            <div className="h-4" />
            <p className="leading-normal">
            I am driven problem solver and developer, with exposure to design and product disciplines. For the remainder of 2024, I will be completing my studies in Computer Science (Major. Enterprise Systems Development). I have had the opportunity to develop a great breadth of 10+ projects, involving front-end, back-end, web design, mobile development, database admin, cybersecurity and data science. 
            </p>
            <div className="h-4" />
            <p className="leading-normal">
            Currently working in product at Toyota, I have developed an understanding of business problem solving, product management and working collaboratively in large organisations. As a keen and ambitious learner, I pride myself in my breadth of experience and adaptability, and are excited about pursuing a role as an engineer.
            </p>
            <div className="h-10" />
            <div onMouseLeave={() => setText("")} className="min-w-full flex justify-between ">
                <div className="w-72"> 
                    <div onMouseEnter={() => setText(traitTextOptions.contImpr)} className="max-w-max hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-3 py-1">
                        <Image
                            src="/ci-icon.png" 
                            width={16}
                            height={16}
                            alt="Icon for tech stack"
                        />
                        <p className="tracking-tight">Continuous Improvement</p>
                    </div>
                    <div className="h-2" />
                    <div onMouseEnter={() => setText(traitTextOptions.prodMind)} className="max-w-max hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-3 py-1">
                        <Image
                            src="/product-icon.jpg" 
                            width={16}
                            height={16}
                            alt="Icon for tools"
                        />
                        <p className="tracking-tight" >Product Mindset</p>
                    </div>
                    <div className="h-2" />
                    <div onMouseEnter={() => setText(traitTextOptions.desiSkil)} className="max-w-max hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-3 py-1">
                        <Image
                            src="/design-icon.png" 
                            width={16}
                            height={16}
                            alt="Icon for tools"
                        />
                        <p className="tracking-tight">Design Skills</p>
                    </div>
                    <div className="h-2" />
                    <div onMouseEnter={() => setText(traitTextOptions.Collabor)} className="max-w-max hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-3 py-1">
                        <Image
                            src="/collab-icon.png" 
                            width={16}
                            height={16}
                            alt="Icon for tools"
                        />
                        <p className="tracking-tight" >Collaboration</p>
                    </div>
                    <div className="h-2" />
                    <div onMouseEnter={() => setText(traitTextOptions.DetaOrie)} className="max-w-max hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-3 py-1">
                        <Image
                            src="/detail-icon.png" 
                            width={16}
                            height={16}
                            alt="Icon for tools"
                        />
                        <p className="tracking-tight" >Detail Oriented</p>
                    </div>
                    <div className="h-2" />
                </div>
                <div className="ml-10 flex-1 space-y-3 text-xs flex flex-col h-80">
                    { traitText != "" && traitText[0] != "/" ? 
                        <><Image src={traitText[0]}
                            width={traitText[1]} 
                            height={traitText[1]} 
                            alt="Icon for tools"
                            className='self-center rounded-lg shadow transition-transform duration-500 ease-out hover-enlarged'
                        /><div/></> : <p></p>}
                    <p>{ traitText[2] }</p>
                    <p>{ traitText[3] }</p>
                    
                    
                </div>
            </div>
        </div>
    );
  }
  