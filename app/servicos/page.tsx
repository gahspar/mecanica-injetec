import type { Metadata } from "next";
import Link from "next/link";
import { RevealObserver } from "@/components/reveal";
import { services, site } from "@/lib/site";

export const metadata: Metadata = { title: "Serviços", description: "Diagnóstico eletrônico, manutenção preventiva, freios, suspensão e serviços técnicos para veículos importados." };

export default function ServicosPage() {
  return <main className="inner-page"><RevealObserver /><section className="page-intro services-intro"><span className="page-code">01 / SERVIÇOS</span><h1>O cuidado certo,<br /><em>no momento certo.</em></h1><p>Serviços guiados por diagnóstico, histórico e condição real do veículo.</p></section><section className="all-services"><div className="all-services-lead" data-reveal><span>Escopo técnico</span><h2>DO ESSENCIAL<br />AO COMPLEXO.</h2></div><div className="all-services-list">{services.map(item => <article key={item.n} data-reveal><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section><section className="service-process"><div data-reveal><span>Antes</span><h3>Ouvimos e investigamos.</h3><p>O relato do motorista orienta a primeira leitura técnica.</p></div><div data-reveal><span>Durante</span><h3>Explicamos o necessário.</h3><p>O plano de serviço nasce do diagnóstico, não da suposição.</p></div><div data-reveal><span>Depois</span><h3>Conferimos o resultado.</h3><p>Testes finais validam o funcionamento antes da entrega.</p></div></section><section className="page-cta"><span>Precisa revisar seu carro?</span><h2>CONVERSE DIRETO<br />COM A OFICINA.</h2><a href={site.whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp ↗</a></section></main>;
}
