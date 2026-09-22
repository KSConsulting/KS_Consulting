const { Button, Card, Badge, Icon, MicroLabel, StatBlock, Tabs, Tag } = window.KSConsultingDesignSystem_cfa9b6;

const CASES = [
  { c: "Rede Menor Preço", seg: "Varejo farmacêutico", h: "R$ 1,1 mi em receita atribuída", m: [["+512%", "Receita"], ["−41%", "CPA"], ["11", "Meses"]], tags: ["Tráfego pago", "CRO"] },
  { c: "Ágape Saúde", seg: "Serviços de saúde", h: "Custo por lead 3,4× menor", m: [["−71%", "CPL"], ["+238%", "Leads"], ["6", "Meses"]], tags: ["SEO", "Automação"] },
  { c: "Nova Log", seg: "Logística B2B", h: "Pipeline previsível em 90 dias", m: [["+64", "SQLs/mês"], ["4,1×", "ROI"], ["90", "Dias"]], tags: ["LinkedIn", "Dados"] },
  { c: "Praia Comprida", seg: "Farmácia regional", h: "Da mídia local ao e-commerce", m: [["+189%", "Receita"], ["−28%", "CAC"], ["8", "Meses"]], tags: ["Branding", "Mídia"] },
];

const QUOTES = [
  { n: "Rogério Vieira", r: "Diretor comercial · Rede Menor Preço", q: "Com a KS a estratégia de tráfego pago finalmente virou receita rastreável. Em quatro meses o board parou de perguntar se mídia valia a pena." },
  { n: "Ariane Medeiros", r: "CMO · Ágape Saúde", q: "Transformaram nossa operação de aquisição. Reuniões viraram números, não opinião." },
];

function CasesScreen({ go }) {
  const [filter, setFilter] = React.useState("Todos");
  const [active, setActive] = React.useState(0);
  const shown = filter === "Todos" ? CASES : CASES.filter((c) => c.tags.includes(filter));
  return (
    <div>
      <Section glow="both" pad="80px 32px 48px">
        <SectionHead index="03" eyebrow="Cases" title="Operações que passaram a crescer" accent="com previsibilidade"
          sub="Recortes reais de contas sob gestão. Métricas conferidas com o cliente antes de publicar." />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <Tabs items={["Todos", "Tráfego pago", "SEO", "CRO", "Dados"]} value={filter} onChange={setFilter} />
          <div style={{ display: "flex", gap: 40 }}>
            <StatBlock value={500} suffix="+" size="sm" label="Projetos entregues" />
            <StatBlock value={98} suffix="%" size="sm" tone="neon" label="Retenção" />
          </div>
        </div>
      </Section>
      <Section glow="none" pad="0 32px 48px">
        <Card variant="featured" padding={32} style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)", gap: 40, alignItems: "center" }}>
          <div style={{ borderRadius: "var(--radius-lg, 16px)", overflow: "hidden", border: "1px solid var(--border-soft)", background: "#000", aspectRatio: "16/9" }}>
            <video src="../../assets/cases/agendamento-odontologico.mp4" controls muted loop playsInline autoPlay style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <MicroLabel index="Case" tone="neon" separator="/">Clínica odontológica</MicroLabel>
            <h3 style={{ fontSize: "var(--text-h3)", lineHeight: 1.2, textWrap: "pretty" }}>
              Agenda cheia no automático, <span style={{ color: "var(--secondary)" }}>sem depender da recepção.</span>
            </h3>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, textWrap: "pretty" }}>
              Implementamos um assistente de IA que atende o paciente no WhatsApp, entende o pedido, consulta a agenda em tempo real e confirma a consulta em segundos — 24 horas por dia.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Atendimento imediato, inclusive fora do horário comercial", "Confirmação e lembrete automáticos reduzem faltas", "Equipe livre para cuidar de quem está na cadeira"].map((t) => (
                <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15, color: "var(--text-primary)" }}>
                  <span style={{ color: "var(--secondary)", flexShrink: 0, paddingTop: 2 }}><Icon name="check" size={16} /></span>{t}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <Button onClick={() => go("contact")} iconRight={<Icon name="arrow-right" size={16} />}>Quero isso na minha clínica</Button>
              <div style={{ display: "flex", gap: 8 }}><Tag>Automação</Tag><Tag>IA</Tag></div>
            </div>
          </div>
        </Card>
      </Section>
      <Section glow="none" pad="0 32px 96px">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {shown.map((c) => (
            <Card key={c.c} interactive padding={32} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: "var(--text-primary)" }}>{c.c}</span>
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{c.seg}</span>
                </div>
                <Icon name="arrow-up-right" size={20} color="var(--primary-light)" />
              </div>
              <p style={{ fontSize: 17, color: "var(--text-secondary)" }}>{c.h}</p>
              <div style={{ display: "flex", gap: 32, paddingTop: 16, borderTop: "1px solid var(--border-soft)" }}>
                {c.m.map(([v, l], i) => (
                  <div key={l} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, color: i === 0 ? "var(--secondary)" : "var(--text-primary)" }}>{v}</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{l}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>{c.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section glow="blue">
        <SectionHead index="04" eyebrow="Depoimentos" title="O que os clientes dizem sobre" accent="trabalhar com a KS" />
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr .6fr", gap: 24, alignItems: "stretch" }}>
          <Card variant="elevated" padding={48} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", gap: 4, color: "var(--secondary)" }}>
              {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={16} />)}
            </div>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: 26, lineHeight: 1.4, color: "var(--text-primary)", letterSpacing: "-.01em" }}>
              “{QUOTES[active].q}”
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{QUOTES[active].n}</span>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{QUOTES[active].r}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {QUOTES.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} aria-label={`Depoimento ${i + 1}`} style={{
                    width: i === active ? 28 : 8, height: 8, borderRadius: 999, border: "none", cursor: "pointer",
                    background: i === active ? "var(--primary)" : "var(--border)", transition: "all var(--duration-hover) var(--ease-standard)",
                  }} />
                ))}
              </div>
            </div>
          </Card>
          <Card padding={32} style={{ display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
            <MicroLabel index="NPS">Satisfação</MicroLabel>
            <StatBlock value={72} size="md" tone="neon" label="NPS médio das contas sob gestão em 2026" />
            <Button variant="secondary" fullWidth onClick={() => go("contact")}>Quero crescer também</Button>
          </Card>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { CasesScreen });
