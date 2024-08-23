'use client';
import Link from "next/link";
import {NAV_LINKS} from "@/helpers/links";
import clsx from "clsx";
import {ContextState, useGlobalContext} from "@/context/global-context";

export default function MenuMobile() {
    const {burgerMenuActive, setBurgerMenuInactive} = useGlobalContext() as ContextState;

    return (
        <div className={clsx('md:hidden fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-4 z-10 pt-nav bg-blue-600 text-white transition-all duration-500', {
            '-translate-x-1/2 opacity-0 pointer-events-none': !burgerMenuActive,
        })}>
            {NAV_LINKS.map((link, index) => (
                <Link href={link.href}
                      key={`Nav Link: ${index}`}
                      className="text-lg"
                      onClick={setBurgerMenuInactive}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}