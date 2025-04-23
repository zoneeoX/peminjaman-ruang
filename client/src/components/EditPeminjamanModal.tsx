import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEditPeminjaman } from "../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";

const EditPeminjamanModal = ({ setIsModal, item }) => {
  const [formData, setFormData] = useState({
    status: item.status || "PENDING",
    startTime: item.startTime ? new Date(item.startTime) : null,
    endTime: item.endTime ? new Date(item.endTime) : null,
    id: item.id,
  });

  const { mutateAsync: editPeminjaman } = useEditPeminjaman();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await editPeminjaman(formData);
      toast.success("Sukses edit peminjaman");
      setIsModal(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/20 grid place-items-center z-50">
      <div className="bg-white w-[30rem] h-fit rounded p-6">
        <div>
          <h1 className="font-semibold text-2xl">Edit Peminjaman</h1>
          <p className="text-sm opacity-50">
            Tolong gunakan ini dengan hati-hati!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="bg-gray-200 p-1 h-8 rounded"
              >
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Waktu Mulai</label>
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
                className="p-2 bg-gray-100 rounded w-full"
                placeholderText="Pilih waktu mulai"
              />
            </div>

            <div className="flex flex-col">
              <label>Waktu Selesai</label>
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
                className="p-2 bg-gray-100 rounded w-full"
                placeholderText="Pilih waktu selesai"
              />
            </div>

            <div className="flex flex-row gap-2">
              <button className="text-white bg-blue-600 cursor-pointer hover:bg-blue-700 p-2 rounded w-full mt-4">
                Edit Peminjaman
              </button>
              <button
                type="button"
                onClick={() => setIsModal(false)}
                className="text-white bg-red-600 hover:bg-red-700 p-2 cursor-pointer rounded w-full mt-4"
              >
                Cancel Edit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default EditPeminjamanModal;
