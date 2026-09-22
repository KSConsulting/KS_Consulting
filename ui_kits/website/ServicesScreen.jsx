const { Button, Card, Badge, Icon, MicroLabel, StatBlock, Tabs, Tag, Switch, Tooltip, IconButton } = window.KSConsultingDesignSystem_cfa9b6;

const SERVICES = [
  { ic: "target", t: "Tráfego pago", d: "Google, Meta e LinkedIn Ads geridos por receita — não por impressão.", tags: ["Google Ads", "Meta Ads", "LinkedIn"] },
  { ic: "search", t: "SEO técnico", d: "Arquitetura, performance e conteúdo para captar demanda que já existe.", tags: ["Técnico", "Conteúdo"] },
  { ic: "megaphone", t: "Social media", d: "Conteúdo com pauta comercial, não calendário de datas comemorativas.", tags: ["Estratégia", "Produção"] },
  { ic: "sparkles", t: "Branding & web", d: "Identidade e páginas construídas para converter, medidas desde o dia um.", tags: ["Identidade", "Landing pages"] },
  { ic: "bar-chart-3", t: "Dados & BI", d: "Um painel único ligando mídia, CRM e receita realizada.", tags: ["Dashboards", "Atribuição"] },
  { ic: "settings", t: "Automação", d: "CRM, nutrição e rotinas comerciais que devolvem horas ao time.", tags: ["CRM", "Workflows"] },
];

const PLANS = [
  { n: "Diagnóstico", p: "R$ 4.900", per: "único", d: "Auditoria completa de canais, funil e atribuição.", f: ["Auditoria de mídia", "Mapa de funil", "Plano de 90 dias"], v: "default" },
  { n: "Operação", p: "R$ 18.500", per: "/mês", d: "Time dedicado rodando aquisição fim a fim.", f: ["Mídia + criativo + CRO", "Squad dedicado", "Painel de receita", "Rituais semanais"], v: "featured", badge: "Mais contratado" },
  { n: "Enterprise", p: "Sob consulta", per: "", d: "Múltiplas unidades, BI próprio e governança.", f: ["Multi-marca", "BI dedicado", "SLA 24/7"], v: "default" },
];

function ServicesScreen({ go }) {
  const [filter, setFilter] = React.useState("Todos");
  const [annual, setAnnual] = React.useState(true);
  const shown = filter === "Todos" ? SERVICES : SERVICES.filter((s) => s.t === filter);
  return (
    <div>
      <Section glow="both" pad="80px 32px 56px">
        <SectionHead index="02" eyebrow="Serviços" title="Um time só, responsável pelo" accent="número final"
          sub="Você contrata resultado, não horas. Escolha o ponto de partida e escale conforme a operação prova retorno." />
        <Tabs items={["Todos", ...SERVICES.map((s) => s.t)]} value={filter} onChange={setFilter} />
      </Section>
      <Section glow="none" pad="0 32px 96px">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {shown.map((s) => (
            <Card key={s.t} interactive padding={28} style={{ display: "flex", flexDirection: "column", gap: 14, minHeight: 230 }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,217,255,.08)", border: "1px solid rgba(0,217,255,.25)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                <Icon name={s.ic} size={20} />
              </span>
              <h3 style={{ fontSize: "var(--text-h4)" }}>{s.t}</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>{s.d}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" }}>
                {s.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section glow="blue">
        <SectionHead index="03" eyebrow="Planos" title="Contratos claros, escopo" accent="fechado" align="center" />
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40, gap: 16, alignItems: "center" }}>
          <Switch tone="neon" checked={annual} onChange={setAnnual} label="Compromisso anual (−20%)" />
          <Tooltip content="Contratos anuais travam o valor por 12 meses">
            <IconButton size="sm" label="Ajuda" icon={<Icon name="info" size={15} />} />
          </Tooltip>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, alignItems: "start" }}>
          {PLANS.map((p) => (
            <Card key={p.n} variant={p.v} padding={32} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <MicroLabel tone={p.v === "featured" ? "neon" : "blue"}>{p.n}</MicroLabel>
                {p.badge && <Badge tone="neon">{p.badge}</Badge>}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-.03em" }}>
                  {annual && p.p.startsWith("R$ 1") ? "R$ 14.800" : p.p}
                </span>
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{p.per}</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>{p.d}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 8, borderTop: "1px solid var(--border-soft)" }}>
                {p.f.map((f) => (
                  <span key={f} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: "var(--text-secondary)" }}>
                    <Icon name="check" size={16} color={p.v === "featured" ? "var(--secondary)" : "var(--primary-light)"} />{f}
                  </span>
                ))}
              </div>
              <Button variant={p.v === "featured" ? "primary" : "secondary"} fullWidth onClick={() => go("contact")}>
                {p.p === "Sob consulta" ? "Falar com especialista" : "Começar agora"}
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { ServicesScreen });
