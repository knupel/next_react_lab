// PRISMA + PLANET_SCALE
import prisma from "@db";


export default async function handler(req:any, res:any) {
  if(req.method === 'POST') {
    return await create_user(req, res)
  } else {
    return res.status(405).json({message: 'Method not allowed', succes:false})
  }
}

async function create_user(req:any, res:any) {
  const body = req.body
  try {
    const newEntry = await prisma.user.create({
      data: {
        first_name: body.first_name,
        family_name: body.family_name,
        email: body.email,
        role: body.role,
        pseudo: body.pseudo,
        password: body.password,
      }
    })
    return res.status(200).json(newEntry, { success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  }
}
