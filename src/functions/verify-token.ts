import { jwtVerify } from 'jose';

export default async function verifyToken(token: string): Promise<Boolean> {
  if (!token) return false;
  try {
    // await jwtVerify(token, new TextEncoder().encode(''), {
    //   algorithms: ['HS256'],
    // });
    return true;
  } catch (error) {
    return false;
  }
}
