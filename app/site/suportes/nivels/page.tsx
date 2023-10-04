import AddNivel from "./addNivel";

export default async function  Nivel () {

    return(
              
  
      <div className="flex bg-gray-700  h-screen">
             
      <div className=" w-screen px-8 py-2 bg-white">
          <div className="mb-2">
   <AddNivel/>
          </div>
          <table className="table w-full ">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th className=" text-center">Ação</th>
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
   
          
    )
}

