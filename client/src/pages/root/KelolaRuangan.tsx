import { IoCreate } from "react-icons/io5";
import { IGedung, IRuangan } from "../../ts/types";
import {
  useGetAllRuangan,
  useGetGedung,
} from "../../lib/react-query/queries/queries";
import { useState } from "react";
import { useCreateRuangan } from "../../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";
import RuanganCard from "../../components/RuanganCard";

const KelolaRuangan = () => {
  const { data: gedungData, isPending: getGedungPending } = useGetGedung();
  const { mutateAsync: createRuangan } = useCreateRuangan();
  const { data: ruanganData, isPending: ruanganPending } = useGetAllRuangan();

  console.log(ruanganData)

  const [form, setForm] = useState<IRuangan>({
    nama: "",
    gedungId: "",
    deskripsi: "",
  });

  if (getGedungPending || ruanganPending) {
    return <div>Loading Bruh</div>;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createRuangan(form);
      toast.success("Ruangan Terbuat");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-4 mb-8">
          <div className="flex flex-row gap-4 w-full items-center">
            <div className="flex flex-col basis-1/2">
              <label htmlFor="">Nama Ruangan</label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                className="p-1 bg-gray-200 rounded outline-none"
              />
            </div>
            <div className="flex flex-col basis-1/2">
              <label htmlFor="">Gedung Ruangan</label>
              <select
                name="gedungId"
                value={form.gedungId}
                onChange={handleChange}
                className="bg-gray-200 p-1 h-8 rounded"
              >
                <option value={""}></option>
                {(gedungData.gedung as IGedung[]).map(
                  (item: IGedung, index: number) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.nama}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Deskripsi Ruangan</label>
            <textarea
              rows={6}
              name="deskripsi"
              value={form.deskripsi}
              onChange={handleChange}
              className="p-1 bg-gray-200 rounded outline-none"
            />
          </div>

          <button className="place-self-start cursor-pointer bg-blue-600 p-2 text-white rounded flex flex-row gap-2 items-center">
            <i className="text-2xl">
              <IoCreate />
            </i>
            Buat Ruangan
          </button>
        </fieldset>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {ruanganData.ruangan?.map((item, index) => {
          return(
            <RuanganCard props={item} key={index} gedungData={gedungData.gedung} />
          )
        })}
      </div>
    </section>
  );
};

export default KelolaRuangan;
