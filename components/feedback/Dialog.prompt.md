Modal over a blurred dark scrim. The panel is `surface-elevated` with the 24px premium radius — no glass here, modals stay solid and readable.

```jsx
<Dialog open={open} onClose={close} title="Agendar diagnóstico"
        description="15 minutos, sem compromisso."
        footer={<><Button variant="ghost" onClick={close}>Agora não</Button><Button>Confirmar</Button></>}>
  <Input label="WhatsApp" placeholder="(11) 90000-0000" />
</Dialog>
```

Positions itself absolutely inside the nearest positioned ancestor — put `position:relative` on the screen root when embedding in a mock.
