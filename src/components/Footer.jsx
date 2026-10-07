import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import LogoKKP from '../assets/logo-kkp.png';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={LogoKKP} 
                alt="Logo Kementerian Kelautan dan Perikanan" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold tracking-widest text-sm uppercase">INSPEKTORAT I</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-light max-w-sm">
              Inspektorat Jenderal <br />
              Kementerian Kelautan dan Perikanan Republik Indonesia.
            </p>
          </div>

          {/* Alamat */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-200">Alamat Kantor</h5>
            <p className="flex items-start gap-2 text-xs text-slate-400 font-light leading-relaxed">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              Gedung Mina Bahari III Lantai 2, Jl. Medan Merdeka No. 16, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110
            </p>
          </div>

          {/* Kontak */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-200">Kontak Resmi</h5>
            <p className="flex items-center gap-2 text-xs text-slate-400 font-light">
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              (021) 3522310
            </p>
            <p className="flex items-center gap-2 text-xs text-slate-400 font-light">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              itjen@kkp.go.id
            </p>
          </div>

        </div>

        <div className="pt-8 text-center text-[11px] text-slate-500 font-light uppercase tracking-widest">
          © {new Date().getFullYear()} Inspektorat I - Kementerian Kelautan dan Perikanan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}