import Button from '@/components/button';
import Container from "@/components/container";
import GlowBall from '@/components/glow-ball';
import LogoLink from '@/components/logo-link';
import MadeByAristoclick from '@/components/made-by-aristoclick';
import SvgEmail from '@/components/svg/svg-email';
import SvgPhone from '@/components/svg/svg-phone';
import { CONTACT_ADDRESS, CONTACT_ADDRESS_LINK, CONTACT_EMAIL, CONTACT_EMAIL_LINK, CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/helpers/contacts';

export default function Footer() {

    return (
        <footer className="w-screen overflow-hidden pt-[190vw] md:pt-[80vw] -mt-[190vw] md:-mt-[80vw]">
            <Container as="footer"
                className="relative"
            >
                <GlowBall className="bottom-150 md:bottom-20 -left-[90%] md:left-[30%] w-[190vw] md:w-[80vw] md:max-w-[1300px] aspect-square" />
                <div className="relative flex flex-col items-center">
                    <div className="w-full flex flex-col items-center gap-14">
                        <LogoLink className="w-[143px]" />

                        <p className="text-b2 text-center max-md:max-w-[20ch] text-balance">
                            <strong>
                                Institut psychologické a personální analýzy
                            </strong>
                            <br /><br />
                            Váš partner pro osobnÍ a profesní růst od roku 1993
                            <br /><br />
                            <a href={CONTACT_ADDRESS_LINK} target="_blank" rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                {CONTACT_ADDRESS.city} - {CONTACT_ADDRESS.street}
                            </a>
                        </p>

                        <div className="w-full max-w-[712px] flex flex-col md:flex-row items-center text-center max-md:gap-14">
                            <div className="flex-1">
                                <a href={CONTACT_EMAIL_LINK} className="inline-flex items-center hover:text-blue-400 transition-colors duration-300">
                                    <SvgEmail className="w-6 mr-2 text-blue-400" />
                                    {CONTACT_EMAIL}
                                </a>
                            </div>
                            <div className="flex-1">
                                <a href={CONTACT_PHONE_LINK} className="inline-flex items-center hover:text-blue-400 transition-colors duration-300">
                                    <SvgPhone className="w-6 mr-2 text-blue-400" />
                                    {CONTACT_PHONE}
                                </a>
                            </div>
                        </div>

                        <Button
                            theme="secondary"
                            href="https://ippa.cz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Chci zjistit více o institutu a jeho aktivitách
                        </Button>
                    </div>

                    <div className="w-full border-t border-blue-400 mt-14 pt-14 pb-18 text-center">
                        <MadeByAristoclick />
                    </div>
                </div>
            </Container>
        </footer>
    )
}