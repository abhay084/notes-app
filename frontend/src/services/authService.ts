// services/authService.ts
import axios from 'axios'

interface AuthResponse {
  _id: string
  username: string
  token: string
}

export const loginService = async (
  username: string,
  password: string,
): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
      {
        username,
        password,
      },
    )
    return response.data
  } catch (error) {
    console.error('Login failed:', error)
    return null
  }
}

export const registerService = async (
  username: string,
  password: string,
): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
      {
        username,
        password,
      },
    )
    return response.data
  } catch (error) {
    console.error('Registration failed:', error)
    return null
  }
}
