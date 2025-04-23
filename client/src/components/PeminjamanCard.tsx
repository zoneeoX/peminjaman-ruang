import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBuilding, FaClock } from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi";
import { useDeletePeminjaman } from "../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";
import EditPeminjamanModal from "./EditPeminjamanModal";

const PeminjamanCard = ({ item }) => {
  const { mutateAsync: deletePeminjaman } = useDeletePeminjaman();
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleDelete = async (params: string) => {
    try {
      await deletePeminjaman(params);
      toast.success("Delete Sukses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={item.id}
      className="h-fit bg-white p-6 border-blue-600 border-l-8 flex flex-col gap-3 shadow-md"
    >
      {isModal && <EditPeminjamanModal setIsModal={setIsModal} item={item} />}

      <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
        <FaBuilding />
        <span>{item.ruangan?.gedung?.nama || "Gedung tidak diketahui"}</span>
      </div>

      <h2 className="text-xl font-bold text-black">
        {item.ruangan?.nama || "Ruangan tidak diketahui"}
      </h2>

      <p className="text-gray-600 text-sm italic">{item.catatan}</p>

      <div className="flex flex-col gap-1 mt-2">
        <p className="text-xs text-gray-400 flex items-center gap-1">
          <HiIdentification className="text-blue-600" />
          <span className="truncate overflow-hidden">{item.id}</span>
        </p>
        <p className="text-xs text-gray-400 flex items-center gap-1">
          <FaCalendarAlt className="text-green-600" />
          {new Date(item.createdAt).toLocaleDateString()}
        </p>
        <p className="text-xs text-gray-400 flex items-center gap-1">
          <FaClock className="text-purple-700" />
          {new Date(item.startTime).toLocaleTimeString()} -{" "}
          {new Date(item.endTime).toLocaleTimeString()}
        </p>
      </div>

      <div className="flex flex-row gap-2 ml-auto">
        <button
          onClick={() => handleDelete(item.id)}
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
    </div>
  );
};

export default PeminjamanCard;
