import { BsEye } from "react-icons/bs";
import { HiIdentification } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { useDeleteRuangan } from "../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";
import { useState } from "react";
import EditRuangan from "./EditRuangan";

const RuanganCard = ({
  props,
  gedungData,
}: {
  props: any;
  gedungData: any;
}) => {
  const { mutateAsync: deleteRuangan } = useDeleteRuangan();
  const [isModal, setIsModal] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const url = location.pathname.split("/");
  const pathname = url[url.length - 1];

  const handleDelete = async () => {
    try {
      await deleteRuangan(props.id);
      toast.success("Sukses delete ruangan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-fit bg-white p-6 border-purple-700 border-l-8 flex flex-col gap-3 shadow-md">
      {isModal && <EditRuangan props={props} gedungData={gedungData} setIsModal={setIsModal} />}

      <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm">
        <FaBuilding />
        <span>{props.gedung.nama}</span>
      </div>

      <h2 className="text-xl font-bold text-black">{props.nama}</h2>

      <p className="text-gray-600 text-sm italic">{props.deskripsi}</p>

      <div className="flex flex-col gap-1 mt-2">
        <p className="text-xs text-gray-400 flex items-center gap-1">
          <HiIdentification className="text-blue-600" />
          <span className="truncate overflow-hidden">{props.id}</span>
        </p>
        <p className="text-xs text-gray-400">
          Dibuat pada {new Date(props.created_at).toLocaleDateString()}
        </p>
      </div>

      {pathname === "kelola" ? (
        <div className="flex flex-row gap-2 ml-auto">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 transition cursor-pointer p-1 w-20 text-white rounded"
          >
            Delete
          </button>
          <button
            onClick={() => setIsModal(true)}
            className="bg-blue-600 hover:bg-blue-700 transition cursor-pointer w-20 p-1 text-white rounded"
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="flex justify-end mt-auto">
          <button
            onClick={() => navigate(`${props.id}`)}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 text-sm flex items-center gap-2 rounded-md transition"
          >
            <BsEye />
            Lihat Detail
          </button>
        </div>
      )}
    </div>
  );
};

export default RuanganCard;
