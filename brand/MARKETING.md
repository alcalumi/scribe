# Scribe — Estrategia go-to-market

> Documento interno. Complementa `brand/BRAND.md` (voz e identidad) y
> `brand/PRICING.md` (precio). Fecha: julio 2026, lanzamiento v1.0.

## 1. El mercado, en una tabla

| Producto                       | Precio                    | Local/Nube | Plataformas              | Punto débil                                 |
| ------------------------------ | ------------------------- | ---------- | ------------------------ | ------------------------------------------- |
| Wispr Flow                     | $15/mes                   | Nube       | Mac, Windows             | Suscripción cara; privacidad cuestionada    |
| Superwhisper                   | $8.49/mes o $249 lifetime | Local      | Solo Mac                 | Buggy; lifetime carísimo                    |
| MacWhisper                     | €59 único                 | Local      | Solo Mac                 | Transcriptor de ficheros, no dictado fluido |
| VoiceInk                       | $25–49 único              | Local      | Solo Mac (Apple Silicon) | Estética funcional; sin Windows             |
| Aqua Voice                     | $10/mes                   | Nube       | Mac, Windows             | Solo nube                                   |
| Monologue                      | $144/año                  | Nube       | Solo Mac                 | Suscripción; sin Windows                    |
| BetterDictation                | $39 único                 | Local      | Solo Mac                 | Marketing flojo; poca tracción              |
| Dictado nativo (Apple/Windows) | Gratis                    | Mixto      | Nativo                   | Malo con acentos y puntuación               |

**El hueco**: pago único + 100 % local + Mac **y** Windows + diseño cuidado +
español-first. Nadie cubre las cinco casillas. Scribe las cubre todas.

Quejas recurrentes del sector (reviews, Reddit, X): fatiga de suscripción,
desconfianza de enviar la voz a la nube, bugs y latencia, soporte
inexistente, y mal rendimiento fuera del inglés. Cada queja es un argumento
de venta nuestro.

## 2. Posicionamiento y mensaje central

**Posicionamiento**: Scribe es el dictado por voz privado y bien hecho para
profesionales hispanohablantes en Mac y Windows. Se compra una vez.

**Mensaje central**: «Habla. Ya está escrito.»

Tres frases de apoyo, en orden de importancia:

1. **Privacidad como hecho, no como promesa.** «Tu voz no sale de tu
   ordenador. No porque lo prometamos: porque no hay servidor al que
   enviarla.» El código es abierto y auditable.
2. **Anti-suscripción.** «Se compra una vez. Es tuyo para siempre.» 19 € —
   menos que mes y medio de Wispr Flow.
3. **Español de verdad.** Acentos, puntuación, interfaz y soporte en español.
   No una traducción de cortesía.

Lo que NO decimos nunca (ver `BRAND.md`): revolucionario, disruptivo,
impulsado por IA, 10x, lleva tu productividad al siguiente nivel.

## 3. Buyer persona

**«Marta», 34, diseñadora de producto freelance en Valencia.**

- Mac de gama alta (o PC bien montado). Paga Things, Raycast, Linear sin
  pestañear. Odia tener 9 suscripciones de $12/mes.
- Escribe todo el día: Slack, Notion, correos, specs. Su cuello de botella no
  es pensar, es teclear.
- Ha probado el dictado de macOS: se rinde en dos días porque le destroza los
  acentos y no puntúa.
- Desconfía por defecto de mandar su voz (llamadas con clientes, ideas sin
  pulir) a un servidor en EE. UU.
- Decide con los ojos: si la app es fea, no existe.

Variantes del mismo perfil: developer que dicta prompts y mensajes, escritor
o periodista, fundador que responde 80 correos al día, abogado/consultor con
obligaciones de confidencialidad (este último es el más sensible al argumento
local).

**El test de éxito**: lo ve y dice «esto es para mí»; lo usa un día y el
teclado pasa a ser el plan B.

## 4. Los 3 diferenciales

1. **100 % local con código auditable.** Ni Wispr Flow ni Aqua ni Monologue
   pueden decirlo. Los que sí son locales (VoiceInk, Superwhisper) no lo
   convierten en argumento central ni lo respaldan con código abierto.
2. **Pago único con Mac y Windows.** Todos los pagos únicos del mercado son
   solo-Mac. Windows es el 70 % del parque de PCs profesionales en España y
   LATAM; ahí solo compite Wispr Flow (suscripción, nube).
3. **Español-first con diseño precioso.** Todo el sector trata el español
   como idioma secundario y a los hispanohablantes como mercado secundario.
   Interfaz, onboarding, soporte, landing y marketing nativos en español, con
   una estética («Porcelana») que aguanta la comparación con Monologue.

## 5. Canales (hispanohablantes primero)

Por orden de esfuerzo/retorno esperado:

1. **X/Twitter — builders en español.** Cuenta propia de Scribe + cuenta
   personal de Miguel. Build in public: métricas reales, decisiones de
   producto, GIFs de 10 segundos dictando en español con acentos y comas
   perfectas. El GIF es el anuncio.
