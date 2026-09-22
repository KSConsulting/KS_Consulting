Glass notification with a coloured status rail on the left edge (a 3px rail — not a full coloured border).

```jsx
<Toast tone="success" title="Solicitação enviada"
       message="Um especialista responde em até 1 dia útil." onClose={dismiss} />
```

360px wide, auto-dismiss after ~5s in real use. Success uses the neon lime; info uses cyan.
