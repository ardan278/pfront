import { useCallback, useEffect, useMemo, useState } from 'react';
import { CountryConfig } from '../countryList.ts';

export type Props = {
  /**
   * Provide a full list of countries
   */
  countryList: CountryConfig[];
  /**
   * Selected country code value
   */
  value: CountryConfig['code'];
  /**
   * Callback to capture selected country changes
   */
  onChange: (value?: CountryConfig['code']) => void;
};

export const useCountrySelect = ({ value, onChange, countryList }: Props) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleSelect = useCallback(
    (selectedCode: CountryConfig['code']) => {
      onChange(selectedCode);
      setSelected(selectedCode);
    },
    [onChange]
  );

  const selectedFlag = useMemo(
    () => countryList.find(({ code }) => code === selected)?.flag,
    [countryList, selected]
  );

  return { selected, handleSelect, selectedFlag };
};
