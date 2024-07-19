import Container from "@/components/container";
import TypoJumbo from "@/components/typo/typo-jumbo";
import TypoBody from "@/components/typo/typo-body";
import Image from "next/image";

import imageHeader from "@/public/images/header.jpg";

export default function SectionHeader() {
    return (
        <Container className="flex items-start gap-14">
            <div className="flex-1 relative">
                <div className="absolute top-0 -right-8 w-full h-full rounded-[30px] bg-gray-200"/>
                <Image src={imageHeader}
                       alt=""
                       className="relative w-full aspect-square object-cover rounded-[30px]"
                />
            </div>
            <div className="flex-1 max-w-[515px] flex flex-col gap-10 py-8">
                <header>
                    <TypoJumbo className="max-w-[15ch]">
                        Institut psychologické a personální analýzy
                    </TypoJumbo>
                </header>
                <TypoBody>
                    Institut psychologické a personální analýzy (IPPA) byl založen v r.1993. Jeho původní dominantní
                    zaměření na executive search, headhunting a recruitment se během více jak dvacetileté existence a
                    působení rozšiřovalo o další odborné aktivity v oblasti personálně psychologického poradenství,
                    vzdělávání a osobního rozvoje, individuálního a skupinového koučinku včetně poradenství v oblasti
                    psychologie práce a organizace. V současné době IPPA funguje na bázi spolupráce dvou hlavních
                    firemních partnerů včetně spolupráce s několika dalšími externími spolupracovníky. Předmět činnosti
                    a nabídky IPPA představuje poměrně široký vějíř specifických personálně psychologických poradenských
                    a rozvojových aktivit, jež jsou komplementární a v závislosti na potřebách klientů individuálně
                    propojovány do konkrétní podoby požadované a racionální služby a podpory.
                </TypoBody>
            </div>
        </Container>
    )
}