import { NextRequest, NextResponse } from "next/server";
import {  PrismaClient } from "@prisma/client";
//2 IMPORTAR TABELA (tipo) Car
import type { Car } from "@prisma/client";
//1 CRIA UMA NOVA ESTANCIA DO PRisma
const prisma = new PrismaClient();


export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
   
    const car = await prisma.car.delete({

        where:{
            id: Number(params.id)
        }
      
    });
    return NextResponse.json(car, {status: 200});
    
}




/** EXISTE ESSA POSSIBILIDADE COM A LIB
 * 
 * 
 import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, {params}){
    const id = params.id;
    
    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post)
}
 */