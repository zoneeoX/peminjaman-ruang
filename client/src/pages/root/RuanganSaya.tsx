import { FaBuilding, FaClock } from "react-icons/fa6";
import { useGetPeminjamanByUser } from "../../lib/react-query/queries/queries";
import { HiIdentification } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

const RuanganSaya = () => {
  const { data } = useGetPeminjamanByUser();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {data?.data.length == 0 && "Tidak ada request."}
      {data?.data.map((item: any) => (
        <div
          key={item.id}
          className={`h-fit bg-white p-6 ${
            item.status === "APPROVED"
              ? "border-green-600"
              : item.status === "REJECTED"
              ? "border-red-600"
              : "border-blue-600"
          } border-l-8 flex flex-col gap-3 shadow-md`}
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

          <div
            className={`flex justify-end w-fit ml p-2 rounded text-white ml-auto gap-2  ${
              item.status === "APPROVED"
                ? "bg-green-600"
                : item.status === "REJECTED"
                ? "bg-red-600"
                : "bg-blue-600"
            } `}
          >
            <h2>Status Konfirmasi: </h2>
            <span>{item.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RuanganSaya;
