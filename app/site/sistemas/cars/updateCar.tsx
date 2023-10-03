
'use client'
import { SyntheticEvent, useState } from "react";
/////5
//import axios from "axios";
/////6
import { useRouter } from "next/navigation";

///1 EM VEZ DE IMPORTAR A TABELA ------import { Car } from "@prisma/client";
///1 DECLARAMOS OS TIPOS --- Já podemos usar {car.id ou car.name}
//import type { Car } from "@prisma/client";

type Car = {
    id: number;
    name: string;
}



const Updatecar =  ({ car }: { car: Car }) => {

     //2 CRIAR ESTADO DE  VISIVEL (para trabalhar com modal)
 const [isOpen, setIsOpen] = useState(false);

 //3 CRIAR ESTADO (inicailmente com o campo a mudar) PREPARANDO PARA EDITAR
 //3 SE TIVESSE RELACIONAMETO FARIAMOS TAMBEM PARA O ITEM RELACIONADO
 //3 NA TABELA Car SÒ TEM UM REGISTRO(linha) O (name), se tivesse mais fariamos
 const [name, setName] = useState(car.name);

//4 DECLARANDO A ROTA
const router = useRouter();

 //5 CONTROLAR (lidar) COM O MODAL (VISIBILIDADE)
 const handleModalV = () => {
     setIsOpen(!isOpen);
 }

 ////4 VAMOS FAZER UMA FUCTION Async PARA EDITAR (lidar) OS DADOS, (ESSA FUNCTION VAI SER CHAMADA LA NO FORM 
 // COM O EVENTO onSubmit)

 const handleUpadeUC = async (e: SyntheticEvent) => {
    e.preventDefault();
     /////5 PAUSAREMOS AQUI PARA FAZER A API
    /////5 NESSE MOMENTO FAREMOS UMA api/cars/[id]/router.ts para fazer o CAMINHO (METODOS UPDATE, DELETE, )
    /////5 IMPORTAR AXIOS (la em cima) E FAZ O CAMINHO PARA O POST (api/cars/[id])
    
    await fetch (`../api/cars/${car.id}` , {
        method: 'PATCH'

       
        
    })

     
     /////6 TEM UMA IMPORTAÇÃO IMPORTANTE QUE È A DO useRouter NAvigatiom e DECLARAR ACIMA
     /////6 ATUALIZA A ROTA
     router.refresh();
     /////7 FECHA O MODAL
     setIsOpen(false);

///////8 COMO JA DIZEMOS A FUNÇÂO SERÀ CHAMADA NO EVENTO onSubmit DO FORM

}
    
return (

    <div>
    <button className="btn btn-info btn-sm" onClick={handleModalV} >Editar</button>

<div className={isOpen ? "modal modal-open" : "modal"}>
        
    <div className="modal-box">
                <h3 className="font-bold text-lg">Update Carro {car.name}</h3>
                    
                <form onSubmit={handleUpadeUC}>
                    <div className="form-control w-full">
                        <label className="label font-bold">Editar Carro </label>

                        <input type="text"
                            ///3/SE MUDAR DE VALOR DIGITADO NO INPUT ASSUMA O NOVO

                            value={name}
                            onChange={(e) => setName(e.target.value)}

                            className="input input-bordered" placeholder="Nome Carro" />
                    </div>
                    <div className="modal action"></div>
                    <button type="button" className="btn" onClick={handleModalV}>
                        Close
                    </button>

                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
                </div>
          
        </div>
    </div>


)
}


export default Updatecar;