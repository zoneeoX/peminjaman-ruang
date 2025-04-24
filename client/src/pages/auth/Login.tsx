import { untirta__logo } from "../../assets/constant";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { BsGoogle } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ILogin } from "../../ts/types";
import { toast } from "react-toastify";
import { useLogin } from "../../lib/react-query/mutations/mutations";
import { IoPeople } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
import { MdOutlinePerson2 } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();

  const { mutateAsync: loginUser } = useLogin();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [user, setUser] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleNavigate = (params: string) => {
    navigate(params);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isFormEmpty = Object.values(user).some(
      (value) => value === "" || value.length <= 0
    );

    if (isFormEmpty) {
      return toast.error("Tolong isi semua input.");
    }

    try {
      await loginUser(user);
      handleNavigate("/dashboard");
      toast.success("Login berhasil!");
    } catch (error) {
      toast.error("Login gagal.");
      console.error(error);
    }
  };

  return (
    <section className="w-screen h-screen bg-blue-950 grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[30rem] h-[35rem] rounded p-6 flex flex-col justify-between"
      >
        <div className="grid place-items-center gap-2">
          <img src={untirta__logo} className="w-20" />
          <p>Tolong masukkan kredensial anda.</p>
        </div>

        <fieldset className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="untirta@untirta.ac.id"
              className="bg-gray-200 p-1 rounded outline-none"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Password</label>
            <div className="flex flex-row gap-2">
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                className="bg-gray-200 p-1 outline-none rounded basis-full"
                onChange={handleInput}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prevState) => !prevState)}
                className="border-gray-200 border w-10 grid place-items-center p-2 cursor-pointer"
              >
                <i>{showPassword ? <LuEye /> : <LuEyeClosed />}</i>
              </button>
            </div>
          </div>
        </fieldset>

        <div className="flex flex-col gap-4">
          <button className="bg-purple-500 text-white p-2 cursor-pointer">
            Masuk
          </button>
          <span className="mx-auto">atau</span>
          <button onClick={() => handleNavigate('/auth/register')} className="bg-rose-500 cursor-pointer text-white p-2 flex flex-row justify-center items-center gap-4">
            <i className="text-2xl">
              <MdOutlinePerson2   />
            </i>
            Buat Akun
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
