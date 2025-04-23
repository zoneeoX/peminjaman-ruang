export type IRuangan = {
  nama: string;
  deskripsi: string;
  gedungId: string;
};

enum ROLE {
  ADMIN,
  USER,
}

export type IEditUser = {
  email: string;
  role: ROLE;
  id: string;
};

export type IGedung = {
  nama: string;
  id: string;
  Ruangan: IRuangan[];
  created_at: string;
};

export type ILogin = {
  email: string;
  password: string;
};
