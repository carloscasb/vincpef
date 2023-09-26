'use client'


import Link from "next/link"
import React from "react"

 
import { useRouter } from 'next/navigation'

export default function Suporte() { 
  const router = useRouter()
    return (
       <div className="flex bg-gray-400 items-center  justify-center   h-screen ">

       <div className="grid gap-4 grid-cols-2">
          <div> <button type="button" onClick={() => router.push('/')} className="btn btn-primary
  w-40 ">
            Home
          </button></div>

          <div> <button type="button" onClick={() => router.push('/site/organs')} className="btn btn-primary
  w-40 ">
            Organização
          </button></div>

          <div> <button type="button" onClick={() => router.push('/site/sistemas')} className="btn btn-primary
  w-40 ">
            Sistema
          </button></div>

          <div> <button type="button" onClick={() => router.push('/site/faccs')} className="btn btn-primary
  w-40 ">
            Faccs
          </button></div>

          <div> <button type="button" onClick={() => router.push('/site/usuarios')} className="btn btn-primary
  w-40 ">
            Usuários
          </button></div>

          <div> <button type="button" onClick={() => router.push('/site/nivels')} className="btn btn-primary
  w-40 ">
            Niveis
          </button></div>



        </div>

      </div>
  
  )
}