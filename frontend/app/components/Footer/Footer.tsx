import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="bg-gray-300 text-stone-900 p-4">
      <ul className="flex">
        <li className="mr-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
