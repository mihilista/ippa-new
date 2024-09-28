import Container from "@/components/container";
import TypoTitle from "@/components/typo/typo-title";
import TypoBody from "@/components/typo/typo-body";
import { COACHING_ITEMS } from "@/helpers/coaching";
import TypoSubtitle from "../typo/typo-subtitle";

export default function SectionCoaching() {
    return (
        <Container className="flex flex-col gap-12" id="koucink">
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-between">
                <header className="text-center md:text-left">
                    <TypoTitle>
                        Co je koučink?
                    </TypoTitle>
                </header>
                <div className="flex-1 max-w-[820px] bg-blue-200 rounded-[30px] p-8 md:p-12 text-center md:text-left">
                    <TypoBody>
                        Koučink je dynamický proces osobního a profesního růstu, který vám pomůže překonat překážky, které vás brzdí v dosažení vašich cílů a pocitu spokojenosti. Identifikujeme a pochopíme to, co vám brání v cestě vpřed, a společně najdeme způsoby, jak se těchto bariér zbavit. Pomůžeme vám zaměřit se na to podstatné, změnit způsob myšlení a získat novou energii pro další kroky ve vašem životě.
                    </TypoBody>
                </div>
            </div>

            <div className="flex flex-col items-center gap-12">
                <TypoSubtitle className="text-center">
                    S čím vám koučink pomůže?
                </TypoSubtitle>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {COACHING_ITEMS.map((item, index) => (
                        <div key={`Coaching Item: ${index}`}
                            className="flex-1 w-full max-md:max-w-[265px] bg-gray-200 rounded-[30px] py-12 px-6 font-bold flex flex-col items-center gap-6 text-center"
                        >
                            <div className="bg-blue-600 text-white w-12 h-12 inline-flex items-center justify-center rounded-full text-[20px] leading-[1.4]">{index + 1}</div>
                            <p className="text-[20px] leading-[1.4]">{item}</p>
                        </div>
                    ))}
                </div>
                <TypoBody className="text-gray-500 text-center max-md:max-w-[28ch]">
                    Jste připraveni na změnu? My vám pomůžeme najít cestu.
                </TypoBody>
            </div>
        </Container>
    )
}