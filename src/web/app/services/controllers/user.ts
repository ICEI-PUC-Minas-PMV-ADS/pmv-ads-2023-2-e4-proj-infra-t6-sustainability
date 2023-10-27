import axios from 'axios';
axios.defaults.timeout = 30000;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST
});

interface RequestOptions {
  headers: {
    Authorization?: string;
  };
}

export interface ApiResponse {
  status: number;
  data: string;
}

interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginUserPayload {
  email: string;
  password: string;
}

const formatHeader = (token?: string): RequestOptions => {
  let auth = token ? `Bearer ${token}` : undefined;
  return { headers: { Authorization: auth } }
}

const getAllHabits = async (token?: string) => {
  try {
    let options = formatHeader(token);
    const { data } = await instance.get(`/habit/`, options);
    return data
  } catch (error) {
    throw error
  }
}

const deleteHabitById = async (habitId: string, token?: string) => {
  try {
    let options = formatHeader(token);
    const { data } = await instance.delete(`/habit/${habitId}`, options);
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

async function loginUser(payload: LoginUserPayload) {
  try {
    const { data: { token } } = await instance.post<{ token: string }>("/login", payload);
    localStorage.setItem("token", token);
  } catch (error) {
    throw error
  }
}

export { getAllHabits, loginUser };
export type { LoginUserPayload };