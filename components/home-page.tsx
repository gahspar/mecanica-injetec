import Image from "next/image";
import Link from "next/link";
import { BrakeStatic } from "@/components/brake-static";
import { RevealObserver } from "@/components/reveal";
import { services, site } from "@/lib/site";

export function HomePage() {
  return (
    <main>
      <RevealObserver />
      <section className="hero" id="inicio">
        <div className="hero-media"><Image src="/images/hero-injetec.png" alt="Veículo importado em uma oficina técnica premium" fill priority sizes="100vw" /></div>
        <div className="hero-shade" /><div className="diagnostic-grid" aria-hidden="true" /><div className="scan-line" aria-hidden="true" />
        <div className="hero-index"><span>01</span><i /><small>05</small></div>
        <div className="hero-eyebrow">Especialistas em importados · Gaspar/SC</div>
        <div className="hero-copy"><div className="hero-years"><strong>23</strong><span>anos de<br />experiência</span></div><h1><span>Seu importado</span><br />pede <em>precisão</em></h1></div>
        <div className="hero-footer"><p>Diagnóstico preciso, equipe especializada e cuidado técnico para manter seu carro entregando o que promete.</p><a href={site.whatsapp} target="_blank" rel="noreferrer"><span>Agende sua revisão</span><b>↗</b></a></div>
        <div className="hero-stamp" aria-label="Desde 2003"><span>Desde</span><strong>2003</strong><small>Gaspar · SC</small></div>
      </section>

      <div className="signal-strip"><div><span>Diagnóstico eletrônico</span><i>◆</i><span>Manutenção preventiva</span><i>◆</i><span>Performance & segurança</span><i>◆</i><span>Veículos importados</span></div><div aria-hidden="true"><span>Diagnóstico eletrônico</span><i>◆</i><span>Manutenção preventiva</span><i>◆</i><span>Performance & segurança</span><i>◆</i><span>Veículos importados</span></div></div>

      <section className="manifesto-section">
        <div className="section-code" data-reveal><span>INJ / 002</span><small>Precisão aplicada</small></div>
        <div className="manifesto-main" data-reveal><p>Não é só manutenção.</p><h2>É entender cada sistema antes de tocar em qualquer peça.</h2></div>
        <div className="manifesto-note" data-reveal><span className="red-line" /><p>Há mais de duas décadas, a Injetec cuida de veículos importados com método, tecnologia e responsabilidade.</p><Link href="/sobre">Conheça nossa história ↗</Link></div>
      </section>

      <section className="diagnostic-section">
        <div className="diagnostic-photo" data-reveal><Image src="/images/diagnostico-injetec.png" alt="Especialista realizando diagnóstico eletrônico em veículo importado" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div className="diagnostic-copy" data-reveal><span className="section-label">Diagnóstico antes da troca</span><h2>Dados primeiro.<br /><em>Decisões depois.</em></h2><p>Um alerta no painel pode ter várias origens. Por isso, o serviço começa com leitura, teste e interpretação — não com tentativa.</p><div className="tech-points"><div><b>01</b><span>Leitura dos sistemas eletrônicos</span></div><div><b>02</b><span>Inspeção orientada por sintomas</span></div><div><b>03</b><span>Plano de serviço transparente</span></div></div><Link className="text-link" href="/especialistas">Como cuidamos do seu importado ↗</Link></div>
      </section>

      <section className="services-section">
        <div className="services-head" data-reveal><span className="section-label">Serviços essenciais</span><h2>DO SCANNER<br />À ESTRADA.</h2><p>Uma visão completa do veículo para agir no que realmente importa.</p></div>
        <div className="service-list">{services.slice(0,4).map(item => <article key={item.n} data-reveal><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><b>↗</b></article>)}</div>
        <Link className="services-all" href="/servicos">Ver todos os serviços <span>↗</span></Link>
      </section>

      <BrakeStatic />

      <section className="proof-section">
        <div className="proof-score" data-reveal><span>Google</span><strong>4,5</strong><div aria-label="4,5 de 5 estrelas">★★★★★</div><p>84 avaliações públicas</p><a href={site.google} target="_blank" rel="noreferrer">Ver perfil no Google ↗</a></div>
        <blockquote data-reveal><span>“</span><p>Ótimo profissional, o melhor da região!</p><footer><strong>Gelasio Jr. da Silva</strong><small>Avaliação pública no Google</small></footer></blockquote>
      </section>

      <section className="history-section">
        <div className="history-year" data-reveal><small>Uma história em movimento</small><strong>2003</strong></div>
        <div className="history-copy" data-reveal><h2>Experiência que acompanha a evolução dos carros.</h2><p>A tecnologia automotiva mudou. O compromisso com diagnóstico responsável, atendimento direto e serviço bem executado permanece.</p><Link href="/sobre">Conheça a Injetec ↗</Link></div>
      </section>

      <section className="home-contact"><span>Seu carro em boas mãos</span><h2 data-reveal>VAMOS CUIDAR<br />DO SEU <em>IMPORTADO?</em></h2><a href={site.whatsapp} target="_blank" rel="noreferrer"><span>Conversar no WhatsApp</span><b>↗</b></a><div className="contact-facts"><p><small>Localização</small>{site.address}</p><p><small>WhatsApp</small>{site.whatsappLabel}</p><p><small>Instagram</small>@injetec_oficina</p></div></section>
    </main>
  );
}
