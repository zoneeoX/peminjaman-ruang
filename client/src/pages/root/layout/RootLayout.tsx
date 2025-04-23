import { Outlet, useLocation, useNavigate } from "react-router";
import Sidebar from "../../../components/Sidebar";
import { useAuthContext } from "../../../context/AuthContext";

const RootLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isPending } = useAuthContext();

  // if (!isAuthenticated && isPending == false) {
  //   navigate("/auth/login");
  // }

  const cleanLocation = location.pathname.split("/");

  return (
    <section className="flex flex-1 bg-gray-100 flex-row">
      <Sidebar />
      <div className="flex-1">
        <div className="px-6 flex-row gap-4 text-xl font-semibold capitalize bg-blue-600 text-white h-[4rem] p-2 flex items-center">
          <h1>{cleanLocation[1]}</h1>
          {cleanLocation[2]?.length > 0 && <p>|</p>}
          <h2>{cleanLocation[2]}</h2>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default RootLayout;
