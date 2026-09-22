const { Button, Card, Badge, Icon, MicroLabel, StatBlock, Tag } = window.KSConsultingDesignSystem_cfa9b6;

function Sparkline({ color = "var(--secondary)", height = 120 }) {
  const pts = "0,95 60,78 120,84 180,58 240,64 300,36 360,42 420,18 480,8";
  return (
    <svg viewBox="0 0 480 110" preserveAspectRatio="none" style={{ width: "100%", height }}>
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(186,252,4,.22)" /><stop offset="100%" stopColor="rgba(186,252,4,0)" />
        </linearGradient>
      </defs>
      <polygon points={`${pts} 480,110 0,110`} fill="url(#sparkFill)" />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="480" cy="8" r="4" fill={color} />
    </svg>
  );
}

function HeroPanel() {
  return (
    <Card variant="elevated" padding={24} style={{ width: "100%", maxWidth: 460, position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <MicroLabel index="ROI">Últimos 90 dias</MicroLabel>
        <Badge tone="neon" dot>Ao vivo</Badge>
      </div>
      <div style={{ display: "flex", gap: 32, marginBottom: 16 }}>
        <StatBlock value={312} suffix="%" size="sm" tone="neon" label="Retorno sobre investimento" animate />
        <StatBlock value={1284} size="sm" label="Leads qualificados / mês" animate />
      </div>
      <Sparkline />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: 8 }}>
        {["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"].map((m) => <span key={m}>{m}</span>)}
      </div>
    </Card>
  );
}

function Hero({ go }) {
  return (
    <Section glow="both" pad="96px 32px 80px">
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <Badge tone="blue" dot style={{ alignSelf: "flex-start" }}>Consultoria de performance digital</Badge>
          <h1 style={{ fontSize: "var(--text-display-lg)", letterSpacing: "var(--tracking-display)", lineHeight: "var(--leading-display)" }}>
            Transforme sua operação em <span style={{ color: "var(--primary-light)" }}>resultado</span> mensurável.
          </h1>
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)", maxWidth: 520 }}>
            Estratégia, mídia e dados no mesmo time. Montamos a operação de aquisição que a sua receita precisa — e provamos cada real investido.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Button size="lg" onClick={() => go("contact")} iconRight={<Icon name="arrow-right" size={18} />}>Começar agora</Button>
            <Button size="lg" variant="secondary" onClick={() => go("cases")}>Ver cases</Button>
          </div>
          <div style={{ display: "flex", gap: 48, paddingTop: 16, borderTop: "1px solid var(--border-soft)" }}>
            <StatBlock value={500} suffix="+" size="sm" label="Projetos entregues" animate />
            <StatBlock value={98} suffix="%" size="sm" tone="neon" label="Retenção de clientes" animate />
            <StatBlock value="24/7" size="sm" tone="cyan" label="Monitoramento de campanhas" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><HeroPanel /></div>
      </div>
    </Section>
  );
}

function Logos() {
  const names = ["FARMÁCIA CAMPINAS", "REDE MENOR PREÇO", "PRAIA COMPRIDA", "ÁGAPE", "NOVA LOG"];
  return (
    <Section glow="none" pad="40px 32px">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-muted)" }}>Confiam na KS</span>
        {names.map((n) => (
          <span key={n} style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, letterSpacing: ".06em", color: "var(--text-muted)", opacity: .7 }}>{n}</span>
        ))}
      </div>
    </Section>
  );
}

function Pillars() {
  const items = [
    { i: "01", t: "Diagnóstico", d: "Mapeamos canais, funil e unit economics antes de investir o primeiro real.", ic: "search" },
    { i: "02", t: "Operação", d: "Mídia, criativo e CRO rodando em ciclos semanais com meta de receita.", ic: "zap", neon: true },
    { i: "03", t: "Escala", d: "O que prova retorno vira orçamento. O que não prova, sai do ar.", ic: "trending-up" },
  ];
  return (
    <Section glow="blue">
      <SectionHead index="01" eyebrow="Metodologia" title="Três etapas para um crescimento" accent="previsível"
        sub="Nada de retainer sem escopo. Cada etapa tem entregável, prazo e métrica de saída." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {items.map((x) => (
          <Card key={x.i} interactive variant={x.neon ? "featured" : "default"} padding={32} style={{ display: "flex", flexDirection: "column", gap: 16, minHeight: 240 }}>
            <span style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,102,255,.10)", border: "1px solid rgba(32,164,255,.30)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--primary-light)" }}>
              <Icon name={x.ic} size={20} />
            </span>
            <MicroLabel index={x.i} tone={x.neon ? "neon" : "blue"}>Etapa</MicroLabel>
            <h3 style={{ fontSize: "var(--text-h4)" }}>{x.t}</h3>
            <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>{x.d}</p>
            <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--primary-light)" }}>
              Saiba mais <Icon name="arrow-right" size={16} />
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function ResultBand() {
  return (
    <Section glow="cyan">
      <Card variant="featured" padding={48} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <MicroLabel index="Case" tone="neon" separator="/">Rede Menor Preço</MicroLabel>
          <h3 style={{ fontSize: "var(--text-h3)", maxWidth: 520 }}>
            De R$ 180 mil para <span style={{ color: "var(--secondary)" }}>R$ 1,1 milhão</span> em receita atribuída em 11 meses.
          </h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Tag>Tráfego pago</Tag><Tag>CRO</Tag><Tag>Automação</Tag>
          </div>
        </div>
        <div style={{ display: "flex", gap: 40 }}>
          <StatBlock value={512} suffix="%" size="md" tone="neon" label="Receita atribuída" animate />
          <StatBlock value={41} prefix="−" suffix="%" size="md" label="Custo por aquisição" animate />
        </div>
      </Card>
    </Section>
  );
}

function CtaBand({ go }) {
  return (
    <Section glow="blue" pad="112px 32px">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, textAlign: "center" }}>
        <MicroLabel index="04" style={{ alignSelf: "center" }}>Próximo passo</MicroLabel>
        <h2 style={{ fontSize: "var(--text-h1)", maxWidth: 760 }}>
          Vamos olhar seus números <span style={{ color: "var(--secondary)" }}>juntos</span>.
        </h2>
        <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 520 }}>
          Diagnóstico gratuito de 30 minutos com um especialista sênior. Sem apresentação comercial.
        </p>
        <Button size="lg" onClick={() => go("contact")} iconRight={<Icon name="arrow-right" size={18} />}>Agendar diagnóstico</Button>
      </div>
    </Section>
  );
}

function HomeScreen({ go }) {
  return <div><Hero go={go} /><Logos /><Pillars /><ResultBand /><CtaBand go={go} /></div>;
}

Object.assign(window, { HomeScreen, Sparkline });
