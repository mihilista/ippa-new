import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import GlowBall from '@/components/glow-ball';
import { FEATURE_ITEMS, FeatureItem } from '@/helpers/features';

export default function SectionFeatures() {
    return (
        <Container as="section"
            className="relative"
        >
            <GlowBall className="md:hidden left-0 top-20 w-[190vw] aspect-square" />

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-5">
                <div className="flex-grow max-w-[330px]">
                    <EyebrowBlock
                        eyebrow="Proč právě IPPA"
                        title="Získáte víc než jen koučink."
                        description="Pomůžeme vám znovu se nadechnout a nadchnout."
                    />
                </div>

                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-5">
                    {FEATURE_ITEMS.map((item, index) => (
                        <FeatureItemBox
                            key={`Feature Item: ${index}`}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}

function FeatureItemBox({ icon, description }: FeatureItem) {
    return (
        <div className="flex items-center gap-5 p-5 bg-black/10 border border-blue-400/20 rounded-[25px]">
            <div className="w-14.5 h-14.5 shrink-0">{icon}</div>

            <p className="text-b2">{description}</p>
        </div>
    );
}