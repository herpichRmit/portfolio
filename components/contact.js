import Image from "next/image";
import img_profile from '../public/profile-image.png'

export default function Contact({ src }) {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col">
                <p className="font-bold text-xl">
                    Thanks for reading this far.
                </p>
                <div className="h-4" />
                <p className="leading-normal">
                    Feel free to get in touch.
                </p>
                <div className="h-8" />
                <div className="flex space-x-4 items-center">
                    <Image
                        src="/contact-mail.png" 
                        width={16}
                        height={16}
                        alt="Icon for email"
                    />
                    <p>ethanherpich@gmail.com</p>
                </div>
                <div className="h-2" />
                <div className="flex space-x-4 items-center">
                    <Image
                        src="/contact-phone.png" 
                        width={16}
                        height={16}
                        alt="Icon for phone"
                    />
                    <p>0421 429 969</p>
                </div>
                <div className="h-2" />
                <div className="flex space-x-4 items-center">
                    <Image
                        src="/contact-ln.png" 
                        width={16}
                        height={16}
                        alt="Icon for linkedIn"
                    />
                    <a href="https://www.linkedin.com/in/ethan-herpich-1019b6292/">Find me on linkedIn</a>
                </div>
                <div className="h-2" />
                <div className="flex space-x-4 items-center">
                    <Image
                        src="/github-icon.png" 
                        width={16}
                        height={16}
                        alt="Icon for GitHub"
                    />
                    <a href="https://github.com/herpichRmit">GitHub</a>
                </div>
                

            </div>
            <div className="justify-center items-center w-60 custom-shadow-2 " >
                <Image
                    src={ img_profile }
                    alt="Profile Photo"
                    className="rounded-2xl transition-transform duration-500 ease-out hover-enlarged"
                />
            </div>
        </div>
    );
  }