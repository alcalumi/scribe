# Scribe — Identidad de marca

> **Scribe** — dictado por voz, privado y precioso, para Mac y Windows.
> Tagline: **«Habla. Ya está escrito.»**

## La idea

Un escriba era la persona que escribía lo que otros decían: culto, discreto,
preciso, siempre presente y nunca protagonista. Scribe es eso, hecho software.
Escuchas el clic de un atajo, hablas, y el texto aparece donde estaba el cursor.
Nada sale de tu máquina: la transcripción ocurre en local, siempre.

La marca vive en la metáfora de la **papelería de lujo**: porcelana, papel de
carta, tinta estilográfica, lacre. Digital por fuera, analógico por dentro.

## Personalidad

- **Discreto**: Scribe no interrumpe, no notifica, no pide protagonismo.
- **Culto sin pedantería**: sabe de tipografía y de silencios; no da lecciones.
- **Preciso**: promete poco y cumple. Sin "revoluciones" ni "10x".
- **Cálido**: cercano, con humor fino. Nunca corporativo, nunca influencer.

Lo que Scribe **no es**: una "solución de productividad impulsada por IA".
Jamás usamos: _revolucionario, disruptivo, potencia tu flujo, lleva X al
siguiente nivel, solución líder_. La palabra "IA" solo aparece si es necesaria
para explicar algo técnico.

## Voz y tono (español)

- Tuteo siempre. Frases cortas. Verbos antes que adjetivos.
- Se explica como a un amigo listo: sin tecnicismos gratuitos, sin infantilizar.
- El humor es de trazo fino y aparece en los márgenes (estados vacíos, FAQ),
  nunca en mensajes de error ni en asuntos de privacidad.
- La privacidad se cuenta con hechos, no con miedo: «Tu voz no sale de tu
  ordenador. No porque lo prometamos: porque no hay servidor al que enviarla.»

| ❌ No                                                        | ✅ Sí                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| «¡Desbloquea tu productividad con dictado impulsado por IA!» | «Escribe a la velocidad a la que piensas.»                                      |
| «Error 403: permiso denegado»                                | «macOS aún no nos deja escribir por ti. Se arregla en Ajustes → Accesibilidad.» |
| «Suscríbete para acceder a funciones premium»                | «Se compra una vez. Es tuyo para siempre.»                                      |

## Nombre

**Scribe**, siempre en inglés, siempre con S mayúscula, nunca traducido.
El binomio de descarga es «Scribe para Mac» / «Scribe para Windows».

## Símbolo

El **plumín** (`brand/scribe-mark.svg`): silueta de plumín estilográfico con
respiradero y hendidura que parte la punta en dos gavilanes. Los recortes son
transparentes: la marca deja respirar el fondo, como la tinta deja respirar el
papel.

- Icono de app: plumín en tinta sobre baldosa de porcelana (`icon-source.svg`).
- Bandeja del sistema: silueta monocroma template (`tray-template.svg`).
- Tamaño mínimo del plumín: 14 px de alto. Zona de respeto: ½ de su anchura.
- El wordmark se compone en EB Garamond regular, «Scribe», sin tracking añadido.

## Paleta «Porcelana»

La calidez la ponen la tipografía y los acentos; el fondo es porcelana casi
neutra, no crema. El modo oscuro es **el tintero**: azul-negro de tinta.

| Token        | Claro                     | Oscuro                    | Uso                                             |
| ------------ | ------------------------- | ------------------------- | ----------------------------------------------- |
| `background` | `oklch(0.9651 0.0045 84)` | `oklch(0.2075 0.012 262)` | fondo                                           |
| `surface`    | `oklch(0.9832 0.0028 84)` | `oklch(0.245 0.013 262)`  | tarjetas, paneles                               |
| `text`       | `oklch(0.235 0.011 55)`   | `oklch(0.925 0.007 84)`   | tinta (texto)                                   |
| `ink-soft`   | `oklch(0.475 0.014 60)`   | `oklch(0.71 0.012 80)`    | texto secundario                                |
| `line`       | `oklch(0.885 0.007 80)`   | `oklch(0.315 0.012 262)`  | filos de 1 px                                   |
| `accent`     | `oklch(0.385 0.055 255)`  | `oklch(0.5 0.07 252)`     | tinta estilográfica: acción primaria, selección |
| `wax`        | `oklch(0.545 0.155 35)`   | `oklch(0.64 0.14 35)`     | **lacre**: grabando, en vivo                    |
| `brass`      | `oklch(0.62 0.085 85)`    | `oklch(0.72 0.08 85)`     | latón: detalles mínimos, muy escaso             |

Regla: el acento aparece en acciones primarias, selección y estado; nunca como
decoración. El lacre (`wax`) es exclusivo del estado «grabando/en vivo»: cuando
el usuario ve rojo lacre, Scribe está escuchando. Esa asociación es sagrada.

## Tipografía

- **EB Garamond** (variable + itálica): voz de la marca. Titulares de landing,
  momentos de bienvenida, el wordmark. Papelería grabada, no "serif de moda".
- **Hanken Grotesk** (variable): todo el UI de la app y el cuerpo de la landing.
  Humanista, cálida, invisible.
- En la app manda Hanken; Garamond solo en 2-3 momentos de marca (bienvenida
  del onboarding, cabecera de «Acerca de»). Nunca en botones, labels o datos.

## Buyer persona

Diseñadores, developers, escritores y fundadores hispanohablantes (25-45) que
usan Mac o Windows de gama alta, pagan Things/Raycast/Linear sin pestañear,
odian las suscripciones de $12/mes y desconfían de enviar su voz a la nube.
El test de éxito: lo ven y dicen **«esto es para mí»**; lo usan un día y el
teclado pasa a ser el plan B.

## Origen

Scribe es un fork comercial de [Handy](https://github.com/cjpais/Handy)
(MIT, de CJ Pais). La atribución se mantiene en LICENSE y README. Ser código
abierto no es un pie de página: es el argumento de privacidad — _auditable,
no prometido_.
