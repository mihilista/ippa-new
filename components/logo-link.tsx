'use client';

import SvgLogo from "@/components/svg/svg-logo";
import { cn, scrollToTop } from "@/helpers/utils";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";

type LogoLinkProps = {
    className?: string;
}

export default function LogoLink({ className }: LogoLinkProps) {
    const pathname = usePathname();

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            scrollToTop();
        }
    };

    return (
        <Link href="/"
            className={cn('inline-flex', className)}
            onClick={handleLogoClick}
            aria-label={pathname === '/' ? "Jít zpět nahoru" : "Jít na úvodní stránku"}
        >
            <SvgLogo className="w-full" />
        </Link>
    )
}