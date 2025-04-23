import GedungCard from "../../components/GedungCard";
import { useGetGedung } from "../../lib/react-query/queries/queries";
import { IGedung } from "../../ts/types";

const ListGedung = () => {
  const { data: gedungData, isPending: getGedungPending } = useGetGedung();

  if (getGedungPending) {
    return <div>Loading Bruh</div>;
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      {(gedungData.gedung as IGedung[]).map((item: IGedung, index: number) => {
        return <GedungCard props={item} key={index} />;
      })}
    </section>
  );
};

export default ListGedung;
