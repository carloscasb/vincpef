//import { IconeCasa } from "../icons"
import Image from "next/image"
import { HiOutlineArrowsExpand, HiOutlineCubeTransparent, HiOutlineFire, HiOutlineKey, HiOutlineLibrary, HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi"
import MenuItem from "./MenuItem"
import { GiArcTriomphe } from "react-icons/gi";

interface MenuLateral {
    titulo: string
    subtitulo: string
        
    }
   
    export default function MenuLateral(){
    
    return(
    <aside className=" float-left">

            <div className="p-5">
                <Image
                    src="/logoHDC.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                                     
                />
            </div>
            <ul>
                <MenuItem url="/" texto="Inicio" icone={<HiOutlineLibrary size={30} />} />
                
                <MenuItem url="/site/eventos" texto="Eventos" icone={<HiOutlineFire size={30}/>} />
                <MenuItem url="/site/pessoas" texto="Pessoas" icone={<HiOutlineUsers size={30}/>} />
                <MenuItem url="/site/grupos" texto="Grupos" icone={<HiOutlineUserGroup size={30} />} />
                <MenuItem url="/site/organs" texto="Orgãos" icone={<GiArcTriomphe size={30} />} />
                <MenuItem url="/site/vinculos" texto="Vinculos" icone={<HiOutlineCubeTransparent size={30}/>} />
                <MenuItem url="/site/suportes" texto="Suporte" icone={<HiOutlineKey size={30}/>} />
               
            </ul>
       
    </aside>
    
    )
    
    }