import Container from "@/components/container";
import TypoJumbo from "@/components/typo/typo-jumbo";
import TypoBody from "@/components/typo/typo-body";
import Image from "next/image";

import imageHeader from "@/public/images/header.jpg";
import Button from "../button";

export default function SectionHeader() {
    return (
        <Container className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            <div className="flex-1 flex flex-col gap-10 py-10">
                <header>
                    <TypoJumbo className="max-w-[21ch]">
                        Odhalte svůj plný potenciál s profesionálním koučinkem od IPPA
                    </TypoJumbo>
                </header>
                <TypoBody className="text-gray-800 max-w-[45ch]">
                    Pomáháme lidem dosáhnout jejich osobních i profesních cílů a žít naplněný život. Jste připraveni na změnu?
                </TypoBody>
                <Button className="self-start">
                    Objednejte si schůzku
                </Button>
            </div>
            <div className="flex-1 relative">
                <div className="absolute top-0 -left-[5px] md:-left-8 w-[calc(100%+10px)] md:w-full h-full rounded-[30px] bg-gray-200" />
                <Image src={imageHeader}
                    alt=""
                    className="relative w-full h-full object-cover rounded-[30px]"
                />
            </div>
        </Container>
    )
}