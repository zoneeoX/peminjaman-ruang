import React, { useState } from "react";
import { IGedung } from "../ts/types";
import { useEditRuangan } from "../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";

const EditRuangan = ({
  props,
  gedungData,
  setIsModal,
}: {
  props: any;
  gedungData: any;
  setIsModal: any;
}) => {
  const [data, setData] = useState<any>({
    nama: props.nama,
    deskripsi: props.deskripsi,
    gedungId: props.gedungId,
    id: props.id,
  });

  const { mutateAsync: editRuangan } = useEditRuangan();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await editRuangan(data);
      toast.success("Ruangan telah di edit");
      setIsModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/20 grid place-items-center">
      <div className="bg-white w-[30rem] h-fit rounded p-6">
        <div>
          <h1 className="font-semibold text-2xl">Edit Ruangan</h1>
          <p className="text-sm opacity-50">
            Tolong gunakan ini dengan hati-hati!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                name="nama"
                value={data.nama}
                onChange={handleChange}
                className="p-1 bg-gray-200 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="gedungId">Gedung Ruangan</label>
              <select
                name="gedungId"
                value={data.gedungId}
                onChange={handleChange}
                className="bg-gray-200 p-1 h-8 rounded"
              >
                <option value="">Pilih gedung</option>
                {(gedungData as IGedung[])?.map(
                  (item: IGedung, index: number) => (
                    <option value={item.id} key={index}>
                      {item.nama}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="deskripsi">Deskripsi Ruangan</label>
              <textarea
                name="deskripsi"
                value={data.deskripsi}
                onChange={handleChange}
                rows={3}
                className="p-1 bg-gray-200 rounded"
              />
            </div>

            <div className="flex flex-row gap-2">
              <button className="text-white mx-auto cursor-pointer bg-blue-600 hover:bg-blue-700 p-2 rounded w-full mt-4">
                Edit Ruangan
              </button>
              <button
                onClick={() => setIsModal(false)}
                type="button"
                className="text-white mx-auto cursor-pointer bg-red-600 hover:bg-red-700 p-2 rounded w-full mt-4"
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

export default EditRuangan;
