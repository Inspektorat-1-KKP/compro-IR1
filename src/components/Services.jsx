import React from 'react';
import { Users, ShieldCheck } from 'lucide-react';

export default function Services() {
  return (
    <section id="layanan" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Bidang & Ruang Lingkup Pengawasan</h3>
          <p className="text-slate-600 text-sm mt-2">Cakupan pengawasan internal yang dilaksanakan secara berkala</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1 */}
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-sky-600 text-white rounded-xl">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-sky-950">Pengawasan Manajerial</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-sky-600 font-bold">✓</span>
                Sistem Pengendalian Intern Pemerintah (SPIP)
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-sky-600 font-bold">✓</span>
                Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-sky-600 font-bold">✓</span>
                Pengendalian Intern Pelaporan Keuangan (PIPK)
              </li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-emerald-950">Dukungan Pengawasan PKPN</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                Probity Audit Pengadaan Barang dan Jasa
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                Kawasan Niaga Minipolitan dan Kelautan (KNMP)
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                Budidaya Tematik & Program Prioritas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}