'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import SvgLogo from "./svg/svg-logo";
import { scrollToTop } from '@/helpers/utils';

export default function LogoLink() {
    const pathname = usePathname();

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            scrollToTop();
        };
    }

    return (
        <Link href="/"
            className="inline-flex w-[48px] text-blue-600"
            onClick={handleLogoClick}
        >
            <SvgLogo />
        </Link>
    )
}