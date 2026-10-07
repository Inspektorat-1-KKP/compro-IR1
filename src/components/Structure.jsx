import React, { useState } from 'react';
import { ChevronRight, X, Briefcase, Award, Shield, FileText, UserCheck } from 'lucide-react';

export default function Structure() {
  // Tab Aktif ala Emtek: "all" | "pimpinan" | "katimja" | "jfa"
  const [activeTab, setActiveTab] = useState('pimpinan');
  const [selectedPerson, setSelectedPerson] = useState(null);

  // 1. Data Pimpinan Utama
  const topManagement = [
    {
      name: "Dr. Abdul Mubin, ST., SH., MH., CSSL",
      nip: "197101131996031001",
      title: "Inspektur I",
      category: "Pimpinan Utama",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
      bio: "Memimpin dan mengoordinasikan seluruh pelaksanaan pengawasan intern di lingkungan Kementerian Kelautan dan Perikanan guna menjamin akuntabilitas, transparansi, serta efektivitas kinerja."
    },
    {
      name: "Ir. Iriawanti",
      nip: "-",
      title: "Koordinator Pengawasan",
      category: "Pimpinan Utama",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
      bio: "Bertanggung jawab mengoordinasikan secara teknis pelaksanaan pengawasan intern serta evaluasi pengawasan lintas sektor."
    },
    {
      name: "Tri Yuliastini, S.Pi.",
      nip: "-",
      title: "Kepala Sub Bagian Tata Usaha",
      category: "Pimpinan Utama",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
      bio: "Mengelola urusan persuratan, kepegawaian, keuangan, serta administrasi operasional dan BMN di lingkungan Inspektorat I."
    }
  ];

  // 2. Data Ketua Tim Kerja (Katimja)
  const katimjaList = [
    {
      name: "Firman Fachrudin Firmansyah, S.Pi., M.Sc",
      title: "Katimja Was Sekretariat Jenderal",
      vice: "Lestari Tirtohening, S.E. (Wakil Timja Was)",
      category: "Ketua Tim Kerja",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500",
      subUnits: [
        "Biro Umum & Biro PBJ (Lestari Tirtohening, S.E. & Veronika Eri F, S.Pi)",
        "Biro SDMAO & Biro Hukum (Muhamad Widodo, SH, MH)",
        "Biro Perencanaan & Biro HKLN (Tutut Sumarmi, S.Sos & Ari Setiobudi)",
        "Biro Keuangan, BMN & LPMUKP (Puji Astutuik, S.Pi & Hari Risnandar, A.Md.)",
        "Pusdatin & Pusjakstra (Kukuh Priambodo, S.Kom & Wildan Faturizqi, A.Md)"
      ]
    },
    {
      name: "Windy Skandiasari Yudanti, S.T., M.Ak",
      title: "Katimja Was Ditjen Penataan Ruang Laut",
      vice: "Haris Budianto, S.E (Wakil Timja Was)",
      category: "Ketua Tim Kerja",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500",
      subUnits: [
        "Sekretariat & Dit. Perencanaan Ruang Perairan (Maharami, S.E & Dody Alamsyah A.S.H, S.Pi)",
        "Dit. Pembinaan Penataan Ruang Laut & Pengendalian (Dr. Wirata, S.E., M.E & Dianita Indah Prahmila, S.Pi, MSM)",
        "Dit. Pemanfaatan Ruang Pesisir & Pulau Kecil (Ahmad N Ilham, S.PKP & Devinda Arsandi, S.Pi)"
      ]
    },
    {
      name: "Taufiqur Rahman NG, S.Pi.",
      title: "Katimja Was Ditjen Pengelolaan Kelautan",
      vice: "Wakil 1: Tengku Sonya Nirmala Hayati, S.Pi., M.Si. | Wakil 2: Sapnianti, S.Pi., M.M.",
      category: "Ketua Tim Kerja",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
      subUnits: [
        "Sekretariat & Dit. P3K (Tibyan D.M.P, S.Kom & Hanifa Dwi Santi, S.E)",
        "Dit. Konservasi Ekosistem & Spesies (Faisal Reza P, S.E, M.M & M. Rizal A.T.N, S.Pi)",
        "Dit. Jasa Bahari & Sumber Daya Kelautan (Adianto Nugroho, S.E & Tri Nur Utami, S.Pi)"
      ]
    }
  ];

  // 3. Ringkasan JFA (Jabatan Fungsional Auditor)
  const jfaStats = [
    { rank: "Auditor Utama", count: 1 },
    { rank: "Auditor Madya", count: 7 },
    { rank: "Auditor Muda", count: 9 },
    { rank: "Auditor Pertama", count: 8 },
    { rank: "Auditor Terampil", count: 2 },
  ];

  return (
    <section id="struktur" className="py-20 bg-neutral-50/80 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header ala Emtek: Elegan, Bersih, dan Typography Subtiel */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-sky-800 uppercase">
            Management & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mt-2 tracking-tight">
            Organization <span className="font-bold text-sky-950">Structure</span>
          </h2>
          <div className="w-12 h-0.5 bg-sky-800 mx-auto mt-4"></div>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed font-normal">
            Struktur Kepemimpinan dan Tim Kerja Inspektorat I Kementerian Kelautan dan Perikanan TA 2026.
          </p>
        </div>

        {/* Tab Switcher ala Emtek Website */}
        <div className="flex justify-center mb-12 border-b border-slate-200">
          <div className="flex gap-2 sm:gap-8 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('pimpinan')}
              className={`pb-4 px-2 border-b-2 transition duration-200 uppercase tracking-wider ${
                activeTab === 'pimpinan'
                  ? 'border-sky-800 text-sky-950 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Inspektur & Subbag TU
            </button>
            <button
              onClick={() => setActiveTab('katimja')}
              className={`pb-4 px-2 border-b-2 transition duration-200 uppercase tracking-wider ${
                activeTab === 'katimja'
                  ? 'border-sky-800 text-sky-950 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Ketua Tim Kerja (Katimja)
            </button>
            <button
              onClick={() => setActiveTab('jfa')}
              className={`pb-4 px-2 border-b-2 transition duration-200 uppercase tracking-wider ${
                activeTab === 'jfa'
                  ? 'border-sky-800 text-sky-950 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Jabatan Fungsional (JFA)
            </button>
          </div>
        </div>

        {/* TAB 1: PIMPINAN UTAMA */}
        {activeTab === 'pimpinan' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topManagement.map((person, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPerson(person)}
                className="group bg-white rounded-none border border-slate-200/80 p-6 hover:shadow-xl transition duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/5] bg-slate-100 overflow-hidden mb-6 relative">
                    <img 
                      src={person.photo} 
                      alt={person.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider backdrop-blur-sm">
                      {person.category}
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-1">
                    {person.title}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-800 transition">
                    {person.name}
                  </h3>
                  {person.nip !== '-' && (
                    <p className="text-xs text-slate-400 mt-0.5">NIP. {person.nip}</p>
                  )}
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-sky-800">
                  <span>View Profile & Detail</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: KATIMJA (KETUA TIM KERJA) */}
        {activeTab === 'katimja' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {katimjaList.map((team, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPerson(team)}
                className="group bg-white border border-slate-200/80 p-6 hover:shadow-xl transition duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/5] bg-slate-100 overflow-hidden mb-6 relative">
                    <img 
                      src={team.photo} 
                      alt={team.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-1">
                    Katimja
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-800 transition leading-snug">
                    {team.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 mt-2">{team.name}</p>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{team.vice}</p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-sky-800">
                  <span>Lihat Anggota Tim ({team.subUnits.length})</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: STATISTIK JFA */}
        {activeTab === 'jfa' && (
          <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <Award className="w-6 h-6 text-sky-800" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Jabatan Fungsional Auditor (JFA)</h3>
                <p className="text-xs text-slate-500">Komposisi Tenaga Fungsional Pengawasan Inspektorat I</p>
              </div>
            </div>

            <div className="space-y-4">
              {jfaStats.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center p-3.5 bg-slate-50 border border-slate-100 text-sm">
                  <span className="font-semibold text-slate-700">{stat.rank}</span>
                  <span className="font-extrabold text-sky-900 bg-sky-100/70 px-3 py-1 text-xs rounded">
                    {stat.count} Personel
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center text-base font-extrabold text-slate-900">
              <span>Total Keseluruhan JFA</span>
              <span className="text-sky-900 text-lg">27 Auditor</span>
            </div>
          </div>
        )}

      </div>

      {/* MODAL DETAIL ELEGAN ALA EMTEK */}
      {selectedPerson && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-8 border-t-4 border-sky-800 animate-in fade-in duration-200">
            
            <button 
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-32 h-40 bg-slate-100 shrink-0 overflow-hidden shadow-sm">
                <img 
                  src={selectedPerson.photo} 
                  alt={selectedPerson.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 flex-1">
                <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
                  {selectedPerson.title}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {selectedPerson.name}
                </h3>
                {selectedPerson.nip && selectedPerson.nip !== '-' && (
                  <p className="text-xs text-slate-400 font-medium">NIP. {selectedPerson.nip}</p>
                )}
                {selectedPerson.vice && (
                  <p className="text-xs text-sky-900 font-semibold pt-1">{selectedPerson.vice}</p>
                )}
              </div>
            </div>

            {/* Rincian Sub-Unit atau Profil */}
            <div className="mt-6 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedPerson.bio && (
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs mb-2">Profil & Peran Executive:</h4>
                  <p>{selectedPerson.bio}</p>
                </div>
              )}

              {selectedPerson.subUnits && (
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs mb-3">Unit Kerja & Anggota Pengawasan:</h4>
                  <ul className="space-y-2">
                    {selectedPerson.subUnits.map((sub, i) => (
                      <li key={i} className="p-3 bg-slate-50 border-l-2 border-sky-800 text-slate-700 font-medium">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-right">
              <button 
                onClick={() => setSelectedPerson(null)}
                className="bg-slate-900 text-white font-medium text-xs px-6 py-2.5 hover:bg-sky-900 transition uppercase tracking-wider"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}