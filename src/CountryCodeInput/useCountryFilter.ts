import { ChangeEvent, useCallback, useState, useEffect } from 'react';

import { CountryConfig } from '../countryList.ts';

export const useCountryFilter = (countryList: CountryConfig[]) => {
  const [filteredList, setFilteredList] = useState(countryList);

  useEffect(() => {
    setFilteredList(countryList);
  }, [countryList]);

  const [filter, setFilterState] = useState('');

  const setFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFilterState(event.target.value);
      const nextCountries = countryList.filter(({ name }) =>
        name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      if (event.target.value !== '') {
        setFilteredList(nextCountries);
      } else {
        setFilteredList(countryList);
      }
    },
    [countryList]
  );

  return { filter, setFilter, filteredList };
};
