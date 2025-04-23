import axios from "axios";
import { IEditUser, ILogin } from "../ts/types";
import { BASE_URL } from "./Base";

export async function loginUser(data: ILogin) {
  const { email, password } = data;

  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    console.error("Err: ", error);
    throw new Error("Error");
  }
}

export async function editUser(data: IEditUser) {
  const { email, role, id } = data;

  try {
    const response = await axios.put(`${BASE_URL}/api/auth/user/${id}` , {
      email: email,
      role: role,
    });
    return response.data;
  } catch (error) {
    console.error("Err: ", error);
    throw new Error("Error");
  }
}

export async function registerUser(data: ILogin) {
  const { email, password } = data;

  try {
    const response = await axios.post(`${BASE_URL}/api/auth/register`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    console.error("Err: ", error);
    throw new Error("Error");
  }
}

export async function getUser() {
  try {
    const response = await axios.get(`${BASE_URL}/api/auth/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw Error("Error");
  }
}

export async function deleteUser(id: string) {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/user/${id}`);
    return response;
  } catch (error) {
    throw Error("Error");
  }
}

export async function logoutUser() {
  try {
    return await axios.post(
      `${BASE_URL}/api/auth/logout`,
      {},
      { withCredentials: true }
    );
  } catch (error) {
    console.error("Err: ", error);
    throw error;
  }
}

export async function getAllUser() {
  try {
    const response = await axios.get(`${BASE_URL}/api/auth/users`);
    return response.data;
  } catch (error) {
    console.error("Err: ", error);
    throw new Error("Error");
  }
}
