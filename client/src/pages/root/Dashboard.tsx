import { useAuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const { email } = useAuthContext();

  return (
    <section className="flex flex-col gap-6">
      <div className="h-[6rem] bg-white p-4">
        <h1 className="font-semibold">Selamat datang {email}</h1>
        <p className="mt-4 text-sm text-gray-400">
          Anda masuk sebagai Mahasiswa (S1 Informatika).
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
