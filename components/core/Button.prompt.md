Primary action control — use `primary` for the main CTA in any section, `secondary` for the paired alternative, and `neon` at most once per screen on a result/opportunity CTA.

```jsx
<Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
  Começar agora
</Button>
<Button variant="secondary">Falar com especialista</Button>
```

Variants: `primary` (blue gradient + hover glow), `secondary` (glass + hairline border, blue border on hover), `neon` (lime fill, dark ink text), `ghost`, `link`. Sizes `sm` 40px / `md` 48px / `lg` 52px. All variants lift 2px on hover; disabled drops to 40% opacity and cancels the lift.
