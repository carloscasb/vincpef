import AddGrupopessoa from "./addGrupopessoa";


export default function GrupoPessoas(){

    return (
        <div className="flex bg-gray-400    h-screen ">
        <div className=" bg-white  w-screen px-4 py-2 m-2" >
          <div className="mb-2">
   <AddGrupopessoa/>
          </div>
          <table className="table w-full ">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Grupo</th>
                <th className=" text-center">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
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