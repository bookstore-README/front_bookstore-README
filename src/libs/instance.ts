import axios from 'axios';
import { getSession } from 'next-auth/react';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (request) => {
  const session = await getSession();
  if (session) {
    request.headers['Authorization'] = `Bearer ${session.accessToken}`;
  }
  return request;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(`error`, error);
  },
);
