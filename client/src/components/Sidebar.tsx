import { FaClock, FaDoorClosed } from "react-icons/fa";
import { untirta__logo } from "../assets/constant";
import { RiDoorOpenFill, RiListCheck3 } from "react-icons/ri";
import { BiBuildings, BiHistory, BiLogOut } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router";
import { MdEditCalendar } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoBook } from "react-icons/io5";
import { useAuthContext } from "../context/AuthContext";
import { useLogout } from "../lib/react-query/mutations/mutations";

const Sidebar = () => {
  const navigate = useNavigate();
  const { mutateAsync: logoutUser } = useLogout();

  const { email, role } = useAuthContext();

  const handleNavigate = (params: string) => {
    navigate(params);
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/auth/login");
  };

  return (
    <aside className="left-0 sticky top-0 h-screen min-w-[15rem] bg-white flex flex-col p-6 items-center justify-between">
      <div>
        <div className="grid place-items-center">
          <img src={untirta__logo} className="w-10 lg:w-16" alt="" />
          <p className="text-sm text-purple-700 font-semibold">
            Untirta Peminjaman Ruang
          </p>
        </div>

        <div className="w-full p-2 flex flex-col mt-2 lg:mt-6 gap-4 2xl:gap-6">
          <div
            onClick={() => handleNavigate("/dashboard")}
            className="w-full text-gray-400 flex flex-row gap-2 items-center font-semibold cursor-pointer"
          >
            <i className="lg:text-2xl text-sm">
              <BsPerson />
            </i>
            <span className="text-sm font-light">Dashboard</span>
          </div>
          <div
            onClick={() => handleNavigate("/ruangan/saya")}
            className="w-full text-gray-400 flex flex-row gap-2 items-center font-semibold cursor-pointer"
          >
            <i className="lg:text-2xl text-sm">
              <RiDoorOpenFill />
            </i>
            <span className="text-sm font-light">Ruang Saya</span>
          </div>
          <div
            onClick={() => handleNavigate("/gedung")}
            className="w-full text-gray-400 flex flex-row gap-2 items-center font-semibold cursor-pointer"
          >
            <i className="lg:text-2xl text-sm">
              <FaDoorClosed />
            </i>
            <span className="text-sm font-light">Pinjam Ruang</span>
          </div>

          {role === "ADMIN" && (
            <>
              <h2>Admin Menu</h2>
              <div
                onClick={() => handleNavigate("admin/gedung/kelola")}
                className="w-full text-gray-400 flex flex-row gap-2 items-center font-semibold cursor-pointer"
              >
                <i className="lg:text-2xl text-sm">
                  <BiBuildings />
                </i>
                <span className="text-sm font-light">Kelola Gedung</span>
              </div>

              <div
                onClick={() => handleNavigate("admin/ruangan/kelola")}
                className="w-full text-gray-400 flex flex-row gap-2 items-center font-semibold cursor-pointer"
              >
                <i className="lg:text-2xl text-sm">
                  <MdEditCalendar />
                </i>
                <span className="text-sm font-light">Kelola Ruangan</span>
              </div>

              <div
                onClick={() => handleNavigate("admin/users/kelola")}
                className="w-full text-gray-400 flex flex-row gap-2 items-center font-semibold cursor-pointer"
              >
                <i className="lg:text-2xl text-sm">
                  <GoPeople />
                </i>
                <span className="text-sm font-light">Kelola Users</span>
              </div>

              <div
                onClick={() => handleNavigate("admin/peminjaman/kelola")}
                className="w-full text-gray-400 flex flex-row gap-2 items-center font-semibold cursor-pointer"
              >
                <i className="lg:text-2xl text-sm">
                  <IoBook />
                </i>
                <span className="text-sm font-light">
                  Kelola & Laporan Peminjaman
                </span>
              </div>
              <div
                onClick={() => handleNavigate("admin/peminjaman/verifikasi")}
                className="w-full text-gray-400 flex flex-row gap-2 items-center font-semibold cursor-pointer"
              >
                <i className="lg:text-2xl text-sm">
                  <RiListCheck3 />
                </i>
                <span className="text-sm font-light">
                  Verifikasi Peminjaman
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="place-self-start flex flex-row items-center gap-2">
        <div className="bg-gray-200 w-10 h-10 rounded-full grid place-items-center">
          <i>
            <BsPerson />
          </i>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{email}</span>
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm text-gray-400">{role}</span>
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-white rounded bg-red-600 hover:bg-red-700 transition p-1 cursor-pointer flex flex-row justify-center items-center gap-2"
            >
              <i className="">
                <BiLogOut />
              </i>
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
