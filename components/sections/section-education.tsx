import Container from "@/components/container";
import BlueBox from "@/components/blue-box";
import TypoTitle from "@/components/typo/typo-title";
import TypoBody from "@/components/typo/typo-body";
import {EDUCATION_ITEMS} from "@/helpers/education";
import Pill from "@/components/pill";

export default function SectionEducation() {
    return (
        <Container id="education">
            <BlueBox className="flex flex-col md:flex-row items-center gap-12 md:gap-28">
                <div className="flex-1 max-w-[515px] flex flex-col gap-8">
                    <header>
                        <TypoTitle className="text-white">
                            Školení
                        </TypoTitle>
                    </header>
                    <TypoBody className="text-white/70">
                        PPA ve svých rozvojových programech tzv. měkkých kompetencí a dovedností nabízí moduly, které
                        mají ambice Vás významně obohatit a inspirovat a probudit ve Vás chuť na sobě dále pracovat.
                        Naše programy jsou charakteristické vlastním metodickým uchopením témat. Zvláštní zřetel
                        věnujeme mj. těmto tématům:
                    </TypoBody>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {EDUCATION_ITEMS.map((item, index) => (
                        <Pill key={`index`}>
                            {item}
                        </Pill>
                    ))}
                </div>
            </BlueBox>
        </Container>
    )
}