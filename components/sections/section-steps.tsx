import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import GlowBall from '@/components/glow-ball';
import { STEP_ITEMS, StepItem } from '@/helpers/steps';
import { cn } from '@/helpers/utils';

export default function SectionSteps() {
    return (
        <Container
            narrow
            id="process"
            className="relative"
        >
            <GlowBall className="w-[190vw] md:w-[90%] aspect-square top-140 md:top-50 -left-[80%] md:left-[40%]" />

            <div className="relative flex flex-col md:flex-row md:items-start gap-8 md:gap-5">
                <div className="flex-grow max-w-[330px]">
                    <EyebrowBlock
                        eyebrow="Průběh spolupráce"
                        title="Tři kroky, které přinášejí výsledky"
                    />
                </div>

                <div className="flex-grow flex flex-col max-sm:pl-10 items-start gap-5 md:gap-8">
                    {STEP_ITEMS.map((item, index) => (
                        <StepItemBox
                            key={`Step Item: ${index}`}
                            {...item}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}

function StepItemBox({ index, title, description }: StepItem & { index: number }) {
    return (
        <article className={cn('relative w-full max-w-[350px] md:max-w-[287px]', {
            'sm:self-start md:ml-10': index === 1,
            'sm:self-end lg:-mt-28': index === 2,
            'sm:self-center': index === 3,
        })}>
            <div className="absolute top-4 -left-10 w-30 h-30 rounded-full bg-blue-600" />
            <div className="relative flex flex-col gap-5 p-8 pt-5 border border-blue-400/20 rounded-[25px] bg-black/20 backdrop-blur-md">
                <span className="font-serif text-h1">
                    {index}.
                </span>

                <header>
                    <h3 className="font-serif text-h3">
                        {title}
                    </h3>
                </header>

                <p className="text-b2">
                    {description}
                </p>
            </div>
        </article>
    )
}