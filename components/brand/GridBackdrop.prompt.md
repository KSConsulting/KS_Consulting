Wrap any full-width section in this instead of setting a flat background — the brand's dark is never `#000`, it is ink + grid + glow.

```jsx
<GridBackdrop glow="both" style={{ padding: "128px 32px" }}>
  <h1>Transforme sua operação em <em>resultado</em></h1>
</GridBackdrop>
```

Grid lines are `rgba(255,255,255,.035)` at 48–64px; the radial glow sits behind the section's most important element. Use `glow="none"` for dense content sections so the light stays meaningful.
