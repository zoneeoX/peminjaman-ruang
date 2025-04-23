import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useGetGedungRuangan } from "../../lib/react-query/mutations/mutations";
import RuanganCard from "../../components/RuanganCard";

const RuanganGedung = () => {
  const location = useLocation();
  const {
    mutateAsync: getGedungRuangan,
    isPending,
    data,
  } = useGetGedungRuangan();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    getGedungRuangan(id);
  }, [id]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
      {data?.ruangan?.map((item, index) => {
        return <RuanganCard props={item} key={index} />;
      })}

      {data?.ruangan?.length < 1 && "Tidak ada ruangan"}
    </div>
  );
};

export default RuanganGedung;
