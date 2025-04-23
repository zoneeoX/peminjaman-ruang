import { BsEye } from "react-icons/bs";
import { HiIdentification } from "react-icons/hi";
import { FaClock, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import {
  useGetRoomByStatus,
  useVerifyPeminjaman,
} from "../../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";

const VerifikasiPeminjaman = () => {
  const { mutateAsync: getPeminjamanByStatus, data } = useGetRoomByStatus();
  const { mutateAsync: verifyPeminjaman, isSuccess } = useVerifyPeminjaman();

  useEffect(() => {
    getPeminjamanByStatus("PENDING");
  }, [isSuccess]);

  const handleVerify = async ({
    status,
    id,
  }: {
    status: string;
    id: string;
  }) => {
    try {
      const response = await verifyPeminjaman({ status, id });
      toast.success("Success");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data?.data.length == 0 && "Tidak ada request."}
      {data?.data.map((item: any) => (
        <div
          key={item.id}
          className="h-fit bg-white p-6 border-blue-600 border-l-8 flex flex-col gap-3 shadow-md"
        >
          <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
            <FaBuilding />
            <span>
              {item.ruangan?.gedung?.nama || "Gedung tidak diketahui"}
            </span>
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

          <div className="flex justify-end mt-auto gap-2">
            <button
              onClick={() => handleVerify({ id: item.id, status: "APPROVED" })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm flex items-center gap-2 rounded transition"
            >
              Approve
            </button>
            <button
              onClick={() => handleVerify({ id: item.id, status: "REJECTED" })}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm flex items-center gap-2 rounded transition"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerifikasiPeminjaman;
