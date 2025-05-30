import { NextRequest } from 'next/server';
import { fetchUsers, saveUser } from '../../utils/actions';

export const GET = async (req: NextRequest) => {
  console.log(req.url);
  console.log(req.nextUrl.searchParams.get('id'));
  
  
    
  const users = await fetchUsers();
  return Response.json({users})
};

export const POST = async (request: Request) => {
  const user = await request.json();
  
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);
  return Response.json({ msg: 'user created' });
};