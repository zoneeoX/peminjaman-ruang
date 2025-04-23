import { useParams } from "react-router";
import {
  useGetRoomPeminjaman,
  useGetSpecificRuangan,
} from "../../lib/react-query/mutations/mutations";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import PeminjamanModal from "../../components/PeminjamanModal";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import idLocale from "date-fns/locale/id";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CustomToolbar = ({ label }: { label: string }) => {
  return (
    <div className="rbc-toolbar flex justify-center mb-2">
      <span className="rbc-toolbar-label text-lg font-semibold text-purple-700">
        {label}
      </span>
    </div>
  );
};

const locales = {
  id: idLocale,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const Ruangan = () => {
  const { ruanganid } = useParams();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [view, setView] = useState<"month" | "week" | "day">("week");

  const {
    mutateAsync: getSpecificRuangan,
    data,
    isPending,
  } = useGetSpecificRuangan();

  const { mutateAsync: getRoomPeminjaman, data: dataPeminjaman } =
    useGetRoomPeminjaman();

  useEffect(() => {
    if (ruanganid) getSpecificRuangan(String(ruanganid));
    getRoomPeminjaman(String(ruanganid));
  }, [ruanganid]);

  if (isPending || !data) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  const { nama, deskripsi, gedung, created_at } = data;


  const events =
    dataPeminjaman?.data.map((item: any) => ({
      id: item.id,
      title: item.user.email || "Peminjaman Ruangan",
      start: new Date(item.startTime),
      end: new Date(item.endTime),
      status: item.status,
    })) || [];

  return (
    <section className="w-full">
      {isModal && <PeminjamanModal ruanganid={ruanganid} setIsModal={setIsModal} />}

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-purple-700">Ruang {nama}</h1>
        <p className="text-gray-500 text-sm mt-1">
          Dibuat pada{" "}
          {new Date(created_at).toLocaleString("id-ID", {
            dateStyle: "long",
            timeStyle: "short",
          })}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <MdDescription className="text-xl text-purple-500 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Deskripsi</h2>
              <p className="text-gray-600">{deskripsi}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-xl text-purple-500 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Gedung</h2>
              <p className="text-gray-600">{gedung?.nama}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-purple-700">
          Jadwal Peminjaman
        </h2>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded font-medium hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-300"
          onClick={() => setIsModal((prevState) => !prevState)}
        >
          Ajukan Peminjaman
        </button>
      </div>

      <div className="h-[500px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          className="p-4"
          defaultView="week"
          view={view}
          components={{ toolbar: CustomToolbar }}
          onView={(newView) => setView(newView)}
          views={["month", "week", "day"]}
          eventPropGetter={(event) => {
            let backgroundColor = "#6D28D9";
            if (event.status === "PENDING") backgroundColor = "#FBBF24";
            if (event.status === "REJECTED") backgroundColor = "#F87171";
            if (event.status === "APPROVED") backgroundColor = "#34D399";
            return { style: { backgroundColor } };
          }}
        />
      </div>
    </section>
  );
};

export default Ruangan;
