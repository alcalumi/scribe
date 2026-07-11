// Captura la UI real (bundle de dist/) con backend Tauri mockeado.
// Uso: bun shot-app.ts <out.png> <light|dark> [width] [height]
import { chromium } from "playwright";

const [out, scheme = "light", w = "1280", h = "860"] = process.argv.slice(2);

const SETTINGS = {
  settings_schema_version: 3,
  onboarding_completed: true,
  theme: scheme,
  app_language: "es",
  selected_language: "es",
  push_to_talk: false,
  audio_feedback: true,
  audio_feedback_volume: 0.5,
  sound_theme: "marimba",
  start_hidden: false,
  autostart_enabled: true,
  update_checks_enabled: true,
  show_whats_new_on_update: true,
  whats_new_last_seen_version: "1.0.0",
  selected_model: "parakeet-tdt-0.6b-v3",
  always_on_microphone: false,
  selected_microphone: null,
  translate_to_english: false,
  debug_mode: false,
  log_level: "info",
  custom_words: [],
  model_unload_timeout: "min_5",
  history_limit: 100,
  recording_retention_period: "forever",
  paste_method: "paste",
  clipboard_handling: "dont_modify",
  auto_submit: false,
  post_process_enabled: false,
  mute_while_recording: false,
  append_trailing_space: true,
  experimental_enabled: false,
  lazy_stream_close: false,
  keyboard_implementation: "tauri",
  show_tray_icon: true,
  vad_enabled: true,
  overlay_style: "Minimal",
  bindings: {},
};

const MODELS = [
  {
    id: "parakeet-tdt-0.6b-v3", name: "Parakeet V3", description: "Rápido y preciso.",
    filename: "parakeet", source: "Local", size_mb: 610, is_downloaded: true,
    is_downloading: false, partial_size: 0, is_directory: true, engine_type: "Parakeet",
    accuracy_score: 8, speed_score: 9, supports_translation: false, is_recommended: true,
    supported_languages: ["es", "en"], supports_language_selection: false, is_custom: false,
    supports_streaming: true, supports_language_detection: true,
  },
  {
    id: "whisper-large-v3-turbo", name: "Whisper Large Turbo", description: "El más preciso. Más de 90 idiomas.",
    filename: "whisper-lt", source: "Local", size_mb: 1600, is_downloaded: false,
    is_downloading: false, partial_size: 0, is_directory: false, engine_type: "TranscribeCpp",
    accuracy_score: 10, speed_score: 6, supports_translation: true, is_recommended: false,
    supported_languages: ["es", "en"], supports_language_selection: true, is_custom: false,
    supports_streaming: false, supports_language_detection: true,
  },
];

console.error("[1] launch"); const b = await chromium.launch(); console.error("[2] launched");
const p = await b.newPage({
  viewport: { width: +w, height: +h },
  deviceScaleFactor: 2,
  colorScheme: scheme === "dark" ? "dark" : "light",
});
p.on("pageerror", (e) => console.error("PAGEERROR:", String(e).slice(0, 200)));

await p.addInitScript(
  ({ SETTINGS, MODELS }) => {
    (window as any).__TAURI_OS_PLUGIN_INTERNALS__ = {
      platform: "macos", arch: "aarch64", family: "unix", os_type: "macos",
      version: "26.0", exe_extension: "", eol: "\n",
    };
    (window as any).__TAURI_INTERNALS__ = {
      metadata: { currentWindow: { label: "main" }, currentWebview: { label: "main", windowLabel: "main" } },
      plugins: {},
      transformCallback: (cb: any) => Math.floor(Math.random() * 1e9),
      convertFileSrc: (x: string) => x,
      invoke: (() => {
        const cache: Record<string, any> = {};
        const compute = (cmd: string) => {
        if (cmd === "get_settings") return SETTINGS;
        if (cmd === "plugin:autostart|is_enabled") return true;
        if (/get_model_load_status/.test(cmd)) return { is_loaded: true, current_model: "parakeet-tdt-0.6b-v3" };
        if (/get_current_model/.test(cmd)) return "parakeet-tdt-0.6b-v3";
        if (/model/.test(cmd) && /get|list|available/.test(cmd)) return MODELS;
        if (/microphone|device|output/.test(cmd)) return [{ index: "0", name: "Micrófono del MacBook", is_default: true }];
        if (/language/.test(cmd)) return ["es", "en"];
        if (/history/.test(cmd)) return [];
        if (/binding/.test(cmd)) return {};
        if (/^(is_|has_|check_)/.test(cmd)) return false;
        if (/version/.test(cmd)) return "1.0.0";
        return {};
        };
        return async (cmd: string, _args: any) => {
          if (!(cmd in cache)) cache[cmd] = compute(cmd);
          return cache[cmd];
        };
      })(),
    };
  },
  { SETTINGS, MODELS },
);

console.error("[3] goto"); await p.goto("http://localhost:4300/", { waitUntil: "domcontentloaded", timeout: 15000 }); console.error("[4] goto ok");
await p.waitForTimeout(2600); console.error("[5] settle ok");
await p.addStyleTag({ content: "*,*::before,*::after{animation:none !important;transition:none !important}" });
console.error("[6] style ok"); await p.evaluate(() => (document as any).fonts?.ready); console.error("[7] fonts ok");
await p.screenshot({ path: out, animations: "disabled", caret: "hide", timeout: 15000 });
console.log("ok", out);
await b.close();
