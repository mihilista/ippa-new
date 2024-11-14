import Container from "@/components/container";
import TypoSubtitle from "../typo/typo-subtitle";
import TypoBody from "../typo/typo-body";
import Box from "../box";
import Button from "../button";
import TypoTitle from "../typo/typo-title";
import { CONTACTS } from "@/helpers/data";


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

            <div className="">
                <Box theme="gray" className="flex flex-col items-center gap-2">
                    <a href={`mailto:${CONTACTS.email}`} className="font-bold hover:underline">{CONTACTS.email}</a>
                    <a href={`tel:${CONTACTS.phone.split(' ').join('')}`} className="hover:underline">{CONTACTS.phone}</a>

                    <TypoBody className="max-w-[30ch]">
                        Praha - Čertouská 353/8
                    </TypoBody>
                    <Button className="text-nowrap mt-4">
                        Domluvte si schůzku
                    </Button>
                </Box>
            </div>
        </Container>
    )
}