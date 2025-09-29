import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import GlowBall from '@/components/glow-ball';
import imageOtakarChaloupka from '@/public/images/otakar-chaloupka.jpg';
import Image from 'next/image';

type ProfileRow = {
    tag: string;
    description: string;
}

const PROFILE_ROWS: ProfileRow[] = [
    {
        tag: 'Vzdělání',
        description: 'Jednooborová psychologie – FF UK – PhDr. Vědecká příprava – AV ČR – CSc.'
    },
    {
        tag: 'Oblasti',
        description: 'individuální rozvoj, týmová spolupráce, smysluplné vedení, leadership'
    },
    {
        tag: 'Motto',
        description: '„Odkud přicházím, kdo jsem, kam směřuji.“ (I.Kant)'
    }
];

export default function SectionProfile() {
    return (
        <Container
            narrow
            id="profile"
            className="relative"
        >
            <GlowBall className="w-[190vw] md:w-[52%] aspect-square -top-40 md:-top-50 -left-[25%] md:-left-[10%]" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-32">
                <div className="w-full md:flex-1 max-md:-ml-8">
                    <Image
                        src={imageOtakarChaloupka}
                        alt="PhDr. Otakar Chaloupka, CSc."
                        className="w-full rounded-r-[25px] md:rounded-[25px]"
                    />
                </div>

                <div className="md:flex-1 max-w-[364px] flex flex-col gap-8">
                    <header>
                        <EyebrowBlock
                            eyebrow="Profil"
                            title="PhDr. Otakar Chaloupka, CSc."
                        />
                    </header>

                    <p className="text-b2">
                        Psycholog, kouč a strategický partner.
                        <br /><br />
                        Zakladatel IPPA (Institut psychologické a personální analýzy). Praxe ve firmách i s jednotlivci. Lektor, supervizor a průvodce.
                    </p>

                    <div className="flex flex-col gap-5 items-start">
                        {PROFILE_ROWS.map(({ tag, description }, index) => (
                            <div
                                key={`Profile Row: ${index}`}
                                className="flex items-center gap-2"
                            >
                                <div className="shrink-0 inline-flex py-1.5 px-2 bg-blue-600 border border-blue-400/20 rounded-full text-b3">
                                    {tag}
                                </div>

                                <div className="text-b3 max-w-[34ch]">
                                    {description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}