# Scribe — Precio

> Documento interno. Complementa `brand/MARKETING.md`. Decisión de Miguel:
> **19 € / $19, pago único**. Fecha: julio 2026, lanzamiento v1.0.

## El precio: 19 € / $19, una vez

Se compra una vez. Es tuyo para siempre. Sin suscripción, sin cuenta, sin
«plan pro».

### Por qué 19 € se sostiene

Contra el mercado real:

| Producto        | Precio        | Equivalencia                                                                               |
| --------------- | ------------- | ------------------------------------------------------------------------------------------ |
| Wispr Flow      | $15/mes       | Scribe cuesta ~6 semanas de Wispr Flow. A los 2 meses, Scribe es más barato — para siempre |
| Monologue       | $144/año      | Scribe cuesta el 13 % de UN año                                                            |
| Aqua Voice      | $10/mes       | Scribe se paga en menos de 2 meses                                                         |
| Superwhisper    | $249 lifetime | El lifetime de Scribe cuesta 13 veces menos                                                |
| VoiceInk        | $25–49 único  | Por debajo del favorito de Reddit, y con Windows incluido                                  |
| MacWhisper      | €59 único     | Un tercio del precio, y es dictado fluido, no transcriptor de ficheros                     |
| BetterDictation | $39 único     | La mitad, con mejor diseño y español-first                                                 |
| Dictado nativo  | Gratis        | Nuestro competidor real. 19 € es lo que cuesta que los acentos y las comas funcionen       |

Posición deliberada: **el pago único más barato del mercado**. Podemos
permitírnoslo porque no tenemos coste marginal — la transcripción corre en la
máquina del usuario, no en nuestros servidores. Cada usuario de Wispr Flow
le cuesta dinero a Wispr todos los meses; cada usuario de Scribe nos cuesta
cero. La suscripción ajena financia GPUs en la nube; nuestro pago único
financia desarrollo. Esa asimetría es el foso.

19 € además queda por debajo del umbral de «lo consulto con la almohada»:
es un precio de decisión impulsiva para alguien que paga Things o Raycast
sin pestañear, y deja recorrido para subir en v2 si el producto lo gana.

## Fase 1 — Hoy: early access gratis

El lanzamiento de hoy (v1.0) sale **gratis, como early access**, por tres
razones:

1. No existe aún infraestructura de licencias — no podemos cobrar bien, y
   cobrar mal (PayPal a mano, sin facturas) dañaría la marca más que regalar.
2. Necesitamos volumen de uso real en hardware variado (sobre todo Windows)
   antes de pedir dinero.
3. Los early adopters son el canal: testimonios, bugs, boca a boca.

Mensaje público, sin ambigüedad: «Scribe costará 19 €, pago único. Durante
el early access es gratis, y quienes nos acompañen ahora tendrán descuento
de lanzamiento». Prometer el precio desde el día 1 evita la sensación de
cebo y filtra a la audiencia correcta (anti-suscripción).

Compromiso con los early adopters — y es promesa pública ya hecha en la
landing y en las notas de la v1.0.0, así que es irrevocable: **quien instale
Scribe durante el early access no pagará nunca la 1.x**. Mecanismo: las
instalaciones existentes jamás llevarán gate de licencia en updates 1.x; el
pago de 19 € aplica solo a descargas nuevas desde que se active la venta.
(El descuento adicional de lanzamiento vía lista de correo queda pendiente
de tener captura de email en la landing; hoy no existe.)

## Fase 2 — Siguiente paso: activar el pago

**Infraestructura**: Lemon Squeezy o Paddle, como _merchant of record_ —
ellos gestionan IVA/impuestos por país, facturas y disputas, cosa crítica
vendiendo desde España a toda Hispanoamérica. Ambos soportan claves de
licencia con API de activación/validación. Decidir entre ambos al implementar
(criterios: fricción de checkout en español, comisiones, soporte de PPP);
no bloquea nada hoy.

**Paridad de poder adquisitivo (PPP)**: descuento automático por país para
LATAM, en el rango **50–60 %** (~$8–10). El mercado hispanohablante no es
solo España; un precio único en euros nos dejaría fuera de México, Argentina
o Colombia. Ambas plataformas lo soportan de serie por geolocalización.

**Validación de licencia**: coherente con la marca — activación puntual
(online una vez, 2-3 dispositivos), nunca _phone-home_ periódico ni funciones
degradadas sin conexión. Una app que presume de no tocar la red no puede
exigir internet para arrancar.

## Qué incluye la compra — siempre

- **Todas las actualizaciones 1.x**, sin excepciones ni «pro tiers».
  Novedades mayores (un hipotético 2.0) podrán ser upgrade de pago con
  descuento para clientes; se decidirá entonces, no se promete ahora.
- **2-3 dispositivos** por licencia (el portátil y el sobremesa de la misma
  persona; el número exacto se fija al implementar las licencias, y se
  comunica como «tus ordenadores, no los de tu oficina»).
- **Los modelos de voz**, descargables sin coste — son abiertos.
- **Soporte en español** vía GitHub Issues.
- Sin cuenta obligatoria, sin telemetría, sin recopilar nada.

## Lo que no haremos

- Suscripción, en ninguna variante. Es el diferencial n.º 1; se muere antes
  que traicionarlo.
- «Lifetime deal» inflado tipo $249: el precio ES el lifetime.
- Rebajas permanentes o cupones perpetuos que enseñen a esperar la oferta.
  Descuentos solo con motivo y con fecha (lanzamiento, PPP).
