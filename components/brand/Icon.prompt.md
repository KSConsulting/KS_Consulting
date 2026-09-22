Lucide glyph wrapper — the design system's only icon primitive; inherits `currentColor` so it tints with its parent.

```jsx
<Icon name="trending-up" size={22} color="var(--secondary)" />
<Button iconRight={<Icon name="arrow-right" size={18} />}>Começar agora</Button>
```

Stroke weight 1.75 at 20px is the house default; go to 1.5 above 32px. The page must load the Lucide UMD script (see the `.d.ts`).
