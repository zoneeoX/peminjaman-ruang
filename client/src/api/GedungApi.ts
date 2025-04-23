import axios from "axios";
import { BASE_URL } from "./Base";

export async function getGedung() {
  try {
    const response = await axios.get(`${BASE_URL}/api/gedung/getgedung`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw Error("Error");
  }
}

export async function createGedung(nama: string) {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/gedung/creategedung`,
      {
        nama: nama,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error membuat blog", error);
    throw new Error("Failed");
  }
}

export async function deleteGedung(params: string) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/gedung/deletegedung/${params}`
    );
    return response;
  } catch (error) {
    console.error("Error membuat blog", error);
    throw new Error("Failed");
  }
}

export async function editGedung({
  nama,
  params,
}: {
  nama: string;
  params: string;
}) {

  try {
    const response = await axios.put(
      `${BASE_URL}/api/gedung/updategedung/${params}`,
      {
        nama: nama,
      }
    );

    return response;
  } catch (error) {
    console.error("Error membuat blog", error);
    throw new Error("Failed");
  }
}
