'use client'


import Link from "next/link"
import React from "react"


 
import { useRouter } from 'next/navigation'


export default function Suporte() { 
  const router = useRouter()
    return (
      

      <div className="flex bg-gray-400 items-center  justify-center   h-screen ">

       <div className="flex-1 px-52 gap-4 grid-cols-2">
          <div> <button type="button" onClick={() => router.push('/site/grupopessoas')} className="btn btn-primary
    m-2 w-60 ">
            Grupo - Pessoa
          </button></div>
          <div> <button type="button" onClick={() => router.push('/site/eventopessoas')} className="btn btn-primary
  m-2 w-60 ">
            Evento -  Pessoa
          </button></div>
          
        </div>

      </div>
  
  )
}