import { Parallax } from "react-scroll-parallax";

export default function Hero() {
    return (
        <div className="min-w-full flex flex-col min-h-screen">
            <div className="flex-1"/>
            <div className="flex-1 flex flex-row justify-between items-center">
                <Parallax speed={ 10 } className="relative top-3">
                    <p className="bg-blue-700 w-32 h-32 rounded-full shadow-md transition-transform duration-500 ease-out hover-enlarged"></p> 
                </Parallax>
                <Parallax speed={ 15 } className="relative top-5">
                <p className="bg-green-700 w-32 h-32 rounded-full shadow-md transition-transform duration-500 ease-out hover-enlarged"></p> 
                </Parallax>
                <Parallax speed={ 10 } className="relative top-4">
                <p className="bg-red-700 w-32 h-32 rounded-full shadow-md transition-transform duration-500 ease-out hover-enlarged"></p> 
                </Parallax>
                <Parallax speed={ 20 } className="relative top-7">
                <p className="bg-pink-700 w-32 h-32 rounded-full shadow-md transition-transform duration-500 ease-out hover-enlarged"></p> 
                </Parallax>
            </div>
            <h1 className="font-sans text-8xl font-bold tracking-tight leading-normal">
            Hi, I'm Ethan
            </h1>
            <p>
            Aspiring technologist and creative.
            </p>
            <div className="h-44"/>
        </div>
    );
  }
  