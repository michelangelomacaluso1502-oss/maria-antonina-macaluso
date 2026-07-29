"use client";

import { useState } from "react";
import { SOCIAL, SITE } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { Instagram, Facebook, Mail, Send, Check } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Best-effort: open mail client with prefilled content.
    const subject = encodeURIComponent(`Contatto — ${form.name || "Sito Maria Antonina Macaluso"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:press@maria-antonina-macaluso.vercel.app?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contatti" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Contatti"
          title="Resta in contatto"
          subtitle="Per stampa, collaborazioni e richieste professionali"
        />

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <p className="text-[11px] uppercase tracking-cinema text-gold/70">Social ufficiali</p>
                <div className="mt-4 space-y-3">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.url}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border-b border-gold/10 pb-3 last:border-0"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold transition-colors group-hover:bg-gold group-hover:text-noir">
                        {s.icon === "instagram" ? <Instagram className="h-5 w-5" /> : <Facebook className="h-5 w-5" />}
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-cream">{s.label}</span>
                        <span className="block text-xs text-cream/50">{s.handle}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <p className="text-[11px] uppercase tracking-cinema text-gold/70">Note</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  Questo è un archivio digitale autorevole. I dati sono verificati da fonti pubbliche.
                  Per richieste di stampa, indicare testata e motivo nel messaggio.
                </p>
                <p className="mt-3 text-xs text-cream/40">
                  Sito di riferimento: {SITE.name}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="glass-luxury space-y-4 p-6">
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-xs uppercase tracking-wide-sm text-cream/70">
                  Nome
                </label>
                <input
                  id="c-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gold/20 bg-noir/40 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-xs uppercase tracking-wide-sm text-cream/70">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gold/20 bg-noir/40 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                  placeholder="email@esempio.com"
                />
              </div>
              <div>
                <label htmlFor="c-msg" className="mb-1.5 block text-xs uppercase tracking-wide-sm text-cream/70">
                  Messaggio
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="scrollbar-luxury w-full resize-none border border-gold/20 bg-noir/40 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                  placeholder="Scrivi il tuo messaggio…"
                />
              </div>
              <button type="submit" className="btn-cinema btn-cinema-solid w-full justify-center">
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Apri il client di posta
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4" /> Invia messaggio <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
