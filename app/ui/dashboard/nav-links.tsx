'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  GlobeEuropeAfricaIcon,
  PaperClipIcon,
  CircleStackIcon,
  UserIcon,
  Cog8ToothIcon,
  CubeTransparentIcon,
  MapIcon,
  BuildingOffice2Icon,
  BellIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: "Inbox", href:"/dashboard/Inbox", icon: BellIcon },
  { name: 'Zones', href: '/dashboard/zones', icon: MapIcon },
  { name: 'Upload GIS Data', href: '/dashboard/up-gis-data', icon: GlobeEuropeAfricaIcon },
  { name: "Upload Reports", href:"/dashboard/up-reports", icon: PaperClipIcon },
  { name: "Digital Library", href:"/dashboard/digital-library", icon: CircleStackIcon },
  { name: "Teams & People", href:"/dashboard/people", icon: UserGroupIcon },
  { name: "User Profile", href:"/dashboard/user-profile", icon: Cog8ToothIcon },
  { name: "Role Rights", href:"/dashboard/role-rights", icon: BuildingOffice2Icon },
  { name: "Invoices", href:"/dashboard/invoices", icon: DocumentDuplicateIcon },
  
];

export default function NavLinks() {

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (

          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
          )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          
          </Link>

        );
      })}
    </>
  );
}
