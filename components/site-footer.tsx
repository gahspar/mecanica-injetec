import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand footer-brand" href="/"><span className="brand-word">INJETEC</span><span className="brand-rule" /><span className="brand-sub">Mecânica Automotiva</span></Link>
        <p>Especialistas em veículos importados.<br />Atendimento técnico premium em Gaspar/SC.</p>
        <nav><Link href="/servicos">Serviços</Link><Link href="/especialistas">Importados</Link><Link href="/sobre">A Injetec</Link><Link href="/contato">Contato</Link></nav>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Injetec Mecânica Automotiva</span><a href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><span>Desde 2003</span></div>
    </footer>
  );
}
