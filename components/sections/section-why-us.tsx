import Container from "@/components/container";
import TypoTitle from "@/components/typo/typo-title";
import Box from "../box";
import imagePerson from "@/public/images/why-us.jpg";
import Image from "next/image";
import SvgQuotes from "../svg/svg-quotes";
import TypoBody from "../typo/typo-body";

export default function SectionWhyUs() {
    return (
        <Container className="flex flex-col gap-12" id="ippa">
            <header className="text-center">
                <TypoTitle>
                    Proč si vybrat právě nás?
                </TypoTitle>
            </header>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                    <Image src={imagePerson}
                        alt=""
                        className="w-full h-full object-cover rounded-[30px]"
                    />
                </div>
                <div className="flex-[2] flex flex-col gap-4">
                    <Box theme="gray" className="flex-1">
                        <TypoBody className="relative max-w-[58ch] mx-auto my-8 lg:my-0">
                            <SvgQuotes className="absolute w-[28px] -top-8 -left-4 md:-top-8 md:-left-8 pointer-events-none" />
                            <SvgQuotes className="absolute w-[28px] -bottom-8 -right-4 md:-bottom-8 md:-right-8 rotate-180 pointer-events-none" />
                            Institut psychologické a personální analýzy (IPPA) má více než 20 let zkušeností v oblasti osobního a profesního rozvoje. Naše práce spočívá v kombinaci osvědčených metod a individuálního přístupu ke každému klientovi. Rozumíme vašim potřebám a jsme zde, abychom vám pomohli překonat výzvy, které vám brání v dosažení plného potenciálu.
                        </TypoBody>
                    </Box>

                    <Box theme="blue">
                        <TypoBody className="mx-auto max-w-[58ch]">
                            Naše odborné kompetence zahrnují široké spektrum odvětví, jako je automobilový a spotřební průmysl, bankovní sektor, IT a telekomunikace. S námi získáte partnera, který vás bude provázet na vaší cestě ke změně.
                        </TypoBody>
                    </Box>
                </div>
            </div>
        </Container>
    )
}