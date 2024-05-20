import Image from 'next/image'

export default function Intro() {
    return (
        <div className="min-w-full pl-32">
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
                <div className="min-w-full flex justify-between ">
                    <div className="w-96"> 
                        <div className="hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-2 py-1">
                            <Image
                                src="/ci-icon.png" 
                                width={16}
                                height={16}
                                alt="Icon for tech stack"
                            />
                            <p className="tracking-tight">Continuous Improvement</p>
                        </div>
                        <div className="h-2" />
                        <div className="hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-2 py-1">
                            <Image
                                src="/product-icon.jpg" 
                                width={16}
                                height={16}
                                alt="Icon for tools"
                            />
                            <p className="tracking-tight" >Product Mindset</p>
                        </div>
                        <div className="h-2" />
                        <div className="hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-2 py-1">
                            <Image
                                src="/design-icon.png" 
                                width={16}
                                height={16}
                                alt="Icon for tools"
                            />
                            <p className="tracking-tight">Design Skills</p>
                        </div>
                        <div className="h-2" />
                        <div className="hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-2 py-1">
                            <Image
                                src="/collab-icon.png" 
                                width={16}
                                height={16}
                                alt="Icon for tools"
                            />
                            <p className="tracking-tight" >Collaboration</p>
                        </div>
                        <div className="h-2" />
                        <div className="hover-shadow transition ease-in-out duration-200 flex space-x-3 items-center bg-transparent rounded-lg px-2 py-1">
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
                    <p 
                    className="ml-20 custom-shadow-2 space-x-3 bg-transparent rounded-lg px-4 py-3"
                    >Kaizen, resonates with me. Aim to build in quality into everything I do. Coding is a rich technical and creative endeavour and I enjoy growing to</p>
                </div>
        </div>
    );
  }
  