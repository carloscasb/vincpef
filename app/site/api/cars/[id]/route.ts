import { NextRequest, NextResponse } from "next/server";
import {  PrismaClient } from "@prisma/client";
//2 IMPORTAR TABELA (tipo) Car
import type { Car } from "@prisma/client";
import { GiBodyBalance } from "react-icons/gi";
import { Query } from "@vercel/postgres";
//1 CRIA UMA NOVA ESTANCIA DO PRisma
const prisma = new PrismaClient();


//FUNCTION PARA DELETAR


export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
   
    const car = await prisma.car.delete({

        where:{
            id: Number(params.id)
        }
      
    });
    return NextResponse.json(car, {status: 200});
    
}



/** 
// FUCTION PARA EDITAR

export const PATCH = async (request: Request, {params}: {params: {id: string}})=>{
    const body: Car = await request.json();
    const car = await prisma.car.update({

        where:{
            id: Number(params.id)
        },
        data: {
            name: body.name
        }
      
    });
    return NextResponse.json(car, {status: 200});
    
}



/////////////////////////////////////////
export const PATCH = async (request: Request, {params}: {params: {id: string}}, {params1}: {params1: {name: string}}) =>{
    const body: Car = await request.json();
    const car = await prisma.car.update({

        where:{
            id: Number(params.id)
        },
        data: {

            name: body.name
            
            
        
        }
      
    });
    return NextResponse.json(car, {status: 200});
    
}

*/