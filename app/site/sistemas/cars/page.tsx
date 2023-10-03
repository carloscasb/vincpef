import AddCar from "./addCar";
import Deletecar from "./deleteCar";

import { PrismaClient } from '@prisma/client'
import Updatecar from "./updateCar";
const prisma = new PrismaClient()

//FAZ A BUSCA NO BANCO DE DADOS NA TABELA Car
const getCars = async () => {
    const res = await prisma.car.findMany({
      select: {
        id: true,
        name: true,
  
      }
    });
    return res;
  }


 export default async function Cars(){
// INSTANCEI NA VARIAVEL cars A BUSCA
    const Cars = await getCars();

    //console.log(Cars)  MOSTRA UM ARRAW VAZIA POIS NÂO TEM ITEM


    return (
        <div className="flex bg-gray-700  h-screen">
             
        <div className=" w-screen px-8 py-2 bg-white">

            
        <div className="mb-2" /*2 QUANDO CRIAR A FUNÇÃO AddCar (bottun)*/>
                <AddCar/>
            </div>
            <table className=" table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th className=" text-center">Ação</th>
                    </tr>
                </thead>
                <tbody>
                  {Cars.map((car, index) => (
                    <tr key={car.id}>
                        <td>{index + 1}</td>
                        <td>{car.name}</td>

                        <td className="flex justify-center space-x-1">
                           <Updatecar car={car} />
                           <Deletecar car={car} />
                              </td>
                    </tr>
                    ))}
                </tbody>
            </table>


            </div>
</div>
    )
    
}

