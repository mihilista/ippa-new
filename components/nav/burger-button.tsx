import SvgClose from '@/components/svg/svg-close';
import { ContextState, useGlobalContext } from "@/context/global-context";
import { cn } from '@/helpers/utils';

export default function BurgerButton() {
    const { burgerMenuActive, setBurgerMenuActive, setBurgerMenuInactive } = useGlobalContext() as ContextState;

    return (
        <div className="relative z-10 lg:hidden">
            <button
                className={cn('absolute top-1/2 right-0 inline-flex items-center justify-center gap-1.5 border border-blue-400/20 text-b2 py-1.5 px-3 rounded-full transition-all duration-500', {
                    '-translate-y-full opacity-0 pointer-events-none': !burgerMenuActive,
                    '-translate-y-1/2 delay-600': burgerMenuActive,
                })}
                aria-label="Zavřít menu"
                onClick={setBurgerMenuInactive}
            >
                <SvgClose className="w-4 shrink-0" />
                Zavřít
            </button>
            <button
                className={cn('relative w-16 h-3.5 border-0 outline-0 z-10', {
                    'pointer-events-none': burgerMenuActive,
                })}
                aria-label="Otevřít menu"
                onClick={setBurgerMenuActive}
            >
                <div
                    className={cn('burger-menu-line top-0', {
                        'delay-0': !burgerMenuActive,
                        'translate-y-5 opacity-0 delay-400': burgerMenuActive
                    })}
                />
                <div
                    className={cn('burger-menu-line delay-200 top-1/2', {
                        'translate-y-5 opacity-0': burgerMenuActive
                    })}
                />
                <div
                    className={cn('burger-menu-line top-full', {
                        'delay-400': !burgerMenuActive,
                        'translate-y-5 opacity-0 delay-0': burgerMenuActive,
                    })}
                />
            </button>
        </div>
    )
}