import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getVersion } from "@tauri-apps/api/app";
import { openUrl } from "@tauri-apps/plugin-opener";
import { SettingsGroup } from "../../ui/SettingsGroup";
import { SettingContainer } from "../../ui/SettingContainer";
import { Button } from "../../ui/Button";
import { AppDataDirectory } from "../AppDataDirectory";
import { AppLanguageSelector } from "../AppLanguageSelector";
import { ShowWhatsNewOnUpdate } from "../ShowWhatsNewOnUpdate";
import { ThemeSelector } from "../ThemeSelector";
import { LogDirectory } from "../debug";

const SCRIBE_REPO_URL = "https://github.com/alcalumi/scribe";
const HANDY_REPO_URL = "https://github.com/cjpais/Handy";

export const AboutSettings: React.FC = () => {
  const { t } = useTranslation();
  const [version, setVersion] = useState("");

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const appVersion = await getVersion();
        setVersion(appVersion);
      } catch (error) {
        console.error("Failed to get app version:", error);
        setVersion("1.0.0");
      }
    };

    fetchVersion();
  }, []);

  return (
    <div className="max-w-3xl w-full mx-auto space-y-6">
      {/* Brand header — one of the few serif moments allowed in the app */}
      <div className="px-4 pt-2 flex items-baseline gap-3">
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h1 className="font-serif text-2xl font-normal text-text">Scribe</h1>
        {version && (
          <span className="text-sm text-ink-soft tabular-nums">
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <span>v{version}</span>
          </span>
        )}
      </div>

      <SettingsGroup title={t("settings.about.title")}>
        <AppLanguageSelector descriptionMode="tooltip" grouped={true} />
        <ThemeSelector descriptionMode="tooltip" grouped={true} />
        <ShowWhatsNewOnUpdate descriptionMode="tooltip" grouped={true} />

        <SettingContainer
          title={t("settings.about.sourceCode.title")}
          description={t("settings.about.sourceCode.description")}
          grouped={true}
        >
          <Button
            variant="secondary"
            size="md"
            onClick={() => openUrl(SCRIBE_REPO_URL)}
          >
            {t("settings.about.sourceCode.button")}
          </Button>
        </SettingContainer>

        <AppDataDirectory descriptionMode="tooltip" grouped={true} />
        <LogDirectory grouped={true} />
      </SettingsGroup>

      <SettingsGroup title={t("settings.about.acknowledgments.title")}>
        <SettingContainer
          title={t("settings.about.acknowledgments.ggml.title")}
          description={t("settings.about.acknowledgments.ggml.description")}
          grouped={true}
          layout="stacked"
        >
          <div className="text-sm text-ink-soft">
            {t("settings.about.acknowledgments.ggml.details")}
          </div>
        </SettingContainer>

        {/* Attribution to the upstream project Scribe is built on.
            TODO(i18n): move this copy to a locale key (e.g.
            settings.about.acknowledgments.handy) once the locales land. */}
        {/* eslint-disable i18next/no-literal-string */}
        <div className="px-4 py-3 text-sm text-ink-soft">
          Hecho sobre{" "}
          <button
            type="button"
            onClick={() => openUrl(HANDY_REPO_URL)}
            className="text-accent underline underline-offset-2 cursor-pointer transition-colors duration-150 hover:text-accent-strong outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm"
          >
            Handy
          </button>{" "}
          (MIT) — gracias, CJ Pais.
        </div>
        {/* eslint-enable i18next/no-literal-string */}
      </SettingsGroup>
    </div>
  );
};
