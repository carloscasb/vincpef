
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Car } from "@prisma/client";
 const prisma = new PrismaClient();

export const POST = async (request: Request) =>{
    const body: Car = await request.json();
    const car = await prisma.car.create({
        data:{
            name: body.name,
       
        }
    });
    return NextResponse.json(car, {status: 201});
}

/**
 * 

 ----------------------------------------

const submitData = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  try {
    const body = { title, content };
    await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    await Router.push('/drafts');
  } catch (error) {
    console.error(error);
  }
};
-----------------------------------



import {  PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();
import prisma from "@/lib/prisma";
import { Car } from "@prisma/client";
import { NextResponse } from "next/server"

export async function POST(request: Request){
    const res = await request.json()
    const {name} = res;
     const result = await prisma.car.create({
        data: {
            name
           
        }
     })

    return NextResponse.json({result})
    
}









import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(request: Request){
    const res = await request.json()
    const {name} = res;
     const result = await prisma.post.create({
        data: {
         
                name
            
        }
     })

    return NextResponse.json({result})
}


*/