'use client'

import {ContextState, useGlobalContext} from "@/context/global-context";
import React from "react";
import clsx from "clsx";

export default function BurgerButton() {
    const {burgerMenuActive, toggleBurgerMenu} = useGlobalContext() as ContextState;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleBurgerMenu();
    }

    return (
        <button className="lg:hidden relativd flex items-center justify-center w-[31px] h-[24px] relative border-0 outline-0"
                aria-label={burgerMenuActive ? 'Close menu' : 'Open menu'}
                onClick={handleClick}
        >
            {/*<div className="relative w-[31px] h-[24px] flex">*/}
                <div
                    className={clsx('absolute left-1/2 -translate-x-1/2 w-full h-[3px] rounded-[2px] transition-all duration-500', {
                        'top-0 bg-black': !burgerMenuActive,
                        'top-1/2 rotate-45 -translate-y-1/2 bg-white': burgerMenuActive
                    })}
                />
                <div
                    className={clsx('absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-[3px] bg-black rounded-[2px] transition-all duration-500', {
                        'opacity-0': burgerMenuActive
                    })}
                />
                <div
                    className={clsx('absolute left-1/2 -translate-x-1/2 w-full h-[3px] rounded-[2px] transition-all duration-500', {
                        'bottom-0 bg-black': !burgerMenuActive,
                        'bottom-1/2 -rotate-45 translate-y-1/2 bg-white': burgerMenuActive,
                    })}
                />
            {/*</div>*/}
        </button>
    )
}