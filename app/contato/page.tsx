import type { Metadata } from "next";
import { RevealObserver } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contato", description: "Agende seu serviço na Injetec Mecânica Automotiva em Gaspar/SC." };

export default function ContatoPage() {
  return <main className="contact-page"><RevealObserver /><section className="contact-hero"><span className="page-code">04 / CONTATO</span><h1>SEU IMPORTADO<br />EM <em>BOAS MÃOS.</em></h1><p>Conte o que está acontecendo com o seu carro. A conversa começa direto com a oficina.</p><a className="contact-primary" href={site.whatsapp} target="_blank" rel="noreferrer"><span>Conversar no WhatsApp</span><b>↗</b></a></section><section className="contact-options"><a href={site.whatsapp} target="_blank" rel="noreferrer" data-reveal><small>WhatsApp</small><strong>{site.whatsappLabel}</strong><span>Atendimento e agendamento ↗</span></a><a href={site.phone} data-reveal><small>Telefone</small><strong>{site.phoneLabel}</strong><span>Ligar para a oficina ↗</span></a><a href={site.instagram} target="_blank" rel="noreferrer" data-reveal><small>Instagram</small><strong>@injetec_oficina</strong><span>Acompanhar a Injetec ↗</span></a><a href={site.google} target="_blank" rel="noreferrer" data-reveal><small>Endereço</small><strong>Rod. Ingo Hering, 9271</strong><span>Ver rota no Google ↗</span></a></section><section className="contact-location"><div data-reveal><span>Margem Esquerda</span><h2>GASPAR / SC</h2></div><div data-reveal><p>Rod. Ingo Hering, 9271<br />CEP 89116-755</p><p>Atendimento mediante agendamento.</p><a href={site.google} target="_blank" rel="noreferrer">Traçar rota ↗</a></div></section></main>;
}
