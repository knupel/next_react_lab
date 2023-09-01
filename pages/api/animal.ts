// PRISMA + PLANET_SCALE
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
  if(req.method === 'POST') {
    return await create_inquiry(req, res)
  } else {
    return res.status(405).json({message: 'Method not allowed', succes:false})
  }
}

// https://daily.dev/blog/nextjs-with-prisma
// export async function get_static_props() {
//   // Get all foods in the "food" db
//   const elems = await prisma.inquiry.findMany();
//   console.log("elems", elems);

//   return {
//     props: elems,
//   };
// }

async function create_inquiry(req:any, res:any) {
  const body = req.body
  try {
    const newEntry = await prisma.inquiry.create({
      data: {
        name: body.name,
        family: body.family,
        age: body.age,
        mythic: body.mythic,
        select: body.select,
      }
    })
    return res.status(200).json(newEntry, { success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  }
}
