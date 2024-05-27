
import React, { forwardRef } from 'react';
import Image from 'next/image';


export default function Box({ src, background = "bg-white" }) {
    return (
        <div className={"w-16 h-16 transition-transform duration-500 ease-out hover-enlarged flex justify-center items-center align-center self-center rounded-xl relative right-8 custom-shadow-2 " + background}>
            <div className="justify-center items-center w-11 " >
                <Image
                    src={ src }
                    alt="App Icon"
                />
            </div>
        </div>
    );
}