'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

/**1 EM VEZ DE IMPORTAR A TABELA ------import { Car } from "@prisma/client";
/// DECLARAMOS OS TIPOS podemos usar {car.id ou car.name}
*/
type Car = {
    id: number;
    name: string;
}


//2 IMPORTAR A TABELA Car e SETAR O REGISTRO
const Deletecar = ({ car }: { car: Car }) => {

    //2 CRIAR ESTADO DE  VISIVEL (para trabalhar com modal)
   const [isOpen, setIsOpen] = useState(false);
  
    //3 CONTROLAR (lidar) COM O MODAL (VISIBILIDADE)
   const handleModalV = () => {
       setIsOpen(!isOpen);
   }
  
  //3 VAMOS EM PAGE.TSX E COLOCAR UM BOTÃO DELETE (importando o componente) E OUTRO DE EDITAR (<td> <Deletecar car={car}/> </td>)
  
  /////4 DECLARANDO A ROTA
  const route = useRouter();
  
  
   ////5 VAMOS FAZER UMA FUCTION Async PARA DELETAR (lidar) OS DADOS, (ESSA FUNCTION VAI SER CHAMADA LA NO BOTÃO SIM 
   // COM O EVENTO onCLICK (-onClick={()=> handleDeleteC(car.id) }-)
   // XXXXXXXXXXXXXXXXO AXIOS VAI PEGAR A API DELETE PELA ROUTE
  
   const handleDeleteC = async (carId: number) => {
      //setIsLoading
      
       /*5 PAUSAREMOS AQUI PARA FAZER A API
      /////5 NESSE MOMENTO FAREMOS UMA api/facss/[id]/router.ts para fazer o CAMINHO (METODOS  DELETE, UPDATE)
      /////5 DEPOIS DE FAZER A API - IMPORTAR AXIOS (la em cima) E FAZ O CAMINHO PARA O POST (api/facss)
       */
      await fetch (`../api/cars/${car.id}` , {
        method: 'DELETE'
    })
       /////6 TEM UMA IMPORTAÇÃO IMPORTANTE QUE È A DO useRouter NAvigatiom e DECLARAR ACIMA
       /////6 ATUALIZA A ROTA
      route.refresh();
       /////7 FECHA O MODAL
       setIsOpen(false);
  
  }
      
  return (
  
      <div>
          <button className="btn btn-error btn-sm" onClick={handleModalV} >Delete</button>
  
          <div className={isOpen ? "modal modal-open" : "modal"}>
  
              <div className="modal-box">
                  <h3 className="font-bold text-lg">Você quer mesmo EXCLUIR O REGISTRO {car.name}</h3>
  
                  <div className="modal action"></div>
                  <button type="button" className="btn" onClick={handleModalV}>
                      Não
                  </button>
  
                  <button type="button" onClick={() => handleDeleteC(car.id)} className="btn btn-primary">
                      Sim
                  </button>
              </div>
          </div>
      </div>
  
  
  )
  }
  
  
  export default Deletecar;