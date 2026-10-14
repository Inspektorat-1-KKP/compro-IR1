import React from 'react';
import { Target, Shield, CheckCircle2, Award, Building2, MapPin } from 'lucide-react';

export default function About() {
  const functions = [
    "Penyusunan Kebijakan Teknis Pengawasan Intern",
    "Penyusunan Rencana Program Pengawasan Intern",
    "Pelaksanaan Pengawasan Intern",
    "Pemantauan Tindak Lanjut Hasil Pengawasan Intern",
    "Pelaporan Hasil Pengawasan Intern",
    "Pengawasan Pelaksanaan Sistem Pengendalian Intern Pemerintah (SPIP)"
  ];

  const priorityPrograms = [
    { num: "01", title: "Pengawasan Program Swasembada Garam Nasional" },
    { num: "02", title: "Pengawasan Program Kampung Nelayan Merah Putih" },
    { num: "03", title: "Pengawasan Ocean Big Data" },
    { num: "04", title: "Pengawasan Kegiatan Laut Untuk Kesejahteraan (LAUTRA)" },
    { num: "05", title: "Pengawasan Tata Kelola & Kinerja Penyaluran Dana Bergulir BLU-LPMUKP" },
    { num: "06", title: "Pengawasan Kegiatan Perluasan Konservasi, Pesisir & Pulau-Pulau Kecil, Penataan Ruang Laut & Pengelolaan Laut SEBASAH" }
  ];

  const ikuStats = [
    { label: "Batas Tertinggi Nilai Temuan LHP BPK atas LK", target: "≤ 0,5" },
    { label: "Implementasi Reformasi Birokrasi", target: "86,5%" },
    { label: "Rekomendasi Dimanfaatkan untuk Perbaikan Kinerja", target: "86%" },
    { label: "Rekomendasi Perbaikan Kebijakan Lingkup Mitra", target: "4" },
    { label: "Nilai Telaah Sejawat", target: "85,5%" },
    { label: "Implementasi SIM Pengawasan", target: "82%" },
    { label: "Tingkat Kepatuhan Pengelolaan Kinerja & Anggaran", target: "100%" }
  ];

  return (
    <section id="tentang" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Dasar Hukum & Tugas Utama */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-sky-900 uppercase">
            Dasar Hukum & Tugas Pokok
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mt-2 tracking-tight">
            Tugas & <span className="font-bold text-slate-950">Fungsi Utama</span>
          </h2>
          <div className="w-12 h-0.5 bg-sky-900 mx-auto mt-4 mb-6"></div>
          <p className="text-xs font-medium text-sky-800 bg-sky-50 py-2 px-4 inline-block rounded-full border border-sky-100">
            Peraturan Menteri Kelautan dan Perikanan Nomor 2 Tahun 2025
          </p>
          <p className="mt-4 text-slate-600 text-sm leading-relaxed font-normal">
            Melaksanakan penyusunan kebijakan teknis dan rencana program, pelaksanaan, pemantauan tindak lanjut hasil, dan pelaporan hasil pengawasan intern pada Setjen, Ditjen PRL, Ditjen PK, Pusdatin, dan Puskajis, serta UPT pada Ditjen PRL, Ditjen PK, dan Pusdatin.
          </p>
        </div>

        {/* 6 Fungsi Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functions.map((fn, idx) => (
            <div key={idx} className="p-6 bg-slate-50/80 border border-slate-200/80 flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-sky-800 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">{fn}</span>
            </div>
          ))}
        </div>

        {/* Program Prioritas (6 Program Utama) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-sky-900 uppercase">Fokus Pengawasan</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">6 Program Prioritas TA 2026</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priorityPrograms.map((prog, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-sky-800 transition">
                <span className="text-4xl font-black text-slate-100 absolute top-2 right-4 group-hover:text-sky-50 transition">
                  {prog.num}
                </span>
                <p className="text-xs font-bold text-slate-900 relative z-10 leading-relaxed pr-6">
                  {prog.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Indikator Kinerja Utama (IKU) */}
        <div className="bg-slate-950 text-white p-8 sm:p-12 border border-slate-900">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase">Akurasi & Standar</span>
            <h3 className="text-2xl font-light text-white mt-1">Indikator Kinerja Utama <span className="font-bold">TA 2026</span></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ikuStats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-slate-900 border border-slate-800 text-center">
                <span className="text-2xl font-black text-sky-400 block mb-1">{stat.target}</span>
                <span className="text-[11px] text-slate-400 leading-snug block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}