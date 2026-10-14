import React, { useState } from 'react';
import { ChevronRight, X, ShieldCheck, FileText, Users, Building2, UserCheck, Award } from 'lucide-react';

// Import foto lokal presisi sesuai isi folder src/assets/
import fotoDianita from "../assets/Dianita.jpg";
import fotoFirdaus from "../assets/Firdaus.jpg";
import fotoFirman from "../assets/Firman.jpeg";
import fotoHari from "../assets/Hari.jpeg";
import fotoHaris from "../assets/Haris.jpg";
import fotoIlham from "../assets/ilham.JPG";
import fotoIriawanti from "../assets/Iriawanti.jpg";
import fotoMaharami from "../assets/maharami.jpeg";
import fotoMubin from "../assets/Mubin.jpg";
import fotoTaufiqur from "../assets/Taufiqur.jpeg";
import fotoTri from "../assets/Tri.jpeg";
import fotoTutut from "../assets/Tutut.jpeg";
import fotoUtami from "../assets/Utami.jpeg";
import fotoVeronika from "../assets/Veronika.jpg";
import fotoWidodo from "../assets/Widodo.JPG";
import fotoWindy from "../assets/Windy.jpeg";
import fotoWirata from "../assets/Wirata.jpeg";
import fotoYeye from "../assets/Yeye.jpeg";
import fotoAsep from "../assets/Asep.jpeg";
import fotoKukuh from "../assets/Kukuh.jpeg";
import fotoFaisal from "../assets/Faisal.jpeg";
import fotoAik from "../assets/Aik.jpeg";
import fotoYoyo from "../assets/Yoyo.jpeg";
import fotoAri from "../assets/Ari.jpg";
import fotoAdianto from "../assets/Adianto.jpeg";
import fotoAde from "../assets/Ade.jpeg";
import fotoDody from "../assets/Dody.jpeg";
import fotoHanifa from "../assets/Hanifa.jpeg";
import fotoRizal from "../assets/Rizal.jpeg";

