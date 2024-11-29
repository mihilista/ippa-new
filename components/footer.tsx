import { CONTACT_EMAIL, CONTACT_EMAIL_LINK, CONTACT_PHONE, CONTACT_PHONE_LINK } from "@/helpers/data";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import TypoBody from "@/components/typo/typo-body";
import imageLogo from "@/public/images/logo-light.png";
import { FOOTER_LINKS } from "@/helpers/links";
import SvgLogo from "./svg/svg-logo";

// const currentYear = new Date().getFullYear();

export default function Footer() {

    return (
        <footer className="bg-blue-700 text-gray-400">
            <Container Element="div"
                className="py-10 px-20 flex flex-col gap-12 items-center text-center"
            >
                <SvgLogo className="text-blue-400 w-20" />

                <TypoBody>
                    Institut psychologické a personální analýzy (IPPA)<br />
                    Váš partner pro osobní a profesní růst od roku 1993
                </TypoBody>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {FOOTER_LINKS.map((link, index) => (
                        <Link href={link.href} key={`Footer Link: ${index}`}
                            className="text-white hover:underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-10">
                    <a href={CONTACT_EMAIL_LINK}
                        className="text-gray-400 hover:text-white gtm-contact">{CONTACT_EMAIL}</a>
                    <a href={CONTACT_PHONE_LINK}
                        className="text-gray-400 hover:text-white gtm-contact">{CONTACT_PHONE}</a>
                </div>


            </Container>
        </footer>
    )
}