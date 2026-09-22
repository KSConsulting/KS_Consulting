View switcher. `underline` for page-level sections, `pill` for compact in-card filters.

```jsx
<Tabs items={["Todos", "Tráfego pago", "SEO", "Social"]} onChange={setFilter} />
<Tabs variant="pill" items={["Mensal", "Anual"]} defaultValue="Anual" />
```

Active tab: white text plus a 2px blue underline (or a blue-tinted pill). Inactive stays muted grey.
