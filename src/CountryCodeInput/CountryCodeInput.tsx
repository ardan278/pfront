import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Input,
  } from '@headlessui/react';
  import classNames from 'classnames';
  import { FC } from 'react';
  
  import { Icon } from '../Icon.tsx';
  import { CountryConfig } from './../countryList.ts';
  import { useCountryFilter } from './useCountryFilter.ts';
  import { useCountrySelect } from './useCountrySelect.ts';
  
  const ANCHOR_PROP = { to: 'bottom start' as const, gap: '12px' };
  
  export type Props = {
    /**
     * Provide a list of countries to render
     */
    countryList: CountryConfig[];
    /**
     * Set selected country code value
     */
    value: CountryConfig['code'];
    /**
     * Callback to capture selected country changes
     */
    onChange: (value?: CountryConfig['code']) => void;
  };
  
  export const CountryCodeInput: FC<Props> = ({
    countryList,
    value,
    onChange,
  }) => {
    // country list filter logic
    const { filter, setFilter, filteredList } = useCountryFilter(countryList);
  
    // country list selection logic
    const { selectedFlag, handleSelect, selected } = useCountrySelect({
      onChange,
      countryList,
      value,
    });
  
    return (
      <div className="w-24">
        <Listbox value={selected} onChange={handleSelect}>
          <ListboxButton
            className={classNames(
              'relative w-full rounded-md bg-stone-100 px-2 py-1.5 text-sm/6 text-black',
              'flex items-center gap-1',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
            )}
          >
            <span className="text-xl">{selectedFlag}</span>
            <span className="ml-auto grow-0">{selected}</span>
  
            <Icon
              className="group pointer-events-none size-3.5 shrink-0 text-black/60"
              name="caret-down"
            />
          </ListboxButton>
          <ListboxOptions
            anchor={ANCHOR_PROP}
            transition
            className={classNames(
              'w-56 rounded-md border border-stone-300 bg-stone-100 focus-visible:outline-none',
              'flex flex-col',
              'origin-top transition duration-200 ease-in data-[closed]:scale-95 data-[closed]:opacity-0',
              'shadow-md shadow-black/20'
            )}
          >
            {countryList.length > 5 && (
              <div className=" border-b-2 border-b-black/10 p-2">
                <Input
                  value={filter}
                  onChange={setFilter}
                  placeholder="Country name"
                  className={classNames(
                    'max-w-full rounded-full bg-stone-200 px-4 py-1 text-sm/6 text-black ',
                    'focus:bg-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                  )}
                />
              </div>
            )}
            <div className="max-h-48 grow overflow-auto">
              {filteredList.map(({ code, flag, name }) => (
                <ListboxOption
                  key={code}
                  value={code}
                  className="group flex cursor-pointer select-none items-center gap-1 p-1.5 data-[focus]:bg-black/10"
                >
                  <div className="size-4">
                    <Icon
                      className="invisible size-4 text-black group-data-[selected]:visible"
                      name="check"
                    />
                  </div>
                  <span className="text-xl/5">{flag}</span>
                  <div className="w-9 shrink-0 text-right text-sm/6 tabular-nums text-black">
                    {code}
                  </div>
                  <div className="truncate text-sm/6 text-black/65 group-data-[hover]:text-black">
                    {name}
                  </div>
                </ListboxOption>
              ))}
              {filteredList.length === 0 && (
                <div className="py-1.5 text-center text-sm/6 text-black/65">
                  No results.
                </div>
              )}
            </div>
          </ListboxOptions>
        </Listbox>
      </div>
    );
  };
  