Single-choice control; always controlled — hold the selected value in the parent.

```jsx
{["Serviço", "E-commerce", "Indústria"].map(v => (
  <Radio key={v} name="segmento" value={v} label={v}
         checked={seg === v} onChange={setSeg} />
))}
```

Selected shows a blue-gradient dot inside a blue ring. For 2–3 short options prefer this over a Select.
