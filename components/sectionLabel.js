export default function SectionLabel({ text = "Label", color = "bg-blue-500", leftOffset = false, rightOffset = false }) {

    const leftOffsetAmount = () => {
        if (leftOffset) {
            return "left-1"
        }
    }

    const rightOffsetAmount = () => {
        if (rightOffset) {
            return "right-10"
        }
    }

    return (
        <div 
            className={"w-max transition-transform duration-500 ease-out hover-enlarged relative bottom-4 custom-shadow border-2 border-white rounded-lg px-3 py-1 text-white -rotate-2 " + color + " " + leftOffsetAmount() + " " + rightOffsetAmount()}
        >
            <p className="font-semibold tracking-tighter">
                { text }
            </p>
        </div>
    );
  }
  