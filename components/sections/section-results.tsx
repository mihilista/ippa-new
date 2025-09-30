import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import GlowBall from '@/components/glow-ball';
import { RESULT_ITEMS, ResultItem } from '@/helpers/results';

export default function SectionResults() {
    return (
        <Container
            narrow
            // compensating for optical space above it
            className="relative md:-mt-25"
        >
            <GlowBall className="md:hidden left-0 top-260 w-[190vw] aspect-square" />

            <div className="relative">
                <header className="mb-24">
                    <EyebrowBlock
                        eyebrow="Bilance"
                        title="Výsledky v číslech"
                        className="max-w-[200px]"
                    />
                </header>

                <div className="w-full flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-24 lg:gap-10">
                    {RESULT_ITEMS.map((item, index) => (
                        <ResultsItemCol
                            key={`Results Item: ${index}`}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}

function ResultsItemCol({ icon, title, description, info }: ResultItem) {
    return (
        <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-full max-w-[212px] aspect-square mb-5 text-blue-400">
                {icon}
            </div>

            <div className="flex flex-col items-center gap-2.5">
                <strong className="font-serif text-h0">
                    {title}
                </strong>

                <div className="text-b2 text-balance max-w-[30ch]">
                    {description}
                </div>

                {info && (
                    <div className="text-b3">
                        {info}
                    </div>
                )}
            </div>
        </div>
    )
}