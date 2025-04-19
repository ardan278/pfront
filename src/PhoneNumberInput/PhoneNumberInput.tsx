import { ChangeEvent, FC, useCallback } from 'react';
import classNames from 'classnames';
import { Input } from '@headlessui/react';
import { format } from '@react-input/mask';
import { useMask } from './useMask.ts';

export type Props = {
  /**
   * Provide an id for the input
   */
  id: string;
  /**
   * Set input mask template. _ character is replaced by phone number digits
   * @example
   * mask = '(___) ___-__-__'
   */
  mask?: string;
  /**
   * Capture phone number changes
   */
  onChange: (value: string) => void;
  /**
   * Set input value
   */
  value: string;
};

export const PhoneNumberInput: FC<Props> = ({
  id,
  mask = '______________',
  onChange,
  value: valueProp,
}) => {
  const { options, hasEmptyMask, inputRef } = useMask({ mask });

  const value = format(valueProp, options);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(format(event.target.value, options));
    },
    [onChange, options]
  );
  return (
    <Input
      placeholder={hasEmptyMask ? 'Phone number' : mask}
      ref={inputRef}
      id={id}
      className={classNames(
        'w-36 rounded-md bg-stone-100 px-2 py-1.5 text-sm/6 tabular-nums text-black',
        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
      )}
      type="tel"
      onChange={handleChange}
      value={value}
    />
  );
};
