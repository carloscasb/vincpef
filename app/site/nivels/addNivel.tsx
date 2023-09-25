
'use client'

import { useState } from "react";



const AddNivel = () => {

    // CONSTANTE PARA  mudar estado de VISIVEL
    //   const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

     //Lidar com o estado com arrow function (FUNÇÂO DIZ SE CHAMADA - se for visivel fique invisel e vice-verso)
     const handelModal = () => {
        setIsOpen(!isOpen);
    };

// SE MODAL FOR VISIVEL ABRIR EM FORMA DE MODAL_OPEN SE NÂO (:) DEIXA MODAL (sem abrir)
// BOTÂO CONTROLA O ESTADO (ABRE OU NÃO ABRE) - PELA FUNCTION handelModal
    return(
        <div>
            <button className="btn btn-primary" onClick={handelModal}>Add New</button>
            <div className={isOpen ? "modal modal-open" : "modal"}>
            <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Nivel</h3>

<form >
                        <div className="form-control w-full">
                            <label className="label font-bold">title</label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Usuário Nome"
                            />
                        </div>

                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handelModal}>
                                Close
                            </button>

                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>


                        </div>
          </form>


          </div>
            </div>
          
        </div>

    )

}

export default AddNivel;
 