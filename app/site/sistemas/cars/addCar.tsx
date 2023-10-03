'use client'

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { POST } from "../../api/cars/route";


//PODERIA SER FUCTION ------- export default function AddPost(){


const AddCar = () => {

    /*AMOS CRIAR UM ESTADO PARA CADA LINHA (item da tabela) - INICIANDO VAZIO
     SE TIVESSE RELACIONAMETO FARIAMOS TAMBEM PARA O ITEM RELACIONADO
     NA TABELA Organ SÒ TEM UM REGISTRO(linha) O (name)
    */
     const [name, setName] = useState ("");
    // POR FIM IMPORTA O UseROUTER E DECLARA
    const router = useRouter()
    /**  CONSTANTE PARA ASSUMIR VALORES QUANDO FOR DIGITADO DIFRENTE
    const handleNameChangeN = (e) => {
        setName(e.target.value);
      };
      */
    
//1CRIAR ESTADO DE  VISIVEL (para trabalhar com modal)
const [isOpen, setIsOpen] = useState(false);

// CONSTANTE PARA CONTROLAR (lidar) COM O MODAL (VISIBILIDADE)
const handleModalV = () => {
    setIsOpen(!isOpen)
}
/*  VAMOS CRIAR A CONSTANTE DE GRAVAÇÃO (handleSubmitC) E COLOCAR(SUBMETER) NA ACÃO DO FORM  (Importar SyntheticEvent  )
    <form onSubmit={handleSubmitC}>
*/
const handleSubmitC = async (event: SyntheticEvent) => {
    event.preventDefault();
    try{
        await fetch('../api/cars', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name}) })
            
        router.refresh()
    } catch (error){
        console.error(error)
    }
        //console.log(name)
    setName (""),
    router.refresh(),
    setIsOpen(false);
     
}

    
    return (

        <div>
       <button className="btn" onClick={handleModalV} >NOVA Carro</button>

<div className={isOpen ? "modal modal-open" : "modal"}>
            
        <div className="modal-box">
                    <h3 className="font-bold text-lg">Add New Carro</h3>
    
                    <form onSubmit={handleSubmitC}>
                        <div className="form-control w-full">
                            <label  className="label font-bold">Nome do carro</label>
                           
                            <input  type="text"
                               value={name}
                             ///3/SE MUDAR DE VALOR
                          onChange = {(e)=>setName(e.target.value) }
                            
                            // onChange = {handleNameChangeN}
                           className="input input-bordered" placeholder="Nome Carro" />
                        </div>
                        <div className="modal action"></div>
                        <button type="button" className="btn"  onClick={ handleModalV}>
                                    Close
                                </button>
    
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                        </form>
                    </div>
              
            </div>
        </div>
    
    
    )
  
}

export default AddCar;