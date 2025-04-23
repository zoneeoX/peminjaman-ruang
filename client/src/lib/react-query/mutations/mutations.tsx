import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ILogin, IRuangan } from "../../../ts/types";
import {
  deleteUser,
  editUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../../../api/AuthApi";
import {
  createGedung,
  deleteGedung,
  editGedung,
  getGedung,
} from "../../../api/GedungApi";
import {
  createRuangan,
  deleteRuangan,
  editRuangan,
  getGedungRuangan,
  getSpecificRuangan,
} from "../../../api/RuanganApi";
import {
  createPeminjaman,
  deletePeminjaman,
  editPeminjaman,
  getPeminjamanByStatus,
  getRoomPeminjaman,
  verifyPeminjaman,
} from "../../../api/PeminjamanApi";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ILogin) => loginUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_user"],
      });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_user"],
      });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_all_user"],
      });
    },
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => editUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_all_user"],
      });
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ILogin) => registerUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_user"],
      });
    },
  });
};

export const useCreateGedung = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (nama: string) => createGedung(nama),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_gedung"],
      });
    },
  });
};

export const useGetGedung = () => {
  return useMutation({
    mutationFn: () => getGedung(),
  });
};

export const useCreateRuangan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IRuangan) => createRuangan(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_ruangan"],
      });
    },
  });
};

export const useGetGedungRuangan = () => {
  return useMutation({
    mutationFn: (params: string) => getGedungRuangan(params),
  });
};

export const useGetSpecificRuangan = () => {
  return useMutation({
    mutationFn: (params: string) => getSpecificRuangan(params),
  });
};

export const useCreatePeminjaman = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => createPeminjaman(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["peminjaman"],
      });
    },
  });
};

export const useGetRoomPeminjaman = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: string) => getRoomPeminjaman(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["peminjaman"],
      });
    },
  });
};

export const useGetRoomByStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (status: string) => getPeminjamanByStatus(status),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["peminjaman"],
      });
    },
  });
};

export const useVerifyPeminjaman = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => verifyPeminjaman(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["peminjaman"],
      });
    },
  });
};

export const useDeleteGedung = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: string) => deleteGedung(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_gedung"],
      });
    },
  });
};

export const useEditGedung = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ params, nama }: { params: string; nama: string }) =>
      editGedung({ params, nama }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_gedung"],
      });
    },
  });
};

export const useDeleteRuangan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: any) => deleteRuangan(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_ruangan"],
      });
    },
  });
};

export const useEditRuangan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => editRuangan(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get_ruangan"],
      });
    },
  });
};

export const useDeletePeminjaman = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: string) => deletePeminjaman(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["peminjaman"],
      });
    },
  });
};

export const useEditPeminjaman = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => editPeminjaman(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["peminjaman"],
      });
    },
  });
};
