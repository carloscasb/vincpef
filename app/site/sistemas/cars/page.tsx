

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const getCars = async () => {
    const res = await prisma.car.findMany({
      select: {
        id: true,
        name: true,
  
      },
    });
    return res;
  };


 export default async function Cars(){

  //  const cars = await getCars();

    //console.log(cars)


    return (
        <div className="flex bg-gray-700  h-screen">
        <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
         
        <div className=" bg-white">

            
        <div className="mb-2">
                
            </div>
            <table className=" table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>


            </div>
</div>
</div>    )
    
}

