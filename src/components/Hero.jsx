import React from 'react';
import { ArrowRight, ShieldCheck, Award, Building } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-gradient-to-b from-slate-50 via-sky-50/30 to-white text-slate-900 py-20 lg:py-28 overflow-hidden border-b border-slate-200/60">
      
      {/* Background Soft Glow Halus (Tanpa Titik-Titik) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Sisi Kiri: Teks & Informasi Utama */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 text-sky-950 text-xs font-bold uppercase tracking-widest shadow-sm">
              <ShieldCheck className="w-4 h-4 text-sky-800" />
              Inspektorat Jenderal KKP
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.15] tracking-tight">
              Amanah & Akselerasi <br />
              <span className="font-extrabold text-sky-950">Tata Kelola Kelautan</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Inspektorat I bertugas melaksanakan pengawasan intern terhadap pelaksanaan tugas dan fungsi di lingkungan Kementerian Kelautan dan Perikanan guna mewujudkan tata kelola pemerintahan yang akuntabel, transparan, dan berkelanjutan.
            </p>

            {/* Tombol Aksi */}
            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#struktur" 
                className="bg-sky-950 hover:bg-sky-900 text-white font-semibold text-xs px-8 py-4 transition duration-300 uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-sky-950/10 group"
              >
                Struktur Organisasi 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a 
                href="#tentang" 
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-xs px-8 py-4 transition duration-300 uppercase tracking-widest shadow-sm"
              >
                Profil Singkat
              </a>
            </div>

            {/* Sub-Info Stats Khas Web Korporat */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block text-xl font-black text-sky-950">27+</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Auditor JFA</span>
              </div>
              <div>
                <span className="block text-xl font-black text-sky-950">3 Ditjen</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Cakupan Was</span>
              </div>
              <div>
                <span className="block text-xl font-black text-sky-950">100%</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Integritas</span>
              </div>
            </div>

          </div>

          {/* Sisi Kanan: Visual Frame & Badge Melayang */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden relative group bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800" 
                  alt="Sektor Kelautan KKP" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6">
                  <p className="text-xs font-serif italic text-white tracking-wide">
                    "Pengawasan yang Profesional untuk Kelautan dan Perikanan yang Lebih Baik."
                  </p>
                </div>
              </div>
            </div>

            {/* Badge Floating Elegan */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white border border-slate-200 p-4 shadow-xl items-center gap-3">
              <div className="p-2.5 bg-sky-950 text-white">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">Pengawasan Intern</h4>
                <p className="text-[11px] text-slate-500">Kementerian Kelautan & Perikanan</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}