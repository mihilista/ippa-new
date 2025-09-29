import Button from '@/components/button';
import Container from '@/components/container';
import GlowBall from '@/components/glow-ball';

export default function SectionHeader() {
    return (
        <Container
            as="section"
            className="relative flex items-center gap-6"
        >
            <GlowBall className="left-0 -top-16 w-[64%] aspect-square" />
            <div className="relative flex-grow max-w-[292px] flex flex-col items-start gap-12">
                <header>
                    <h1 className="font-serif text-h2 text-balance mb-2.5">
                        Odemkněte svůj potenciál.
                    </h1>
                    <p className="text-b1 max-w-[20ch]">
                        Objevte svůj potenciál – psychologické poradenství a koučink.
                    </p>
                </header>

                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/10">

                    </div>

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

            <div className="relative">

            </div>

            <div className="relative flex-grow aspect-[795/476] rounded-[25px] bg-white/10">

            </div>
        </Container>
    );
}