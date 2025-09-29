'use client';

import Container from "@/components/container";
import LogoLink from "@/components/logo-link";
import BurgerButton from "@/components/nav/burger-button";
import NavDesktopMenu from "@/components/nav/nav-desktop-menu";
import NavMobileMenu from "@/components/nav/nav-mobile-menu";
import clsx from "clsx";

export default function Nav() {
    // const { burgerMenuActive } = useGlobalContext() as ContextState;
    // const [scrolled, setScrolled] = useState(false);

    // const handleScroll = useCallback(() => {
    //     setScrolled(window.scrollY > 100);
    // }, []);

    // useEffect(() => {
    //     handleScroll();

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [handleScroll]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <Container as="div"
                className={clsx('relative flex items-center justify-between gap-8 transition-all duration-500 py-7.5', {
                    // 'py-6 lg:py-8': !scrolled || burgerMenuActive,
                    // 'py-4': scrolled && !burgerMenuActive,
                })}
            >
                <LogoLink className="relative z-50 shrink-0 w-[63px]" />

                <NavDesktopMenu />

                <BurgerButton />
                <NavMobileMenu />
            </Container>
        </nav>
    )
}