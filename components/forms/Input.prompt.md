48px text field on a 3%-white fill with a 10px radius; the border goes blue with a focus ring on focus, red on error.

```jsx
<Input label="E-mail corporativo" placeholder="voce@empresa.com.br"
       icon={<Icon name="mail" size={18} />} hint="Resposta em até 1 dia útil" />
```

Labels are sentence case, 14px, secondary grey. Pass `error` to override the hint.
