type Props = {
  children: React.ReactNode;
};

export const MenuItem = ({ children }: Props) => {
  return <li className="mr-4">{children}</li>;
};
