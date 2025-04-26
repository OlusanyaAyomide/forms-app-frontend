import { useState } from 'react';
import type {
  FieldValues, UseFormSetValue, Path, PathValue,
} from 'react-hook-form';

import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { titleCaseUnderscoreDash } from '@/services/TextServices';

type SelectOption = {
  label: string
  value: string
}
type SelectFieldType<T extends FieldValues> = {
  className?: string;
  error?: string;
  disabled?: boolean
  selectName: Path<T>;
  options: SelectOption[]
  labelText: string;
  setValue: UseFormSetValue<T>; // The function to set the value of the select field
  value: string | number; // The current value of the select field
  showPlaceholder?: boolean;
};

export default function SelectField<T extends FieldValues>({
  className, error, selectName, options, labelText, setValue, value, disabled, showPlaceholder,
}: SelectFieldType<T>) {
  // State to track if the select is focused
  const [isFocused, setIsFocused] = useState(false);

  const generateTriggerDynamicClasses = () => {
    if (isFocused) {
      return 'border-[3px] border-asc-black focus:border-asc-black';
    }
    if (error) {
      return 'border border-asc-error';
    }

    return 'border-[#79747E] border';
  };

  const generateLabelDynamicClasses = () => {
    if (isFocused || value) {
      return 'bg-white text-asc-black -translate-y-[24px] text-sm font-normal';
    }
    if (value) {
      return 'text-asc-black';
    }

    return 'text-[#808080]';
  };

  return (
    <div className={`w-full mb-5 relative ${className} `}>
      <Select
        name={selectName}
        disabled={disabled}
        value={value?.toString()}
        // Handler for when the select box is opened or closed
        onOpenChange={(isOpened) => { setIsFocused(isOpened); }}
        // Handler for when a value is selected, setting the form value
        onValueChange={(selectValue) => {
          setValue(selectName, selectValue as PathValue<T, Path<T>>);
        }}
      >
        <SelectTrigger
          className={`flex relative font-light items-center rounded-md border justify-between cursor-pointer pl-4 pr-3 w-full h-12
            ${disabled && 'disabled:cursor-not-allowed disabled:opacity-50'}
            ${generateTriggerDynamicClasses()}
          `}
        >
          <span className="absolute left-6 opacity-0">{labelText}</span>
          {/* Floating label effect, moves up when focused or has value */}

          {!showPlaceholder && (
            <span className={`px-1 text-base font-light transition-all duration-300
              ${generateLabelDynamicClasses()}
            `}
            >
              {labelText}
            </span>
          )}

          {/* Display the selected value, if any */}
          <SelectValue placeholder={showPlaceholder ? labelText : ' '}>
            {
              // eslint-disable-next-line no-nested-ternary
              value ? (
                <span className="absolute left-[18px] top-3 text-normal font-light">
                  {
                    titleCaseUnderscoreDash(`${value}`)
                  }
                </span>
              )
                : showPlaceholder ? labelText : null
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent sideOffset={10} className="max-h-[280px] min-h-20 border bg-white">
          {/* Map over options to create select items */}
          {options.map((item) => (
            <SelectItem key={item.value.toString()} value={item.value}>
              {
                titleCaseUnderscoreDash(`${item.label}`)
              }
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* Display an error message if there is an error */}
      {error ? <span className="text-asc-error text-sm absolute -bottom-5 left-2">{error}</span> : null}
    </div>
  );
}
