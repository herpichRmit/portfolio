import { Parallax } from "react-scroll-parallax";

export default function Hero() {
    return (
        <div className="min-w-full flex">
            <div>
                <Parallax speed={0}>
                    <h2 className="text-8xl pb-7 font-bold tracking-tighter bg-gradient-to-t from-gray-300 to-gray-200 inline-block bg-clip-text text-transparent w-max">
                    Problem solver
                    </h2>
                </Parallax>
                <Parallax speed={4}>
                    <h2 className="text-8xl pb-2 font-bold tracking-tighter bg-gradient-to-t from-gray-300 to-gray-200 inline-block bg-clip-text text-transparent w-max">
                    Technologist
                    </h2>
                </Parallax>
                <Parallax speed={8}>
                    <h2 className="text-8xl font-bold tracking-tighter bg-gradient-to-t from-gray-300 to-gray-200 inline-block bg-clip-text text-transparent w-max">
                    Designer
                    </h2>
                </Parallax>
                <Parallax speed={12}>
                    <h2 className="text-8xl font-bold tracking-tighter bg-gradient-to-t from-gray-300 to-gray-200 inline-block bg-clip-text text-transparent w-max">
                    Software engineer
                    </h2>
                </Parallax>
                <h1 className="font-sans text-8xl font-bold tracking-tight leading-normal">
                Hi, I'm Ethan
                </h1>
                <p>
                And I enjoy many things.
                </p>
                <div className="h-44"/>
            </div>
            <div className="self-center pl-20">
                <p>animation</p>
            </div>
        </div>
    );
  }
  
/*
<h2
                className="text-8xl font-bold tracking-tighter bg-gradient-to-t from-gray-300 to-gray-200 inline-block bg-clip-text text-transparent"
                >
                Problem solver <br /> Technologist <br /> Designer <br /> Software engineer
                </h2>
                */