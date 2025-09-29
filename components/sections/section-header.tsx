import Button from '@/components/button';
import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import GlowBall from '@/components/glow-ball';
import imageVideoThumb from '@/public/images/header-video-thumb.jpg';
import imageProfileCircle from '@/public/images/profile-circle.png';
import Image from 'next/image';

export default function SectionHeader() {
    return (
        <Container
            as="section"
            className="relative"
        >
            <GlowBall className="left-0 -top-16 w-[64%] aspect-square" />

            <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-grow md:max-w-[292px] flex flex-col items-start gap-12">
                    <header>
                        <EyebrowBlock
                            titleAs="h1"
                            title="Odemkněte svůj potenciál."
                            description="Objevte svůj potenciál – psychologické poradenství a koučink."
                        />
                    </header>

                    <div className="flex items-start gap-3">
                        <Image src={imageProfileCircle} alt="PhDr. Otakar Chaloupka, CSc."
                            className="w-10 h-10 shrink-0 rounded-full object-cover"
                        />

                        <div className="flex flex-col">
                            <strong className="font-serif text-h4 max-w-[16ch] mt-1.5 mb-2.5">
                                PhDr. Otakar Chaloupka
                            </strong>
                            <span className="text-b3">
                                psycholog a kouč
                            </span>
                        </div>
                    </div>

                    <Button href="#contact">
                        Rezervovat konzultaci
                    </Button>
                </div>

                <div>

                </div>

                <div className="flex-grow">
                    <Image src={imageVideoThumb} alt=""
                        className="w-full rounded-[25px]"
                    />
                </div>
            </div>
        </Container>
    );
}