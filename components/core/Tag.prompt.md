Filter/category pill. Unlike Badge (a read-only marker) a Tag is interactive: clickable, selectable, optionally removable.

```jsx
<Tag active onClick={() => setFilter("ads")}>Tráfego pago</Tag>
<Tag onRemove={() => drop("seo")}>SEO</Tag>
```

Sentence case, 32px tall, pill radius. Active = blue border with a 14%-opacity blue tint.
