import { type ComponentPropsWithoutRef } from 'react';

type Props = {
  label: string;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({ label, className, ...rest }: Props) => {
  return (
    <button
      className={`rounded-md bg-wa-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};
