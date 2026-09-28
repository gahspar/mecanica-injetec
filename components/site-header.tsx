"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  ["/servicos", "Serviços"],
  ["/especialistas", "Importados"],
  ["/sobre", "A Injetec"],
  ["/contato", "Contato"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${pathname === "/" ? "on-hero" : "inner-header"} ${scrolled ? "is-scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Injetec — início">
          <span className="brand-word">INJETEC</span><span className="brand-rule" /><span className="brand-sub">Mecânica Automotiva</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([href, label]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="schedule-link" href={site.whatsapp} target="_blank" rel="noreferrer">Agendar serviço <span>↗</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><i /><i /></button>
        </div>
      </header>

      <div className={`menu-panel ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu">Fechar ×</button>
        <nav>{links.map(([href, label], index) => <Link href={href} key={href} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small>{label}</Link>)}<a href={site.whatsapp} target="_blank" rel="noreferrer"><small>05</small>Agendar serviço</a></nav>
      </div>
    </>
  );
}
