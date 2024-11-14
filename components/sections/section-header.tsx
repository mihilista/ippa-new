import Container from "@/components/container";
import TypoJumbo from "@/components/typo/typo-jumbo";
import TypoBody from "@/components/typo/typo-body";
import imageHeader from "@/public/images/header.jpg";
import Button from "@/components/button";

export default function SectionHeader() {
    return (
        <Container className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            <div className="flex-1 flex flex-col gap-10 py-10">
                <header>
                    <TypoJumbo className="max-w-[21ch]">
                        Odemkněte svůj plný potenciál!
                    </TypoJumbo>
                </header>
                <TypoBody className="text-gray-800 max-w-[45ch]">
                    Dopřejte si koučink od zkušeného psychologa, který vám pomůže překonat bariéry a posunout se k naplněnému životu i kariéře. Jste připraveni na změnu?
                </TypoBody>
                <Button className="self-start">
                    Domluvte si schůzku
                </Button>
            </div>
            <div className="flex-1 relative">
                <div className="absolute top-0 -left-[5px] md:-left-8 w-[calc(100%+10px)] md:w-full h-full rounded-[30px] bg-gray-200" />
                {/* <Image src={imageHeader}
                    alt=""
                    className="relative w-full h-full object-cover rounded-[30px]"
                /> */}

                <video className="relative w-full h-full object-cover rounded-[30px]"
                    controls
                    autoPlay={false}
                    loop={false}
                    poster={imageHeader.src}
                >
                    <source src="/videos/header.mp4" type="video/mp4" />
                </video>
            </div>
        </Container>
    )
}