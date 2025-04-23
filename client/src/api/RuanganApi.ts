import axios from "axios";
import { BASE_URL } from "./Base";
import { IRuangan } from "../ts/types";

export async function getRuangan() {
  try {
    const response = await axios.get(`${BASE_URL}/api/ruangan/getruangan`);
    return response.data;
  } catch (error) {
    console.log("Error");
    throw new Error("Error");
  }
}

export async function getGedungRuangan(params: string) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/ruangan/getruangan/${params}`
    );
    return response.data;
  } catch (error) {
    console.log("Error");
    throw new Error("Error");
  }
}

export async function getSpecificRuangan(params: string) {
  try {
    const response = await axios.get(`${BASE_URL}/api/ruangan/${params}`);
    return response.data;
  } catch (error) {
    console.log("Error");
    throw new Error("Error");
  }
}

export async function createRuangan(data: IRuangan) {
  const { deskripsi, gedungId, nama } = data;

  try {
    const response = await axios.post(
      `${BASE_URL}/api/ruangan/createruangan`,
      {
        nama: nama,
        deskripsi: deskripsi,
        gedungId: gedungId,
      },
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    console.log("Error");
    throw new Error("Error");
  }
}

export async function deleteRuangan(params: string) {
  try {
    const response = await axios.delete(`${BASE_URL}/api/ruangan/${params}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function editRuangan(data: any) {
  const { nama, deskripsi, gedungId, id } = data;
  

  try {
    const response = await axios.put(`${BASE_URL}/api/ruangan/${id}`, {
      nama: nama,
      deskripsi: deskripsi,
      gedungId: gedungId,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
