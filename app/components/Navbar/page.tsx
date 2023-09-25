import Link from "next/link";
import {HiOutlineArrowsExpand, HiOutlineCubeTransparent, HiOutlineFire, HiOutlineFlag, HiOutlineUserGroup, HiOutlineUsers  } from "react-icons/hi";
import Image from "next/image";
export default function Navbar(){

    return (
        <div className=" bg-slate-400 text-cyan-50  w-40 h-screen float-left">


            <div>
                <Image
                    src="/logoHDC.svg"
                    width={150}
                    height={100}
                    alt="Picture of the author"
                />
            </div>
         
         <ul className={"flex-col justify-between items-center px-2 gap-6"}>
                <li className="rounded-sm">
                    <Link href='/' className="flex items-center p-3 space-x-4 rounded-md">
                    <HiOutlineCubeTransparent size={30}/>
                        <span>Home</span>
                    </Link>
                </li>

                <li className="rounded-sm">
                    <Link href='/suportes' className="flex items-center p-3 space-x-4 rounded-md">
                    <HiOutlineUserGroup size={30}/>
                        <span>Grupo</span>
                    </Link>
                </li>
                  
                <li className="rounded-sm">
                    <Link href='/suportes' className="flex items-center p-3 space-x-4 rounded-md">
                    <HiOutlineFire size={30}/>
                        <span>Evento</span>
                    </Link>
                </li>

                <li className="rounded-sm">
                    <Link href='/suportes' className="flex items-center p-3 space-x-4 rounded-md">
                    <HiOutlineUsers size={30}/>
                        <span>Pessoa</span>
                    </Link>
                </li>

                <li className="rounded-sm">
                    <Link href='/suportes' className="flex items-center p-3 space-x-4 rounded-md">
                    <HiOutlineCubeTransparent size={30}/>
                        <span>Vinculo</span>
                    </Link>
                </li>

                <li className="rounded-sm">
                    <Link href='/suportes' className="flex items-center p-3 space-x-4 rounded-md">

                    <HiOutlineArrowsExpand size={30}/>
                        <span>Suportes</span>
                    </Link>
                </li>
                    </ul>
        </div>
    )
    
}