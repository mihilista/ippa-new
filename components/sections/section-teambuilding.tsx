import Container from "@/components/container";
import TypoTitle from "@/components/typo/typo-title";
import TypoBody from "@/components/typo/typo-body";
import BlueBox from "@/components/blue-box";

export default function SectionTeambuilding() {
    return (
        <Container className="flex flex-col gap-10" id="teambuilding">
            <BlueBox className="text-white flex flex-col gap-8">
                <header>
                    <TypoTitle>
                        Teambuilding
                    </TypoTitle>
                </header>

                <TypoBody className="text-gray-300">
                    IPPA nevnímá teambuilding jako prvoplánové „strávení společného času“, nýbrž jako zážitkový pobyt
                    pro Váš tým mimo pracoviště, který pomůže při hledání společného ducha, jednotné vize a podpoří
                    mezilidské stmelení. V nabídce máme různé varianty a možnosti outdoor aktivit, sebezkušenostních
                    hraničních zážitků a skupinových her. Tím pozitivně podporujeme vzájemné vztahy a efektivní
                    spolupráci mezi členy Vašeho týmu.
                </TypoBody>
            </BlueBox>
        </Container>
    )
}