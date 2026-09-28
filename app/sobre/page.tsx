import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealObserver } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "A Injetec", description: "Conheça a trajetória da Injetec Mecânica Automotiva, especialista em veículos importados desde 2003." };

export default function SobrePage() {
  return <main className="inner-page"><RevealObserver /><section className="page-intro about-intro"><span className="page-code">03 / A INJETEC</span><h1>DUAS DÉCADAS.<br /><em>O MESMO CRITÉRIO.</em></h1><p>Uma oficina construída sobre conhecimento técnico, atendimento direto e responsabilidade em cada diagnóstico.</p></section><section className="about-story"><div className="about-story-image" data-reveal><Image src="/images/diagnostico-injetec.png" alt="Diagnóstico técnico realizado na oficina" fill sizes="(max-width: 800px) 100vw, 46vw" /></div><div className="about-story-copy" data-reveal><span>Desde 2003</span><h2>EVOLUIR JUNTO COM OS CARROS.</h2><p>A Injetec nasceu em Gaspar e construiu sua trajetória acompanhando a transformação da mecânica automotiva. Sistemas ficaram mais integrados, diagnósticos mais digitais e veículos mais sofisticados.</p><p>O princípio continuou simples: investigar com cuidado, explicar com clareza e executar somente o que faz sentido.</p></div></section><section className="values-section"><article data-reveal><span>01</span><h3>Critério</h3><p>Diagnóstico antes de decisão.</p></article><article data-reveal><span>02</span><h3>Transparência</h3><p>Informação direta durante o serviço.</p></article><article data-reveal><span>03</span><h3>Cuidado</h3><p>Respeito ao veículo e ao cliente.</p></article><article data-reveal><span>04</span><h3>Evolução</h3><p>Aprendizado técnico contínuo.</p></article></section><section className="location-section"><div data-reveal><span>Onde estamos</span><h2>GASPAR,<br />SANTA CATARINA.</h2></div><div data-reveal><p>{site.address}</p><a href={site.google} target="_blank" rel="noreferrer">Abrir no Google Maps ↗</a><Link href="/contato">Ver formas de contato ↗</Link></div></section></main>;
}
