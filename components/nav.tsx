'use client';
import Container from "@/components/container";
import LogoLink from "@/components/logo-link";
import MenuDesktop from "@/components/menu-desktop";
import BurgerButton from "@/components/burger-button";
import MenuMobile from "@/components/menu-mobile";
import clsx from "clsx";
import {ContextState, useGlobalContext} from "@/context/global-context";


export default function Nav() {
    const {burgerMenuActive} = useGlobalContext() as ContextState;

    return (
        <>
            <nav className={clsx('text-black fixed top-0 left-0 w-full z-50 transition-all shadow-lg shadow-black/10', {
                'bg-white/70 backdrop-blur text-black': !burgerMenuActive
            })}>
                <Container Element="div"
                           className="flex items-center justify-between py-3 md:py-4"
                >
                    <LogoLink/>

                    <MenuDesktop/>

                    <BurgerButton/>

                </Container>
            </nav>
            <MenuMobile/>
        </>
    )
}