import { request } from '../apiService';

export async function login(email: string, password: string) {
  const response = await request.post('/auth/sign_in', {
    email,
    password,
  });

  return response.data;
}