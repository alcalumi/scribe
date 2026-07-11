import React from "react";
import { useTranslation } from "react-i18next";
import {
  Cog,
  FlaskConical,
  History,
  Info,
  Sparkles,
  Cpu,
  SlidersHorizontal,
} from "lucide-react";
import { useSettings } from "../hooks/useSettings";
import {
  GeneralSettings,
  AdvancedSettings,
  HistorySettings,
  DebugSettings,
  AboutSettings,
  PostProcessingSettings,
  ModelsSettings,
} from "./settings";

export type SidebarSection = keyof typeof SECTIONS_CONFIG;

/**
 * Plumín Scribe — inlined from brand/scribe-mark.svg (single path,
 * fill-rule evenodd: breather hole and slit are transparent cutouts).
 */
const ScribeMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M256 470 C 236 416 198 372 176 318 C 158 276 146 240 146 204 C 146 160 150 122 166 106 C 190 86 222 80 256 80 C 290 80 322 86 346 106 C 362 122 366 160 366 204 C 366 240 354 276 336 318 C 314 372 276 416 256 470 Z M250 271.4 A30 30 0 1 1 262 271.4 L258.5 448 L256 460 L253.5 448 Z"
    />
  </svg>
);

interface IconProps {
  width?: number | string;
  height?: number | string;
  size?: number | string;
  className?: string;
  [key: string]: any;
}

interface SectionConfig {
  labelKey: string;
  icon: React.ComponentType<IconProps>;
  component: React.ComponentType;
  enabled: (settings: any) => boolean;
}

export const SECTIONS_CONFIG = {
  general: {
    labelKey: "sidebar.general",
    icon: SlidersHorizontal,
    component: GeneralSettings,
    enabled: () => true,
  },
  models: {
    labelKey: "sidebar.models",
    icon: Cpu,
    component: ModelsSettings,
    enabled: () => true,
  },
  advanced: {
    labelKey: "sidebar.advanced",
    icon: Cog,
    component: AdvancedSettings,
    enabled: () => true,
  },
  history: {
    labelKey: "sidebar.history",
    icon: History,
    component: HistorySettings,
    enabled: () => true,
  },
  postprocessing: {
    labelKey: "sidebar.postProcessing",
    icon: Sparkles,
    component: PostProcessingSettings,
    enabled: (settings) => settings?.post_process_enabled ?? false,
  },
  debug: {
    labelKey: "sidebar.debug",
    icon: FlaskConical,
    component: DebugSettings,
    enabled: (settings) => settings?.debug_mode ?? false,
  },
  about: {
    labelKey: "sidebar.about",
    icon: Info,
    component: AboutSettings,
    enabled: () => true,
  },
} as const satisfies Record<string, SectionConfig>;

interface SidebarProps {
  activeSection: SidebarSection;
  onSectionChange: (section: SidebarSection) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const { t } = useTranslation();
  const { settings } = useSettings();

  const availableSections = Object.entries(SECTIONS_CONFIG)
    .filter(([_, config]) => config.enabled(settings))
    .map(([id, config]) => ({ id: id as SidebarSection, ...config }));

  return (
    <nav className="flex flex-col w-44 h-full shrink-0 border-e border-line bg-background">
      {/* Wordmark — EB Garamond, the only serif moment in the app chrome */}
      <div className="flex items-center gap-2 px-4 pt-5 pb-4">
        <ScribeMark className="h-[19px] w-[19px] shrink-0 text-text" />
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <span className="font-serif text-xl leading-none text-text translate-y-[1px]">
          Scribe
        </span>
      </div>
      <div className="flex flex-col gap-0.5 mx-2 pt-3 border-t border-line">
        {availableSections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              aria-current={isActive ? "page" : undefined}
              className={`flex gap-2.5 items-center px-2.5 py-2 w-full rounded-lg text-start cursor-pointer transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-ink-soft hover:bg-text/5 hover:text-text active:bg-text/10"
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              <Icon size={16} className="shrink-0" aria-hidden="true" />
              <span
                className="text-sm font-medium truncate"
                title={t(section.labelKey)}
              >
                {t(section.labelKey)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
