// Scribe · landing — demo de la píldora, detección de SO y revelado suave.
// Todo es mejora progresiva: sin JS, la página queda completa y legible.

document.documentElement.classList.add("js");

// ── Detección de SO: el botón principal ofrece tu plataforma ──
const RELEASES = "https://github.com/alcalumi/scribe/releases/latest";
const V = "1.0.0";
const A = `https://github.com/alcalumi/scribe/releases/download/v${V}`;
const DL = {
  mac: { href: `${A}/Scribe_${V}_aarch64.dmg`, label: "Descargar para Mac" },
  win: {
    href: `${A}/Scribe_${V}_x64-setup.exe`,
    label: "Descargar para Windows",
  },
};
const esWindows = /Windows/i.test(navigator.userAgent);
const main = document.getElementById("cta-main");
const alt = document.getElementById("cta-alt");
if (main && alt) {
  const [primero, segundo] = esWindows ? [DL.win, DL.mac] : [DL.mac, DL.win];
  main.textContent = primero.label;
  main.href = primero.href;
  alt.textContent = esWindows ? "también para Mac →" : "también para Windows →";
  alt.href = segundo.href;
}

// ── La píldora: escucha (lacre) y escribe ──
const FRASES = [
  "Esto no lo he tecleado: lo he dicho en voz alta.",
  "Apunta: mañana a las nueve, café con Marta.",
  "Responde al correo: me parece bien, lo cierro yo el viernes.",
  "Se acabó pelearse con el autocorrector del móvil.",
];

const pill = document.getElementById("pill");
const typed = document.getElementById("typed-text");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (pill && typed && !reduceMotion) {
  // La demo solo vive mientras se ve: si la píldora sale del viewport o la
  // pestaña se oculta, se pausa (batería, y frames estables para el resto
  // de la página).
  let i = 0;
  let activa = false;
  let cicloEnMarcha = false;
  const espera = (ms) => new Promise((r) => setTimeout(r, ms));

  async function ciclo() {
    if (cicloEnMarcha) return;
    cicloEnMarcha = true;
    while (activa) {
      const frase = FRASES[i % FRASES.length];
      i++;
      typed.textContent = "";
      pill.classList.add("grabando");
      await espera(900); // «escucha» antes de escribir
      for (const ch of frase) {
        if (!activa) break;
        typed.textContent += ch;
        await espera(ch === " " ? 24 : 34 + Math.random() * 40);
      }
      pill.classList.remove("grabando");
      await espera(2600);
    }
    typed.textContent = FRASES[0];
    pill.classList.remove("grabando");
    cicloEnMarcha = false;
  }

  let enViewport = false;
  const demo = pill.closest(".demo");
  const refresca = () => {
    activa = enViewport && document.visibilityState === "visible";
    demo?.classList.toggle("viva", activa);
    if (activa) ciclo();
  };

  const ioDemo = new IntersectionObserver(
    ([e]) => {
      enViewport = e.isIntersecting;
      refresca();
    },
    { threshold: 0.4 },
  );
  ioDemo.observe(pill);
  document.addEventListener("visibilitychange", refresca);
} else if (pill) {
  pill.classList.add("grabando"); // versión estática: onda en lacre, frase completa
}
