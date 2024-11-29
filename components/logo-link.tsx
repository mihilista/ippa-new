'use client'
import Link from "next/link";
import Image from "next/image";

import imageLogo from "@/public/images/logo.png";
import { usePathname, useRouter } from 'next/navigation';
import SvgLogo from "./svg/svg-logo";

export default function LogoLink() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (pathname === '/') {
            document.documentElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push('/');
        }
    };

    return (
        <Link href="/"
            className="inline-flex w-[48px] text-blue-600"
            onClick={handleLogoClick}
        >
            <SvgLogo />
            {/* <Image src={imageLogo}
                alt="IPPA"
                className="block"
            /> */}
        </Link>
    )
}