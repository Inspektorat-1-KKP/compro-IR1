import React from 'react';
import { Target, FileCheck, ShieldAlert } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-sky-900" />,
      title: "Kedudukan Kedinasan",
      desc: "Unsur pengawas intern yang berada di bawah dan bertanggung jawab langsung kepada Inspektur Jenderal Kementerian Kelautan dan Perikanan."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-sky-900" />,
      title: "Tugas & Fungsi Utama",
      desc: "Menyelenggarakan perumusan kebijakan teknis pengawasan, audit kinerja, evaluasi, reviu, serta layanan konsultansi tata kelola."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-sky-900" />,
      title: "Komitmen Integritas",
      desc: "Mendorong perbaikan sistem secara proaktif untuk mencegah penyimpangan dan mengoptimalkan penggunaan anggaran negara."
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-sky-900 uppercase">
            Overview Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mt-2 tracking-tight">
            Tentang <span className="font-bold text-slate-950">Inspektorat I</span>
          </h2>
          <div className="w-12 h-0.5 bg-sky-900 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div key={idx} className="p-8 bg-neutral-50/80 border border-slate-200/80 hover:border-slate-300 transition duration-300">
              <div className="mb-6 p-3 bg-white border border-slate-200 w-fit">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}