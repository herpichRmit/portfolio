import Image from "next/image";

export default function Box({ src }) {
    return (
        <div className="transition ease-in-out hover:bottom-1 w-16 h-16 flex justify-center items-center align-center self-center rounded-xl bg-white relative right-8 custom-shadow-2">
            <div className="justify-center items-center w-11" >
                <Image
                    src={ src }
                    alt="Memoji Icon"
                />
            </div>
        </div>
    );
  }