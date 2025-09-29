'use client';

import Container from "@/components/container";
import LogoLink from "@/components/logo-link";
import BurgerButton from "@/components/nav/burger-button";
import NavDesktopMenu from "@/components/nav/nav-desktop-menu";
import NavMobileMenu from "@/components/nav/nav-mobile-menu";
import { ContextState, useGlobalContext } from '@/context/global-context';
import { cn } from '@/helpers/utils';
import { useCallback, useEffect, useState } from 'react';

export default function Nav() {
    const { burgerMenuActive } = useGlobalContext() as ContextState;
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 30);
    }, []);

    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <nav className={cn('fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300', {
            'border-transparent': !scrolled && !burgerMenuActive,
            'border-blue-400/20 backdrop-blur-sm bg-black/70': scrolled || burgerMenuActive,
        })}>
            <Container as="div"
                className="relative flex items-center justify-between gap-8 transition-all duration-500 py-7.5"
            >
                <LogoLink className="relative z-50 shrink-0 w-[63px]" />

                <NavDesktopMenu />

                <BurgerButton />
                <NavMobileMenu />
            </Container>
        </nav>
    )
}