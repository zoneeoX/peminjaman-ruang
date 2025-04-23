import { MdAdminPanelSettings } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import { FaUser } from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useDeleteUser } from "../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";
import { useState } from "react";
import UserEditModal from "./UserEditModal";

const UserCard = ({ user }) => {
  const { email } = useAuthContext();
  const { mutateAsync: deleteUser } = useDeleteUser();
  const [isModal, setIsModal] = useState<boolean>(false);


  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId);
      toast.success("Akun Telah didelete");
    } catch (error) {
      console.log(error);
    }
  };

  const isCurrentUser = user.email === email;

  return (
    <div
      key={user.id}
      className="bg-white p-6 border-purple-700 border-l-8 flex flex-col gap-3 shadow-md"
    >
      {isModal && <UserEditModal user={user} setIsModal={setIsModal} />}

      <h3 className="text-lg font-bold text-black truncate">
        {user.email}
        {isCurrentUser && (
          <span className="text-sm font-normal text-purple-700">
            {" "}
            (akun anda)
          </span>
        )}
      </h3>

      <span
        className={`text-xs px-2 py-1 w-fit rounded-full text-white font-semibold flex items-center gap-1 ${
          user.role === "ADMIN" ? "bg-red-600" : "bg-blue-600"
        }`}
      >
        {user.role === "ADMIN" ? <MdAdminPanelSettings /> : <FaUser />}
        {user.role}
      </span>

      <p className="text-xs text-gray-400 flex items-center gap-1">
        <HiIdentification />
        <span className="truncate">{user.id}</span>
      </p>

      <div className="flex justify-end gap-2 pt-2 mt-auto">
        <button
          onClick={() => setIsModal((prevState) => !prevState)}
          className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
        >
          <FiEdit />
          Edit
        </button>
        {!isCurrentUser && (
          <button
            onClick={() => handleDelete(user.id)}
            className="text-red-600 text-sm flex items-center gap-1 hover:underline"
          >
            <FiTrash />
            Hapus
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
