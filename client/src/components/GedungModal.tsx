import { toast } from "react-toastify";
import { useEditGedung } from "../lib/react-query/mutations/mutations";
import { useState } from "react";

const GedungModal = ({
  setIsModal,
  nama,
  id,
}: {
  setIsModal: any;
  nama: string;
  id: string;
}) => {
  const { mutateAsync: editGedung } = useEditGedung();
  const [editedName, setEditedName] = useState<string>(nama);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await editGedung({ nama: editedName, params: id });
      toast.success("Edited gedung");
      setIsModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/20 grid place-items-center z-50">
      <div className="bg-white w-[30rem] h-fit rounded p-6">
        <div className="mb-4">
          <h1 className="font-semibold text-2xl">Edit Gedung</h1>
          <p className="text-sm opacity-50">Tolong ganti dengan hati-hati.</p>
        </div>

        <form onSubmit={handleSubmit} action="">
          <fieldset>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="p-1 bg-gray-200 rounded"
              />
            </div>
          </fieldset>
          <div className="flex flex-row gap-2">
            <button className="text-white mx-auto cursor-pointer bg-blue-600 hover:bg-blue-700 p-2 rounded w-full mt-4">
              Edit User
            </button>
            <button
              type="button"
              onClick={() => setIsModal(false)}
              className="text-white mx-auto cursor-pointer bg-red-600 hover:bg-red-700 p-2 rounded w-full mt-4"
            >
              Cancel Edit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GedungModal;
