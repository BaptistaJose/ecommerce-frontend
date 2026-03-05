import { inputRegister } from "@/app/register/types";

export interface RegisterResponse {
  message: string;
}

export async function registerUser(data: inputRegister): Promise<RegisterResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signUp`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }

  return result;
}