import React, { useState } from "react";
import GedungCard from "../../components/GedungCard";
import { IoCreate } from "react-icons/io5";
import { useCreateGedung } from "../../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import { useGetGedung } from "../../lib/react-query/queries/queries";
import { IGedung } from "../../ts/types";


const KelolaGedung = () => {
  const { mutateAsync: createGedung, isPending } = useCreateGedung();
  const { data: gedungData, isPending: getGedungPending } = useGetGedung();
  const [name, setName] = useState<string>("");

  if (getGedungPending) {
    return <div>Loading Bruh</div>;
  }


  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createGedung(name);
      setName("");
      toast.success("Success");
    } catch (error) {
      toast.error("Error Men");
      console.log(error);
    }
  };

  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col">
            <label htmlFor="">Nama Gedung</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-1 bg-gray-300 rounded outline-none"
            />
          </div>
          <button className="place-self-start cursor-pointer bg-blue-600 p-2 text-white rounded flex flex-row gap-2 items-center">
            {isPending ? (
              <i className="animate-spin">
                <CgSpinner />
              </i>
            ) : (
              <>
                <i className="text-2xl">
                  <IoCreate />
                </i>
                Buat Gedung
              </>
            )}
          </button>
        </fieldset>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {(gedungData.gedung as IGedung[]).map(
          (item: IGedung, index: number) => {
            return <GedungCard props={item} key={index} />;
          }
        )}
      </div>
    </section>
  );
};

export default KelolaGedung;
