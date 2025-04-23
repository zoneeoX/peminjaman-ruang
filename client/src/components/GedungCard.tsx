import { IGedung } from "../ts/types";
import { HiIdentification } from "react-icons/hi";
import { MdMeetingRoom } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { useDeleteGedung } from "../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";
import { useState } from "react";
import GedungModal from "./GedungModal";

const GedungCard = ({ props }: { props: IGedung }) => {
  const { mutateAsync: deleteGedung } = useDeleteGedung();
  const [isModal, setIsModal] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const split = location.pathname.split("/");
  const pathname = split[split.length - 1];

  const handleDelete = async () => {
    try {
      await deleteGedung(props.id);
      toast.success("Delete sukses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-fit bg-white p-6 border-blue-700 border-l-8 flex flex-col gap-3 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-bold text-black">{props.nama}</h2>
      </div>

      {isModal && <GedungModal setIsModal={setIsModal} nama={props.nama} id={props.id} />}

      <p className="text-xs text-gray-400">
        Dibuat pada {new Date(props.created_at).toLocaleDateString()}
      </p>

      <div className="flex justify-between items-center mt-2">
        <p className="text-xs text-gray-400 flex items-center gap-1">
          <HiIdentification className="text-blue-600" />
          <span className="truncate overflow-hidden">{props.id}</span>
        </p>

        <p className="text-sm text-blue-700 font-medium flex items-center gap-1">
          <MdMeetingRoom />
          {props.Ruangan.length} Ruangan
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
        <div
          onClick={() => navigate(`/ruangan/${props.id}`)}
          className="flex justify-end mt-auto"
        >
          <button className="bg-blue-700 cursor-pointer flex flex-row gap-2 items-center hover:bg-blue-800 text-white px-4 py-2 text-sm rounded-md transition">
            <i className="text-lg">
              <MdMeetingRoom />
            </i>
            Lihat Semua Ruangan
          </button>
        </div>
      )}
    </div>
  );
};

export default GedungCard;
