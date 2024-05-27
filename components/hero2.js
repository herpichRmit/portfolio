import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import vector_1 from "../public/v1.png"
import vector_2 from "../public/v2.png"
import vector_3 from "../public/v3.png"
import vector_4 from "../public/v4.png"

export default function Hero2() {
    return (
        <div className="min-w-full flex flex-col min-h-screen">
            <div className="flex-1 bg-black">
                <Parallax speed={15}>
                    <Image
                        src={ vector_4 }
                        alt="Vector 1"
                        className="relative top-[28rem]"
                    />
                </Parallax>
                <Parallax speed={10}>
                    <Image
                        src={ vector_3 }
                        alt="Vector 2"
                        className="relative top-[15rem]"
                    />
                </Parallax>
                <Parallax speed={5}>
                    <Image
                        src={ vector_2 }
                        alt="Vector 3"
                        className="relative top-[5rem]"
                    />
                </Parallax>
                <Parallax speed={0}>
                    <Image
                        src={ vector_1 }
                        alt="Vector 4"
                        className="relative "
                    />
                </Parallax>
            </div>
            <div className="h-10" />
            <h1 className="font-sans text-8xl font-bold tracking-tight leading-normal">
            Hi, I'm Ethan
            </h1>
            <p>
            And I enjoy many things.
            </p>
            <div className="h-44"/>
        </div>
    );
  }
  