# Scribe

**Habla. Ya está escrito.**

Scribe es dictado por voz para Mac y Windows. Pulsas un atajo, hablas, y el
texto aparece donde estaba el cursor — en cualquier aplicación. La
transcripción ocurre entera en tu ordenador; tu voz no sale de tu máquina.

- **100 % local.** No hay servidor al que enviar tu voz. No porque lo
  prometamos: porque no existe.
- **Se compra una vez.** Pago único. Sin suscripción, sin cuenta, sin nube.
- **Mac y Windows.** Apple Silicon e Intel en macOS; Windows x64.
- **Código abierto.** Lo que Scribe hace con tu voz se puede leer, no solo
  creer.

## Descarga

Descarga la última versión desde la
[página de releases](https://github.com/alcalumi/scribe/releases/latest):

- **Scribe para Mac** (`.dmg`)
- **Scribe para Windows** (`.msi`)

Instala, concede los permisos que pide el sistema (micrófono y, en macOS,
accesibilidad) y elige tu atajo. Listo.

## Cómo funciona

1. **Pulsa** tu atajo de teclado (o mantén, si prefieres el modo
   pulsar-para-hablar).
2. **Habla.** Mientras Scribe escucha, verás el punto rojo lacre.
3. **Suelta.** El texto aparece donde estaba el cursor, en la app que estés
   usando.

Funciona en cualquier campo de texto: el editor, el correo, el chat, el
navegador. Scribe no tiene ventana propia que consultar; escribe donde tú ya
estabas escribiendo.

## Privacidad

La privacidad de Scribe no es una promesa de marketing, es una propiedad del
diseño:

- La grabación, la detección de voz y la transcripción se ejecutan en tu
  máquina, siempre. Sin conexión también funciona.
- No hay cuenta, ni telemetría, ni analítica. Scribe no sabe quién eres.
- El código es abierto (MIT). Cualquiera puede auditar qué hace la app con tu
  micrófono — y señalarlo si algo no cuadra.

La única descarga que hace la app son los modelos de voz, una vez, al
configurarlos (ver siguiente sección).

## Bajo el capó

Scribe es una aplicación [Tauri 2](https://tauri.app): backend en Rust
(audio, atajos globales e inferencia) y UI en React + TypeScript + Tailwind.

- **Transcripción**: modelos Whisper (GGML/GGUF, con aceleración por GPU
  cuando la hay) vía `transcribe-cpp`, y **Parakeet V3** (`transcribe-rs`),
  optimizado para CPU y con detección automática de idioma. Ambas familias
  transcriben español con soltura.
- **Detección de voz**: VAD de Silero — el silencio se filtra antes de
  transcribir.
- **Audio y sistema**: `cpal` (E/S de audio), `rdev` (atajos globales),
  `rubato` (remuestreo).

Honestidad técnica: los modelos de voz se descargan, la primera vez, del CDN
del proyecto Handy (`blob.handy.computer`), el proyecto del que Scribe es
fork. Es la misma fuente pública que usa Handy y puedes descargar los
ficheros a mano desde el navegador si trabajas tras un proxy. Una vez
descargados, la transcripción no toca la red.

**Requisitos orientativos**: para los modelos Whisper, un Mac con chip M o un
PC con GPU dedicada van sobrados. Parakeet V3 funciona bien solo con CPU
(Intel de 6.ª generación o equivalente en adelante).

## Compilar desde el código

Necesitas Rust (estable), [Bun](https://bun.sh) y los prerrequisitos de
Tauri:

```bash
git clone https://github.com/alcalumi/scribe.git
cd scribe
bun install
bun run tauri dev    # desarrollo
bun run tauri build  # binario de producción
```

Instrucciones detalladas por plataforma (incluida la resolución de problemas
en Windows y Linux) en [BUILD.md](BUILD.md). Si quieres contribuir, empieza
por [CONTRIBUTING.md](CONTRIBUTING.md).

## Origen y atribución

Scribe es un **fork comercial de [Handy](https://github.com/cjpais/Handy)**,
la aplicación de speech-to-text libre creada por
[CJ Pais](https://github.com/cjpais) y publicada bajo licencia MIT. Handy se
define como «la app de speech-to-text más forkeable» — y Scribe es,
literalmente, eso: un fork que le debe el motor, la arquitectura y buena
parte de su filosofía de privacidad.

Gracias, CJ, y gracias a la comunidad de Handy. Si buscas la versión libre,
gratuita y multiplataforma (incluye Linux), [Handy](https://handy.computer)
sigue ahí y es estupenda.

Scribe usa su propia marca (nombre, logo e iconos) porque la marca Handy no
forma parte de la licencia de su código. Scribe no está afiliado a Handy ni
cuenta con su respaldo.

## Licencia

MIT — ver [LICENSE](LICENSE). El copyright original de CJ Pais se mantiene
junto al de Alcalumi. El código de Scribe es abierto; la marca Scribe
(nombre, logo, iconos) no lo es.
