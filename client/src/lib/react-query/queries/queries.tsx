import { useQuery } from "@tanstack/react-query";
import { getAllUser, getUser } from "../../../api/AuthApi";
import { getGedung } from "../../../api/GedungApi";
import { getRuangan } from "../../../api/RuanganApi";
import {
  getAllPeminjaman,
  getPeminjamanByUser,
} from "../../../api/PeminjamanApi";

// ! USERS

export const useGetUser = () => {
  return useQuery({
    queryKey: ["get_user"],
    queryFn: async () => await getUser(),
  });
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["get_all_user"],
    queryFn: async () => await getAllUser(),
  });
};

// ! Gedung
export const useGetGedung = () => {
  return useQuery({
    queryKey: ["get_gedung"],
    queryFn: async () => await getGedung(),
  });
};

// ! Ruangan
export const useGetAllRuangan = () => {
  return useQuery({
    queryKey: ["get_ruangan"],
    queryFn: async () => await getRuangan(),
  });
};

// ! Peminjaman
export const useGetPeminjamanByUser = () => {
  return useQuery({
    queryKey: ["peminjaman"],
    queryFn: async () => await getPeminjamanByUser(),
  });
};

export const useGetAllPeminjaman = () => {
  return useQuery({
    queryKey: ["peminjaman"],
    queryFn: async () => await getAllPeminjaman(),
  });
};
