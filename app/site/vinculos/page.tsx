'use client'


import Link from "next/link"
import React from "react"


 
import { useRouter } from 'next/navigation'


export default function Suporte() { 
  const router = useRouter()
    return (
      

      <div className="flex bg-gray-400 items-center  justify-center   h-screen ">

       <div className="grid gap-4 grid-cols-2">
          <div> <button type="button" onClick={() => router.push('/site/usuarios')} className="btn btn-primary
 m-2 w-60 ">
            Grupo - Pessoa
          </button></div>
          <div> <button type="button" onClick={() => router.push('/site/organs')} className="btn btn-primary
 m-2 w-60 ">
            Evento -  Pessoa
          </button></div>
          
        </div>

      </div>
  
  )
}