import Container from "@/components/container";
import TypoBody from "@/components/typo/typo-body";
import Box from "@/components/box";
import TypoTitle from "@/components/typo/typo-title";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_EMAIL_LINK, CONTACT_MAP_LINK, CONTACT_PHONE, CONTACT_PHONE_LINK } from "@/helpers/data";
import CtaButton from "@/components/cta-button";


export default function SectionContact() {
    return (
        <Container className="flex flex-col lg:flex-row gap-12 items-center justify-between" id="kontakt">
            <div className="flex flex-col gap-12 text-center lg:text-left">
                <header>
                    <TypoTitle Element="h2">
                        Připraveni na změnu?
                    </TypoTitle>
                </header>
                <TypoBody className="text-gray-500 max-w-[50ch]">
                    Domluvte si úvodní konzultaci a zjistěte, jak vám můžeme pomoci na vaší cestě k osobnímu růstu a úspěchu.
                </TypoBody>
            </div>

            <Box theme="gray" className="flex flex-col items-center gap-2">
                <TypoBody Element="a" href={CONTACT_EMAIL_LINK} className="font-bold hover:underline gtm-contact">{CONTACT_EMAIL}</TypoBody>
                <TypoBody Element="a" href={CONTACT_PHONE_LINK} className="hover:underline gtm-contact">{CONTACT_PHONE}</TypoBody>

                <TypoBody
                    Element="a"
                    href={CONTACT_MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-[30ch] hover:underline gtm-find-location"
                >
                    {CONTACT_ADDRESS}
                </TypoBody>

                <CtaButton className="text-nowrap mt-4" />
            </Box>

        </Container>
    )
}