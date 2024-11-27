import Container from "@/components/container";
import TypoTitle from "@/components/typo/typo-title";
import Box from "@/components/box";
import imagePerson from "@/public/images/why-us.jpg";
import Image from "next/image";
import SvgQuotes from "@/components/svg/svg-quotes";
import TypoBody from "@/components/typo/typo-body";

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
                            Institut psychologické a personální analýzy (IPPA) má více než 20 let zkušeností s podporou osobního a profesního růstu. Kombinujeme osvědčené metody s individuálním přístupem, abychom vám pomohli překonat výzvy, které vás brzdí na cestě k plnému potenciálu.
                        </TypoBody>
                    </Box>

                    <Box theme="blue">
                        <TypoBody className="mx-auto max-w-[58ch]">
                            Máme rozsáhlé zkušenosti s rozvojem jednotlivců napříč různými oblastmi, včetně automobilového a spotřebního průmyslu, bankovnictví, finančních služeb, IT a telekomunikací. S námi získáte odborného partnera, který rozumí vašim potřebám a pomůže vám naplno využít váš potenciál.
                        </TypoBody>
                    </Box>
                </div>
            </div>
        </Container>
    )
}