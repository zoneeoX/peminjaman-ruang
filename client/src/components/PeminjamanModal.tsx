import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCreatePeminjaman } from "../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";

const PeminjamanModal = ({
  ruanganid,
  setIsModal,
}: {
  ruanganid: string;
  setIsModal: any;
}) => {
  const [formData, setFormData] = useState<{
    startTime: Date | null;
    endTime: Date | null;
    catatan: string;
    ruanganid: string;
  }>({
    startTime: null,
    endTime: null,
    catatan: "",
    ruanganid: ruanganid,
  });

  const { mutateAsync: createPeminjaman } = useCreatePeminjaman();

  const today = new Date();
  const isStartToday =
    formData.startTime &&
    formData.startTime.getDate() === today.getDate() &&
    formData.startTime.getMonth() === today.getMonth() &&
    formData.startTime.getFullYear() === today.getFullYear();

  const minSelectableTime = new Date();
  minSelectableTime.setMinutes(
    Math.ceil(minSelectableTime.getMinutes() / 15) * 15
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await createPeminjaman(formData);
      toast.success("Pengajuan telah terkirim");
      setIsModal(false);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/20 grid place-items-center z-50">
      <div className="bg-white w-[30rem] h-fit rounded p-6">
        <div className="mb-4">
          <h1 className="font-semibold text-2xl">Pengajuan Peminjaman</h1>
          <p className="text-sm opacity-50">
            Tolong cek jadwal kosong terlebih dahulu.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Waktu Mulai
              </label>
              <DatePicker
                selected={formData.startTime}
                onChange={(date) =>
                  setFormData((prev) => ({ ...prev, startTime: date }))
                }
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm"
                minDate={today}
                minTime={
                  isStartToday ? minSelectableTime : new Date(0, 0, 0, 0, 0)
                }
                maxTime={new Date(0, 0, 0, 23, 45)}
                className="p-2 bg-gray-100 rounded-lg mt-1 w-full"
                placeholderText="Pilih waktu mulai"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Waktu Selesai
              </label>
              <DatePicker
                selected={formData.endTime}
                onChange={(date) =>
                  setFormData((prev) => ({ ...prev, endTime: date }))
                }
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm"
                minDate={formData.startTime || today}
                minTime={
                  formData.startTime &&
                  formData.endTime &&
                  formData.startTime.toDateString() ===
                    formData.endTime.toDateString()
                    ? formData.startTime
                    : new Date(0, 0, 0, 0, 0)
                }
                maxTime={new Date(0, 0, 0, 23, 45)}
                className="p-2 bg-gray-100 rounded-lg mt-1 w-full"
                placeholderText="Pilih waktu selesai"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Catatan
              </label>
              <textarea
                name="catatan"
                value={formData.catatan}
                onChange={handleInputChange}
                className="bg-gray-200 rounded p-2"
                rows={6}
              />
            </div>

            <div className="flex flex-row gap-2">
              <button className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded w-full mt-2">
                Ajukan Waktu
              </button>
              <button
                type="button"
                onClick={() => setIsModal(false)}
                className="text-white bg-red-600 hover:bg-red-700 p-2 rounded w-full mt-2"
              >
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default PeminjamanModal;
