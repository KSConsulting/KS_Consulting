const { Button, Card, Icon, MicroLabel, Input, Select, Checkbox, Radio, Dialog, Toast, Badge } = window.KSConsultingDesignSystem_cfa9b6;

function ContactScreen() {
  const [seg, setSeg] = React.useState("E-commerce");
  const [sent, setSent] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Section glow="both" pad="80px 32px 96px">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <MicroLabel index="04">Contato</MicroLabel>
            <h1 style={{ fontSize: "var(--text-h1)" }}>
              Diagnóstico gratuito, <span style={{ color: "var(--secondary)" }}>30 minutos</span>.
            </h1>
            <p style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)", maxWidth: 460 }}>
              Um especialista sênior olha seus canais, seu funil e seus números — e diz o que faria nos primeiros 90 dias. Sem apresentação comercial.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
              {[["mail", "contato@ksconsulting.com.br"], ["phone", "+55 11 4000-0000"], ["map-pin", "Av. Faria Lima, 1500 — São Paulo, SP"], ["clock", "Seg a sex, 9h às 19h"]].map(([ic, t]) => (
                <span key={t} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15, color: "var(--text-secondary)" }}>
                  <Icon name={ic} size={18} color="var(--primary-light)" />{t}
                </span>
              ))}
            </div>
            <Card padding={24} style={{ display: "flex", gap: 16, alignItems: "center", maxWidth: 460 }}>
              <Icon name="shield-check" size={22} color="var(--secondary)" />
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                Seus dados ficam com o time de atendimento. Nada de listas, nada de disparo em massa.
              </p>
            </Card>
          </div>

          <Card variant="elevated" padding={40} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "var(--text-h4)" }}>Agendar diagnóstico</h3>
              <Badge tone="blue">1 dia útil</Badge>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Input label="Nome" placeholder="Seu nome" />
              <Input label="Empresa" placeholder="Nome da empresa" />
            </div>
            <Input label="E-mail corporativo" type="email" placeholder="voce@empresa.com.br" icon={<Icon name="mail" size={18} />} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Input label="WhatsApp" placeholder="(11) 90000-0000" />
              <Select label="Investimento mensal em mídia" options={["Até R$ 5 mil", "R$ 5–20 mil", "R$ 20–50 mil", "Acima de R$ 50 mil"]} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)" }}>Segmento</span>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {["Serviço", "E-commerce", "Indústria", "B2B"].map((v) => (
                  <Radio key={v} name="segmento" value={v} label={v} checked={seg === v} onChange={setSeg} />
                ))}
              </div>
            </div>
            <Checkbox defaultChecked label="Aceito receber o diagnóstico e materiais por e-mail" />
            <Button size="lg" fullWidth onClick={() => setConfirm(true)} iconRight={<Icon name="arrow-right" size={18} />}>
              Solicitar diagnóstico
            </Button>
          </Card>
        </div>
      </Section>

      <Dialog open={confirm} onClose={() => setConfirm(false)} title="Confirmar solicitação"
        description="Enviaremos o convite de agenda para o e-mail informado."
        footer={<>
          <Button variant="ghost" onClick={() => setConfirm(false)}>Agora não</Button>
          <Button onClick={() => { setConfirm(false); setSent(true); }}>Confirmar</Button>
        </>}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 16, background: "rgba(0,102,255,.08)", border: "1px solid rgba(32,164,255,.25)", borderRadius: "var(--radius-md)" }}>
          <Icon name="calendar-check" size={20} color="var(--primary-light)" />
          <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>Slots disponíveis nos próximos 3 dias úteis.</span>
        </div>
      </Dialog>

      {sent && (
        <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 80 }}>
          <Toast tone="success" title="Solicitação enviada"
            message="Um especialista responde em até 1 dia útil."
            icon={<Icon name="check-circle" size={18} />} onClose={() => setSent(false)} />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ContactScreen });
