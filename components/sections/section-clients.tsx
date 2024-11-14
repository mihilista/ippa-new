import Container from "@/components/container";
import TypoSubtitle from "../typo/typo-subtitle";
import TypoBody from "../typo/typo-body";
import Image from "next/image";

import imageClients from "@/public/images/clients.png";


export default function SectionClients() {
    return (
        <Container className="flex flex-col gap-12 items-center" id="klienti">
            <header className="text-center">
                <TypoSubtitle Element="h2">
                    Naši klienti dosahují skvělých výsledků
                </TypoSubtitle>
            </header>

            <TypoBody className="text-center max-w-[70ch] text-gray-500">
                Za více než dvě desetiletí jsme pomohli mnoha jednotlivcům a firmám překonat výzvy a dosáhnout svých cílů. Naše spolupráce přináší skutečné výsledky - vyšší pracovní výkon, zvýšenou spokojenost a osobní růst. S námi se můžete posunout k úspěchu i vy.
            </TypoBody>

            <Image src={imageClients} alt="Naši klienti" className="block max-w-full" />
        </Container>
    )
}