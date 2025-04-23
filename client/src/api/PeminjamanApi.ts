import axios from "axios";
import { BASE_URL } from "./Base";

export async function createPeminjaman(data: any) {
  const { startTime, endTime, ruanganid, catatan } = data;

  try {
    const response = await axios.post(
      `${BASE_URL}/api/peminjaman/createpeminjaman`,
      {
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        ruanganid: ruanganid,
        catatan: catatan,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error");
  }
}

export async function getRoomPeminjaman(params: string) {
  try {
    const response = axios.get(`${BASE_URL}/api/peminjaman/ruang/${params}`);
    return response;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error");
  }
}

export async function getPeminjamanByStatus(status: string) {
  try {
    const response = axios.get(
      `${BASE_URL}/api/peminjaman/peminjamanbystatus/${status}`
    );

    return response;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error");
  }
}

export async function verifyPeminjaman(data: any) {
  const { status, id } = data;

  try {
    const response = axios.put(`${BASE_URL}/api/peminjaman/peminjamanverify`, {
      status: status,
      id: id,
    });
    return response;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error");
  }
}

export async function getPeminjamanByUser() {
  try {
    const response = axios.get(`${BASE_URL}/api/peminjaman/peminjamanbyuser`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error");
  }
}

export async function getAllPeminjaman() {
  try {
    const response = axios.get(`${BASE_URL}/api/peminjaman/all`);
    return response;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error");
  }
}

export async function deletePeminjaman(params: string) {
  try {
    const response = await axios.delete(`${BASE_URL}/api/peminjaman/${params}`);
    return response;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error");
  }
}

export async function editPeminjaman(data: any) {
  const { status, endTime, startTime, id } = data;

  try {
    const response = await axios.put(`${BASE_URL}/api/peminjaman/${id}`, {
      status: status,
      endTime: endTime,
      startTime: startTime,
    });

    return response;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error");
  }
}
