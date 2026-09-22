The container for essentially all content blocks; glass by default, `featured` for the one card a section wants you to read first.

```jsx
<Card interactive>
  <MicroLabel index="01" >Performance</MicroLabel>
  <h4>Tráfego pago</h4>
  <p>Campanhas medidas por receita, não por impressão.</p>
</Card>
```

Use `neon` no more than once per section (the lime card in a 3-up row). `interactive` adds the −4px hover lift and blue border; keep it off for static content.
