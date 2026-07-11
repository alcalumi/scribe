# DESIGN.md — Sistema visual de Scribe («Porcelana»)

Fuente de verdad de tokens: `src/styles/theme.css` (pares claro/oscuro en OKLCH),
registrados como utilidades Tailwind en `src/App.css`. La app sigue el registro
*product*; la landing, el registro *brand*.

## Tokens y utilidades Tailwind

| Utilidad | Rol |
|---|---|
| `bg-background` | fondo de ventana (porcelana / tintero) |
| `bg-surface` | tarjetas, paneles, popovers — un paso más claro que el fondo |
| `text-text` | tinta: texto principal |
| `text-ink-soft` | texto secundario, descripciones, metadatos |
| `border-line` | todos los filos: 1 px, sin excepciones |
| `bg-accent` / `text-accent` | tinta estilográfica: acción primaria, selección, foco |
| `bg-accent-strong` | hover de la acción primaria |
| `bg-wax` / `text-wax` | lacre — SOLO estados «grabando / en vivo / escuchando» |
| `text-brass` | latón: detalle ornamental mínimo (≤1 por pantalla) |
| Legacy: `bg-background-ui` ≙ accent; `logo-primary` ≙ accent-soft; `mid-gray` ≙ gris cálido | no usar en código nuevo |

## Tipografía

- `font-sans` (Hanken Grotesk Variable): **todo** el UI — labels, botones,
  cuerpo, datos. Escala fija rem: 12 / 13 / 15 (base) / 17 / 20 / 24.
- `font-serif` (EB Garamond Variable): SOLO momentos de marca — titular de
  bienvenida del onboarding, cabecera de «Acerca de», wordmark. Prohibida en
  botones, inputs, labels, tablas.
- Pesos Hanken: 400 cuerpo, 500 labels/botones, 600 títulos de sección.

## Forma y elevación

- Radios: `rounded-lg` (10 px) botones e inputs; `rounded-xl` tarjetas;
  `rounded-full` píldoras (overlay, badges).
- Elevación por **filo, no sombra**: `border border-line` + fondo `surface`.
  Popovers/diálogos: además `shadow-lg` discreta. Nada de glassmorphism.
- Prohibido: gradientes en UI, bordes laterales de color >1 px, texto degradado.

## Estados interactivos (todos los componentes)

- hover: fondo `color-mix` 6-8% de tinta, o `accent-strong` en primarios.
- focus-visible: `ring-2 ring-accent/60 ring-offset-1 ring-offset-background`.
- active: 1 tono más profundo que hover.
- disabled: `opacity-45 cursor-not-allowed` (nunca cambiar el layout).
- Grabando: `wax` — punto, onda o borde. Al ver lacre, Scribe escucha.

## Movimiento

- 150-200 ms, `ease-out`. El movimiento comunica estado, nunca decora.
- La única pieza «viva» es la onda de voz del overlay (lacre al grabar).
- `prefers-reduced-motion`: crossfade o nada.

## Microcopy (español)

- Tuteo, frases cortas, sin tecnicismos gratuitos. Ver `brand/BRAND.md`.
- Errores: qué pasó + cómo se arregla, en una línea, sin códigos.
- Los nombres de ajustes describen el efecto, no el mecanismo
  («Arrancar con el sistema», no «Autostart daemon»).

## Landing (registro brand)

- Porcelana luminosa; una sección «tintero» (oscura) como contraste dramático.
- EB Garamond en titulares grandes (clamp ≤ 5.5rem, tracking ≥ -0.02em),
  Hanken en cuerpo. Itálica Garamond para acentos puntuales.
- Imaginería obligatoria: capturas reales de la app + onda de voz SVG animada.
  Nada de bloques de color vacíos ni grids de tarjetas idénticas.
- Sin eyebrows uppercase repetidos, sin métricas-héroe, sin numeración 01/02/03.
