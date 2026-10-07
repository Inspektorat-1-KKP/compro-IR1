import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import LogoKKP from '../assets/logo-kkp.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const googleSitesUrl = "https://sites.google.com/view/inspektorat1"; 

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <img 
              src={LogoKKP} 
              alt="Logo Kementerian Kelautan dan Perikanan" 
              className="w-11 h-11 object-contain"
            />
            <div>
              <h1 className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-none uppercase">
                Inspektorat I
              </h1>
              <p className="text-[11px] text-slate-500 font-medium tracking-widest uppercase mt-1">
                Kementerian Kelautan & Perikanan
              </p>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 text-xs font-semibold tracking-widest text-slate-600 uppercase">
              <a href="#beranda" className="text-sky-900 border-b-2 border-sky-900 pb-1 font-bold">Beranda</a>
              <a href="#tentang" className="hover:text-sky-900 transition duration-200">Profil</a>
              <a href="#struktur" className="hover:text-sky-900 transition duration-200">Struktur Organisasi</a>
              <a href="#kontak" className="hover:text-sky-900 transition duration-200">Kontak</a>
            </nav>

            <a 
              href={googleSitesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-950 hover:bg-sky-900 text-white text-xs font-semibold px-4 py-2.5 transition duration-200 uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
              <span>Kembali ke Portal Utama</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-6 space-y-3 text-xs font-semibold uppercase tracking-wider">
          <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sky-900 font-bold border-b border-slate-100">Beranda</a>
          <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 border-b border-slate-100">Profil</a>
          <a href="#struktur" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 border-b border-slate-100">Struktur Organisasi</a>
          <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 border-b border-slate-100">Kontak</a>
          
          <a 
            href={googleSitesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full bg-sky-950 text-white text-xs font-semibold px-4 py-3 transition uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Kembali ke Portal Utama</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}