import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import { RESULT_ITEMS, ResultItem } from '@/helpers/results';

export default function SectionResults() {
    return (
        <Container narrow className="relative">
            <header className="mb-24">
                <EyebrowBlock
                    eyebrow="Bilance"
                    title="Výsledky v číslech"
                    className="max-w-[200px]"
                />
            </header>

            <div className="w-full flex flex-col md:flex-row md:justify-between gap-24 md:gap-10">
                {RESULT_ITEMS.map((item, index) => (
                    <ResultsItemCol
                        key={`Results Item: ${index}`}
                        {...item}
                    />
                ))}
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

                <div className="text-b2 text-balance">
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