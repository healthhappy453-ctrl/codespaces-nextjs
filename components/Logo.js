// components/Logo.js
import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Monogramme Royal Blue */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 text-white shadow-md shadow-slate-950/10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 text-blue-500"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      {/* Typographie de Marque */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="text-base font-black tracking-tight text-slate-950 uppercase font-sans">
            Search<span className="text-blue-600">Snippets</span>
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
            .COM
          </span>
        </div>
        <span className="text-[9px] tracking-[0.25em] text-slate-500 uppercase font-mono font-semibold">
          Par BlueCode Agency
        </span>
      </div>
    </div>
  );
}