2. **Comunidades dev hispanas.** Audiencias de Midudev y Mouredev (Discord,
   directos, menciones), Malt para el ángulo freelance. No spamear: aparecer
   con la demo cuando se hable de productividad, dictado o privacidad.
   Objetivo aspiracional: que Midudev lo pruebe en directo.
3. **Newsletters españolas.** Bonilista y Suma Positiva: audiencia exacta
   (profesionales senior, sensibles al craft, anti-humo). Patrocinio o
   mención orgánica; la carta de presentación es la historia («fork comercial
   de un proyecto open source, hecho en España, sin suscripción»).
4. **Product Hunt.** Un martes o miércoles, asset pack cuidado, primera hora
   de la mañana PT. El ángulo para audiencia global: _one-time purchase,
   fully local, Mac + Windows_. PH no da clientes hispanos, da credibilidad y
   backlink.
5. **Reddit.** r/macapps (donde VoiceInk se hizo popular: audiencia probada
   para esta categoría) y comunidades tech en español. Formato: post honesto
   de maker, con la atribución a Handy por delante — a Reddit le gusta la
   transparencia y huele el astroturfing a kilómetros.
6. **TikTok/YouTube Shorts de productividad.** Formato: pantalla partida,
   dictado vs. teclado, 15 segundos, texto apareciendo en tiempo real.
   Volumen y paciencia; es el canal más barato de probar y el más fácil de
   abandonar si no rinde.

Canal de soporte: GitHub Issues + Discussions del repo público. El soporte
rápido y en español ES marketing (queja n.º 1 del sector: soporte
inexistente).

## 6. Plan de lanzamiento — semana 1

**Mecánica**: early access gratis en v1.0 → el pago (19 €) se activa cuando
esté la infraestructura de licencias (ver `PRICING.md`). Mensaje: «Scribe
será de pago (19 €, una vez). Durante el early access es gratis, y quienes lo
prueben ahora tendrán descuento de lanzamiento». Cada descarga gratuita de
hoy es un testimonio, un bug report y un evangelista de mañana.

- **Día 1 (hoy)**: repo público en `github.com/alcalumi/scribe` + release +
  landing con descarga. Hilo de lanzamiento en X (español): la historia del
  fork, el hueco del mercado, el GIF de demo. Post en r/macapps (inglés).
- **Día 2**: post técnico corto («Cómo funciona un dictado 100 % local:
  Whisper + Parakeet en tu máquina») en el blog/landing. Compartir en
  comunidades dev.
- **Día 3-4**: contacto directo con 20-30 personas del perfil Marta
  (followers, conocidos, comunidades) pidiendo prueba honesta y feedback.
  Nada de «influencers»: usuarios reales.
- **Día 5**: iterar sobre el feedback de la semana; publicar changelog
  visible («esto se arregló en 48 h» — el soporte como espectáculo).
- **Fin de semana**: preparar lanzamiento en Product Hunt para la semana 2
  con lo aprendido.

## 7. Métricas de éxito

Semana 1 (early access):

- 500 descargas totales; 200 desde tráfico hispanohablante.
- 40 % de activación (usuarios que completan una transcripción real).
- 20 issues/feedback útiles; tiempo de primera respuesta < 24 h.
- 100 estrellas en GitHub.

Día 90:

- 5.000 descargas acumuladas; lista de correo de early access > 1.500.
- Conversión early access → compra ≥ 10 % cuando se active el pago.
- 250 ventas acumuladas (~4.750 €) — objetivo modesto y honesto para v1.
- NPS informal ≥ 50 en encuesta a compradores; ≥ 30 % de menciones
  espontáneas que citen «privacidad» o «pago único» (señal de que el
  posicionamiento cala).

Regla: si una métrica no cambia ninguna decisión, se deja de medir.

## 8. Roadmap de marketing — 90 días

**Días 1-14 — Encender.**
Lanzamiento (plan de semana 1) + Product Hunt en semana 2. Todo el esfuerzo
en demo, soporte y conversación. Capturar cada testimonio.

**Días 15-45 — Aprender.**

- Activar el pago (19 €) con descuento de early access limitado en tiempo.
- 2 posts técnicos/mes (local vs. nube con datos de latencia; por qué el
  dictado nativo falla en español). SEO en español: «dictado por voz Mac»,
  «alternativa Wispr Flow», «dictado sin suscripción».
- Primer patrocinio de newsletter (Bonilista o Suma Positiva) cuando haya
  testimonios que enseñar.
- Probar TikTok/Shorts con 8-10 vídeos; decidir con datos si sigue.

**Días 46-90 — Consolidar.**

- Doblar en los 2 canales que mejor conviertan; matar el resto sin pena.
- Página de comparativas honestas (Scribe vs. Wispr Flow / VoiceInk /
  Superwhisper) — mencionando lo que ellos hacen mejor; la honestidad es la
  marca.
- Paridad de poder adquisitivo para LATAM (ver `PRICING.md`) + contenido
  dirigido (comunidades dev de México, Argentina, Colombia).
- Programa de recomendación simple para compradores (p. ej. licencia extra o
  descuento para un amigo).
- Retro de los 90 días: qué canal trajo compradores (no descargas), y plan
  del siguiente trimestre sobre esa evidencia.
