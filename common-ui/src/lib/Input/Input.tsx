import { nanoid } from 'nanoid';
import { ComponentProps } from 'react';

type Props = {
  label: string;
} & ComponentProps<'input'>;

export const Input = ({ label, ...rest }: Props) => {
  const id = nanoid();
  return (
    <fieldset>
      <label htmlFor={id} className="mr-4">
        {label}
      </label>
      <input id={id} className="border border-slate-900 rounded-sm" {...rest} />
    </fieldset>
  );
};
