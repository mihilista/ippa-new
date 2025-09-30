import Container from "@/components/container";
import SvgEmail from '@/components/svg/svg-email';
import SvgPhone from '@/components/svg/svg-phone';
import { ContextState, useGlobalContext } from "@/context/global-context";
import { CONTACT_EMAIL, CONTACT_EMAIL_LINK, CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/helpers/contacts';
import { NAV_LINKS } from "@/helpers/links";
import { cn } from '@/helpers/utils';
import clsx from "clsx";
import Link from "next/link";

export default function NavMobileMenu() {
    const { burgerMenuActive, setBurgerMenuInactive } = useGlobalContext() as ContextState;

    return (
        <div
            className={clsx('flex lg:hidden fixed top-0 left-0 w-full h-screen bg-black transition-all duration-1000', {
                'opacity-100': burgerMenuActive,
                '-translate-y-20 opacity-0 pointer-events-none': !burgerMenuActive
            })}
        >
            <div className="flex-1 flex flex-col pt-nav pb-15 justify-center">
                <Container className="flex flex-col justify-center items-end gap-15 pb-15">
                    {NAV_LINKS.map((link, index) => (
                        <Link href={link.href}
                            key={`Nav Mobile Link: ${index}`}
                            className={cn('mobile-menu-link', {
                                '': !burgerMenuActive,
                                'active': burgerMenuActive,
                            })}
                            onClick={setBurgerMenuInactive}
                            style={{
                                transitionDelay: `${index * 200 + 500}ms`
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </Container>
                <Container className={cn('transition-all duration-500', {
                    '-translate-y-5 opacity-0': !burgerMenuActive,
                    'delay-1100': burgerMenuActive,
                })}>
                    <div className="border-t border-blue-400 pt-15 flex flex-col gap-15">
                        <a href={CONTACT_EMAIL_LINK} className="inline-flex items-center hover:text-blue-400 transition-colors duration-300">
                            <SvgEmail className="w-6 mr-2 text-blue-400" />
                            {CONTACT_EMAIL}
                        </a>

                        <a href={CONTACT_PHONE_LINK} className="inline-flex items-center hover:text-blue-400 transition-colors duration-300">
                            <SvgPhone className="w-6 mr-2 text-blue-400" />
                            {CONTACT_PHONE}
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    )
}