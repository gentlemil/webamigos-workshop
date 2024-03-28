import { nanoid } from 'nanoid';
import {
  forwardRef,
  type ForwardedRef,
  type ComponentPropsWithRef,
} from 'react';

import { classMerge } from '../utils/cn';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    // const id = nanoid();
    return (
      <div className="my-2">
        <label htmlFor={label} className="mr-4">
          {label}
        </label>
        <input
          id={label}
          ref={ref}
          className={classMerge('border rounded-sm border-slate-900')}
          {...rest}
        />
        {error && <p className="text-rose-500">{error.message}</p>}
      </div>
    );
  }
);
