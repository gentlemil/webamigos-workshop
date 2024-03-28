import Link from 'next/link';

export const Menu = () => {
  return (
    <div className="bg-gray-300 text-stone-900 p-4">
      <ul className="flex">
        {' '}
        {/* Menu */}
        <li className="mr-4">
          {' '}
          {/* MenuItem */}
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-4">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="mr-4">
          <Link href="/offer/add">Create offer</Link>
        </li>
      </ul>
    </div>
  );
};
