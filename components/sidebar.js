import Image from 'next/image'
import Box from './box';
import img_memoji from '../public/memoji-cropped.png'
import img_zekiWellness from '../public/zeki-logo.png'
import img_mealBump from '../public/zeki-logo.png'

export default function Sidebar() {
    return (
        <div className="flex flex-col">
            <div className="bg-gradient-to-t from-gray-300 to-gray-200 w-1 h-12 rounded"/>
            <div className="h-4" />
            <Box src={ img_memoji } />
            <div className="h-4" />
            <div className="bg-gradient-to-t from-gray-300 via-gray-100 to-gray-300 w-1 h-[32rem] rounded"/>
            <div className="h-4" />
            <Box src={ img_zekiWellness } />
            <div className="h-4" />
            <div className="bg-gradient-to-t from-gray-300 via-gray-100 to-gray-300 w-1 h-[31rem] rounded"/>
            <div className="h-4" />
            <Box src={ img_mealBump } />
            <div className="h-4" />
            <div className="bg-gradient-to-t from-gray-300 to-gray-200 w-1 h-32 rounded"/>
        </div>
    );
  }
  