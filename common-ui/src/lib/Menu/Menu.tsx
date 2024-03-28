type Props = {
  children: React.ReactNode;
};

export const Menu = ({ children }: Props) => {
  return <ul className="flex">{children}</ul>;
};
