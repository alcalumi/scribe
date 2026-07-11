import React from "react";
import SelectComponent from "react-select";
import CreatableSelect from "react-select/creatable";
import type {
  ActionMeta,
  Props as ReactSelectProps,
  SingleValue,
  StylesConfig,
} from "react-select";

export type SelectOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

type BaseProps = {
  value: string | null;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  onChange: (value: string | null, action: ActionMeta<SelectOption>) => void;
  onBlur?: () => void;
  className?: string;
  formatCreateLabel?: (input: string) => string;
};

type CreatableProps = {
  isCreatable: true;
  onCreateOption: (value: string) => void;
};

type NonCreatableProps = {
  isCreatable?: false;
  onCreateOption?: never;
};

export type SelectProps = BaseProps & (CreatableProps | NonCreatableProps);

const baseBackground = "var(--color-surface)";
const hoverBackground =
  "color-mix(in srgb, var(--color-text) 6%, var(--color-surface))";
const optionHoverBackground =
  "color-mix(in srgb, var(--color-accent) 10%, transparent)";
const optionSelectedBackground =
  "color-mix(in srgb, var(--color-accent) 15%, transparent)";
const focusRing =
  "0 0 0 1px var(--color-background), 0 0 0 3px color-mix(in srgb, var(--color-accent) 60%, transparent)";

const selectStyles: StylesConfig<SelectOption, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: 40,
    borderRadius: 10,
    borderColor: state.isFocused
      ? "var(--color-accent)"
      : "var(--color-line)",
    boxShadow: state.isFocused ? focusRing : "none",
    backgroundColor: baseBackground,
    fontSize: "0.875rem",
    color: "var(--color-text)",
    opacity: state.isDisabled ? 0.45 : 1,
    transition:
      "background-color 150ms ease-out, border-color 150ms ease-out, box-shadow 150ms ease-out",
    ":hover": {
      borderColor: state.isFocused
        ? "var(--color-accent)"
        : "var(--color-line)",
      backgroundColor: hoverBackground,
    },
  }),
  valueContainer: (base) => ({
    ...base,
    paddingInline: 10,
    paddingBlock: 6,
  }),
  input: (base) => ({
    ...base,
    color: "var(--color-text)",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--color-text)",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? "var(--color-accent)" : "var(--color-ink-soft)",
    transition: "color 150ms ease-out",
    ":hover": {
      color: "var(--color-accent)",
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "var(--color-ink-soft)",
    transition: "color 150ms ease-out",
    ":hover": {
      color: "var(--color-accent)",
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 30,
    backgroundColor: "var(--color-surface)",
    color: "var(--color-text)",
    borderRadius: 10,
    border: "1px solid var(--color-line)",
    boxShadow: "0 8px 24px rgb(0 0 0 / 0.12)",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? optionSelectedBackground
      : state.isFocused
        ? optionHoverBackground
        : "transparent",
    color: "var(--color-text)",
    cursor: state.isDisabled ? "not-allowed" : base.cursor,
    opacity: state.isDisabled ? 0.45 : 1,
    transition: "background-color 150ms ease-out",
  }),
  placeholder: (base) => ({
    ...base,
    color: "var(--color-ink-soft)",
  }),
};

export const Select: React.FC<SelectProps> = React.memo(
  ({
    value,
    options,
    placeholder,
    disabled,
    isLoading,
    isClearable = true,
    onChange,
    onBlur,
    className = "",
    isCreatable,
    formatCreateLabel,
    onCreateOption,
  }) => {
    const selectValue = React.useMemo(() => {
      if (!value) return null;
      const existing = options.find((option) => option.value === value);
      if (existing) return existing;
      return { value, label: value, isDisabled: false };
    }, [value, options]);

    const handleChange = (
      option: SingleValue<SelectOption>,
      action: ActionMeta<SelectOption>,
    ) => {
      onChange(option?.value ?? null, action);
    };

    const sharedProps: Partial<ReactSelectProps<SelectOption, false>> = {
      className,
      classNamePrefix: "app-select",
      value: selectValue,
      options,
      onChange: handleChange,
      placeholder,
      isDisabled: disabled,
      isLoading,
      onBlur,
      isClearable,
      styles: selectStyles,
    };

    if (isCreatable) {
      return (
        <CreatableSelect<SelectOption, false>
          {...sharedProps}
          onCreateOption={onCreateOption}
          formatCreateLabel={formatCreateLabel}
        />
      );
    }

    return <SelectComponent<SelectOption, false> {...sharedProps} />;
  },
);

Select.displayName = "Select";
