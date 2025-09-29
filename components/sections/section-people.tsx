import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import SvgArrowRight from '@/components/svg/svg-arrow-right';

const PEOPLE_ITEMS = [
    'Individuální jednotlivci hledající změnu, směr nebo rovnováhu',
    'Manažeři a lídři',
    'Týmy v transformaci nebo pod tlakem',
    'Firmy, které chtějí růst lidsky i strategicky',
];

export default function SectionPeople() {
    return (
        <Container
            narrow
            className="flex items-start gap-17"
        >
            <header className="flex-grow max-w-[397px]">
                <EyebrowBlock
                    eyebrow="Výsledky"
                    title="Pro koho je spolupráce vhodná"
                />
            </header>

            <div>
                <ul className="flex flex-col gap-12 list-none p-0">
                    {PEOPLE_ITEMS.map((item, index) => (
                        <li
                            key={`People Item: ${index}`}
                            className="flex items-start gap-10 text-b2"
                        >
                            <SvgArrowRight className="w-8" />
                            <div className="max-w-[32ch] text-balance">
                                {item}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}