export default function Structure() {
  const [activeTab, setActiveTab] = useState('pimpinan');
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Foto cadangan untuk personel yang belum punya file foto tersendiri di folder assets
  const fallbackPhoto = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300";

  // Data Pimpinan Utama
  const topManagement = [
    {
      name: "Dr. Abdul Mubin, ST., SH., MH., CSSL",
      nip: "197101131996031001",
      title: "Inspektur I",
      photo: fotoMubin,
      description: "Memimpin penyusunan kebijakan teknis, pelaksanaan pengawasan intern, pemantauan tindak lanjut, dan pelaporan di lingkungan Inspektorat I."
    },
    {
      name: "Ir. Iriawanti",
      nip: "196407141992032004",
      title: "Koordinator Pengawasan",
      photo: fotoIriawanti,
      description: "Mengoordinasikan pelaksanaan pengawasan teknis intern secara independen dan akuntabel."
    }
  ];

  // Data Subbagian Tata Usaha Lengkap
  const subbagTU = {
    title: "Subbagian Tata Usaha",
    leadName: "Tri Yuliastini, S.Pi.",
    subtitle: "Dukungan Administrasi, Persuratan, Keuangan & BMN",
    members: [
      { name: "Tri Yuliastini, S.Pi.", role: "Kepala Sub Bagian Tata Usaha", photo: fotoTri },
      { name: "Mohamed Firdaus, S.E., M.A.B", role: "PPK (Pejabat Pembuat Komitmen)", photo: fotoFirdaus },
      { name: "Ade Tabah Darma Mukti, S.Pi", role: "Pengelola Keuangan & Administrasi", photo: fotoAde },
      { name: "Muhammad Idris", role: "SPK", photo: fallbackPhoto },
      { name: "Yonathan Situmorang, A.Md.Ak", role: "BPP (Bendahara Pengeluaran Pembantu)", photo: fotoYoyo },
      { name: "Syahril Fudin", role: "Staf Subbag TU / Layanan Persuratan", photo: fotoAik },
      { name: "Asep Maryono", role: "Staf Subbag TU / Dukungan Operasional", photo: fotoAsep }
    ]
  };

  // Data 3 Tim Kerja Was (Katimja) Lengkap
  const teamList = [
    {
      id: 1,
      title: "Katimja Was Sekretariat Jenderal (Setjen)",
      leadName: "Firman Fachrudin Firmansyah, S.Pi., M.Sc",
      viceLead: "Lestari Tirtohening, S.E. (Wakil Timja Was)",
      subtitle: "Pengawasan Setjen (7 Eselon II), Pusdatin & Puskajis",
      icon: <Building2 className="w-5 h-5" />,
      members: [
        { name: "Firman Fachrudin Firmansyah, S.Pi., M.Sc", role: "Katimja Was Setjen", photo: fotoFirman },
        { name: "Lestari Tirtohening, S.E.", role: "Wakil Katimja Was / Biro Umum & PBJ", photo: fallbackPhoto },
        { name: "Veronika Eri F, S.Pi", role: "Tim Was Biro Umum & Biro PBJ", photo: fotoVeronika },
        { name: "Muhamad Widodo, SH, MH", role: "Tim Was Biro SDMAO & Biro Hukum", photo: fotoWidodo },
        { name: "Tutut Sumarmi, S.Sos", role: "Tim Was Biro Perencanaan & Biro HKLN", photo: fotoTutut },
        { name: "Ari Setyobudi", role: "Tim Was Biro Perencanaan & Biro HKLN", photo: fotoAri },
        { name: "Puji Astutuik, S.Pi", role: "Tim Was Biro Keuangan, BMN & LPMUKP", photo: fallbackPhoto },
        { name: "Hari Risnandar, A.Md.", role: "Tim Was Biro Keuangan, BMN & LPMUKP", photo: fotoHari },
        { name: "Kukuh Priambodo, S.Kom", role: "Tim Was Pusdatin & Pusjakstra", photo: fotoKukuh },
        { name: "Wildan Faturizqi, A.Md", role: "Tim Was Pusdatin & Pusjakstra", photo: fallbackPhoto }
      ]
    },
    {
      id: 2,
      title: "Katimja Was Ditjen Penataan Ruang Laut (DJPRL)",
      leadName: "Windy Skandiasari Yudanti, S.T., M.Ak",
      viceLead: "Haris Budianto, S.E (Wakil Timja Was)",
      subtitle: "Pengawasan DJPRL (6 Eselon II) & 4 UPT Penataan Ruang Laut",
      icon: <UserCheck className="w-5 h-5" />,
      members: [
        { name: "Windy Skandiasari Yudanti, S.T., M.Ak", role: "Katimja Was Ditjen PRL", photo: fotoWindy },
        { name: "Haris Budianto, S.E", role: "Wakil Katimja Was", photo: fotoHaris },
        { name: "Maharami, S.E", role: "Tim Was Sekretariat & Dit. Perencanaan Ruang Perairan", photo: fotoMaharami },
        { name: "Dody Alamsyah A.S.H, S.Pi", role: "Tim Was Sekretariat & Dit. Perencanaan Ruang Perairan", photo: fotoDody },
        { name: "Dr. Wirata, S.E., M.E", role: "Tim Was Dit. Pembinaan Penataan Ruang Laut & Pengendalian", photo: fotoWirata },
        { name: "Dianita Indah Prahmila, S.Pi, MSM", role: "Tim Was Dit. Pembinaan Penataan Ruang Laut & Pengendalian", photo: fotoDianita },
        { name: "Ahmad Nur Ilham, S.PKP", role: "Tim Was Dit. Pemanfaatan Ruang Pesisir & Pulau Kecil", photo: fotoIlham },
      ]
    },
    {
      id: 3,
      title: "Katimja Was Ditjen Pengelolaan Kelautan (DJPK)",
      leadName: "Taufiqur Rahman NG, S.Pi.",
      viceLead: "Wakil 1: Tengku Sonya Nirmala Hayati, S.Pi., M.Si. | Wakil 2: Sapnianti, S.Pi., M.M.",
      subtitle: "Pengawasan DJPK (6 Eselon II) & 7 UPT Pengelolaan Kelautan",
      icon: <Users className="w-5 h-5" />,
      members: [
        { name: "Taufiqur Rahman NG, S.Pi.", role: "Katimja Was Ditjen Pengelolaan Kelautan", photo: fotoTaufiqur },
        { name: "Tengku Sonya Nirmala Hayati, S.Pi., M.Si.", role: "Wakil 1 Katimja Was", photo: fallbackPhoto },
        { name: "Sapnianti, S.Pi., M.M.", role: "Wakil 2 Katimja Was", photo: fotoYeye },
        { name: "Tibyan D.M.P, S.Kom", role: "Tim Was Sekretariat & Dit. P3K", photo: fallbackPhoto },
        { name: "Hanifa Dwi Santi, S.E", role: "Tim Was Sekretariat & Dit. P3K", photo: fotoHanifa },
        { name: "Faisal Reza P, S.E, M.M", role: "Tim Was Dit. Konservasi Ekosistem & Spesies", photo: fotoFaisal },
        { name: "M. Rizal A.T.N, S.Pi", role: "Tim Was Dit. Konservasi Ekosistem & Spesies", photo: fotoRizal },
        { name: "Adianto Nugroho, S.E", role: "Tim Was Dit. Jasa Bahari & Sumber Daya Kelautan", photo: fotoAdianto },
        { name: "Tri Nur Utami, S.Pi", role: "Tim Was Dit. Jasa Bahari & Sumber Daya Kelautan", photo: fotoUtami }
      ]
    }
  ];

  // Data Statistik JFA
  const jfaData = {
    total: 29,
    stats: [
      { rank: "Auditor Utama", count: 2 },
      { rank: "Auditor Madya", count: 7 },
      { rank: "Auditor Muda", count: 10 },
      { rank: "Auditor Pertama", count: 8 },
      { rank: "Auditor Terampil", count: 2 }
    ],
    auditors: [
      { name: "Dr. Wirata, S.E., M.E", rank: "Auditor Utama", photo: fotoWirata },
      { name: "Ir. Iriawanti", rank: "Auditor Utama", photo: fotoIriawanti },
      { name: "Firman Fachrudin F, S.Pi., M.Sc", rank: "Auditor Madya", photo: fotoFirman },
      { name: "Windy Skandiasari Y, S.T., M.Ak", rank: "Auditor Madya", photo: fotoWindy },
      { name: "Haris Budianto, S.E", rank: "Auditor Muda", photo: fotoHaris },
      { name: "Dianita Indah P, S.Pi, MSM", rank: "Auditor Pertama", photo: fotoDianita },
      { name: "Veronika Eri F, S.Pi", rank: "Auditor Pertama", photo: fotoVeronika }
    ]
  };

  return (
    <section id="struktur" className="py-20 bg-neutral-50/80 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-sky-800 uppercase">Management & Governance</span>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mt-2 tracking-tight">
            Struktur <span className="font-bold text-sky-950">Organisasi & Pegawai</span>
          </h2>
          <div className="w-12 h-0.5 bg-sky-800 mx-auto mt-4"></div>
          <p className="mt-3 text-slate-500 text-xs sm:text-sm">
            Klik pada salah satu tim di bawah untuk melihat seluruh jajaran foto dan nama pegawai.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10 border-b border-slate-200">
          <div className="flex gap-4 sm:gap-8 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('pimpinan')}
              className={`pb-4 px-2 border-b-2 uppercase tracking-wider ${
                activeTab === 'pimpinan' ? 'border-sky-800 text-sky-950 font-bold' : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Inspektur & Pimpinan
            </button>
            <button
              onClick={() => setActiveTab('subbag')}
              className={`pb-4 px-2 border-b-2 uppercase tracking-wider ${
                activeTab === 'subbag' ? 'border-sky-800 text-sky-950 font-bold' : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Subbag Tata Usaha
            </button>
            <button
              onClick={() => setActiveTab('katimja')}
              className={`pb-4 px-2 border-b-2 uppercase tracking-wider ${
                activeTab === 'katimja' ? 'border-sky-800 text-sky-950 font-bold' : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Tim Kerja Was (Katimja)
            </button>
            <button
              onClick={() => setActiveTab('jfa')}
              className={`pb-4 px-2 border-b-2 uppercase tracking-wider ${
                activeTab === 'jfa' ? 'border-sky-800 text-sky-950 font-bold' : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Tenaga Fungsional (JFA)
            </button>
          </div>
        </div>

        {/* TAB 1: PIMPINAN UTAMA */}
        {activeTab === 'pimpinan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {topManagement.map((person, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <div className="w-36 h-44 bg-slate-100 overflow-hidden mb-4 border border-slate-200">
                  <img src={person.photo} alt={person.name} className="w-full h-full object-cover transition duration-500" />
                </div>
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-1">{person.title}</span>
                <h3 className="text-base font-extrabold text-slate-900">{person.name}</h3>
                {person.nip !== '-' && <p className="text-xs text-slate-400 mt-0.5">NIP. {person.nip}</p>}
                <p className="text-xs text-slate-500 mt-3 leading-relaxed border-t border-slate-100 pt-3">{person.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SUBBAG TATA USAHA */}
        {activeTab === 'subbag' && (
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">Subbagian Tata Usaha</span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">{subbagTU.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">Kepala Subbag TU: <span className="font-bold text-slate-700">{subbagTU.leadName}</span> ({subbagTU.members.length} Pegawai & Staf)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subbagTU.members.map((person, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200/60 flex items-center gap-4 hover:bg-sky-50/50 transition">
                  <div className="w-16 h-16 bg-slate-200 shrink-0 border border-slate-300 overflow-hidden">
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover transition duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">{person.name}</h4>
                    <p className="text-[11px] text-sky-800 font-medium mt-1">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: KATIMJA WAS */}
        {activeTab === 'katimja' && (
          <div className="space-y-4">
            {teamList.map((team) => (
              <div 
                key={team.id}
                onClick={() => setSelectedTeam(team)}
                className="bg-white rounded-none p-6 border border-slate-200/80 shadow-sm hover:border-sky-800 hover:shadow-md transition duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sky-50 group-hover:bg-sky-950 rounded-none text-sky-800 group-hover:text-white transition">
                    {team.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-sky-900 transition text-base">
                      {team.title}
                    </h4>
                    <p className="text-xs font-semibold text-sky-800 mt-0.5">Ketua: {team.leadName}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{team.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-xs text-sky-800 font-semibold opacity-0 group-hover:opacity-100 transition">
                    Lihat Foto Anggota ({team.members.length})
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-sky-900 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: JABATAN FUNGSIONAL AUDITOR (JFA) */}
        {activeTab === 'jfa' && (
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <Award className="w-6 h-6 text-sky-800" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Jabatan Fungsional Auditor (JFA)</h3>
                <p className="text-xs text-slate-500">Total Keseluruhan: <span className="font-bold text-sky-900">{jfaData.total} Auditor</span></p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
              {jfaData.stats.map((stat, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 text-center">
                  <span className="block text-lg font-black text-sky-900">{stat.count}</span>
                  <span className="text-[11px] font-semibold text-slate-600 block">{stat.rank}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-4">Jajaran Pegawai Fungsional Auditor:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {jfaData.auditors.map((aud, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-200 shrink-0 border border-slate-300 overflow-hidden">
                    <img src={aud.photo} alt={aud.name} className="w-full h-full object-cover transition" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">{aud.name}</h5>
                    <p className="text-[10px] text-sky-800 font-medium mt-0.5">{aud.rank}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* MODAL POPUP KATIMJA */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-t-4 border-sky-900 max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
            
            <button 
              onClick={() => setSelectedTeam(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">
                Seluruh Pegawai & Anggota Tim
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                {selectedTeam.title}
              </h3>
              <p className="text-xs font-bold text-sky-900 mt-1">Ketua: {selectedTeam.leadName}</p>
              {selectedTeam.viceLead && (
                <p className="text-xs text-slate-500 font-medium mt-0.5">{selectedTeam.viceLead}</p>
              )}
            </div>

            {/* Grid Foto Pegawai Tim */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[55vh] overflow-y-auto pr-1">
              {selectedTeam.members.map((person, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 border border-slate-200/80 flex items-center gap-3.5 hover:bg-sky-50/50 transition">
                  <div className="w-14 h-16 bg-slate-200 border border-slate-300 shrink-0 overflow-hidden">
                    <img 
                      src={person.photo} 
                      alt={person.name} 
                      className="w-full h-full object-cover transition"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">{person.name}</h4>
                    <p className="text-[11px] text-sky-800 font-medium mt-0.5">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-right">
              <button 
                onClick={() => setSelectedTeam(null)}
                className="bg-slate-900 text-white font-medium text-xs px-6 py-2.5 hover:bg-sky-900 transition uppercase tracking-wider"
              >
                Tutup Jendela
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}