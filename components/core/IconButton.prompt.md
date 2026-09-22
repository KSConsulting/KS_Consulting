Square single-glyph button for toolbars, sliders and dismiss affordances; always pass `label` since there is no visible text.

```jsx
<IconButton label="Próximo" icon={<Icon name="arrow-right" size={18} />} />
<IconButton variant="neon" size="lg" label="Play" icon={<Icon name="play" />} />
```

Same variant vocabulary as Button (`primary`/`secondary`/`neon`/`ghost`); sizes are 36/44/52px square with the 12px button radius.
