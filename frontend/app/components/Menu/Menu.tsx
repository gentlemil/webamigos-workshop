import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Menu as CUMenu, MenuItem } from '@wa/common-ui';

export const Menu = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <CUMenu>
            <MenuItem>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/contact">Contact</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/offer">Job offers</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/offer/add">Create offer</Link>
            </MenuItem>
          </CUMenu>

          <div className="flex items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
};
