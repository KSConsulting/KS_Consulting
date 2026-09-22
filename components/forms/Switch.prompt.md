48×28 toggle for settings that apply immediately (no Save button).

```jsx
<Switch defaultChecked label="Relatório semanal" />
<Switch tone="neon" label="Anual (–20%)" onChange={setAnnual} />
```

`tone="neon"` when flipping the switch reveals an offer or gain; blue otherwise.
