import React, { useMemo } from "react";
import { useGetAllPeminjaman } from "../../lib/react-query/queries/queries";
import { Pie, Bar } from "react-chartjs-2";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { isSameDay, isSameWeek, isSameMonth, parseISO } from "date-fns";
import PeminjamanCard from "../../components/PeminjamanCard";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const KelolaPeminjaman = () => {
  const { data, isPending } = useGetAllPeminjaman();

  const handleDownloadCSV = () => {
    if (!data?.data?.length) return;

    const csvData = data.data.map((item: any) => ({
      ID: item.id,
      Email: item.user?.email || "-",
      Ruangan: `"${item.ruangan?.nama || "-"}"`,
      Gedung: `"${item.ruangan?.gedung?.nama || "-"}"`, 
      Status: item.status,
      Catatan: item.catatan || "-",
      Mulai: new Date(item.startTime).toLocaleString(),
      Selesai: new Date(item.endTime).toLocaleString(),
      Dibuat: new Date(item.createdAt).toLocaleString(),
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "data_peminjaman.csv");
  };

  const statusLabels = ["PENDING", "APPROVED", "REJECTED"];
  const statusColors = {
    PENDING: "#fbbf24",
    APPROVED: "#34d399",
    REJECTED: "#f87171",
  };

  const stats = useMemo(() => {
    const now = new Date();
    const all = data?.data || [];

    const statusCount = all.reduce((acc: any, curr: any) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    }, {});

    const daily = all.filter((item: any) =>
      isSameDay(now, parseISO(item.createdAt))
    );
    const weekly = all.filter((item: any) =>
      isSameWeek(now, parseISO(item.createdAt), { weekStartsOn: 1 })
    );
    const monthly = all.filter((item: any) =>
      isSameMonth(now, parseISO(item.createdAt))
    );

    return {
      statusCount,
      daily: daily.length,
      weekly: weekly.length,
      monthly: monthly.length,
    };
  }, [data]);

  const pieData = {
    labels: statusLabels,
    datasets: [
      {
        label: "Status Peminjaman",
        data: statusLabels.map((label) => stats.statusCount?.[label] || 0),
        backgroundColor: statusLabels.map((label) => statusColors[label]),
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Hari Ini", "Minggu Ini", "Bulan Ini"],
    datasets: [
      {
        label: "Jumlah Peminjaman",
        data: [stats.daily, stats.weekly, stats.monthly],
        backgroundColor: "#4ade80",
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Statistik Status Peminjaman</h2>
          <Pie data={pieData} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">
            Peminjaman (Harian, Mingguan, Bulanan)
          </h2>
          <Bar data={barData} />
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadCSV}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded"
        >
          Download Laporan All-Time (CSV)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.data.length == 0 && "Tidak ada request."}
        {data?.data.map((item: any, index: number) => (
          <PeminjamanCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default KelolaPeminjaman;
