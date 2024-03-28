import { nanoid } from 'nanoid';
import {
  forwardRef,
  type ForwardedRef,
  type ComponentPropsWithRef,
} from 'react';

import { classMerge } from '../utils/cn';

type Props = {
  label: string;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef(
  ({ label, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const id = nanoid();
    return (
      <div className="my-2">
        <label htmlFor={id} className="mr-4">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={classMerge('border rounded-sm border-slate-900')}
          {...rest}
        />
      </div>
    );
  }
);
