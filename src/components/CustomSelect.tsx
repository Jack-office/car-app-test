import { CustomSelectProps } from '@/interfaces/backend';
import React from 'react';

const CustomSelect = ({
  id,
  value,
  onChange,
  options,
  placeholder
}: CustomSelectProps) => {
  return (
    <select
      id={id}
      value={value as string}
      onChange={(e) => onChange(e.target.value as string)}
  className="border p-2 rounded bg-gray-100 text-gray-900"
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
