import Svg30Plus from '@/components/svg/svg-30-plus';
import SvgIndividual from '@/components/svg/svg-individual';
import SvgRun from '@/components/svg/svg-run';
import SvgWheel from '@/components/svg/svg-wheel';

export type FeatureItem = {
    icon: React.ReactNode;
    description: string;
}

export const FEATURE_ITEMS: FeatureItem[] = [
    {
        icon: <Svg30Plus />,
        description: '30+ let praxe v psychologii, byznysu a rozvoji lidí'
    },
    {
        icon: <SvgIndividual />,
        description: 'Osobní přístup, individuální plán, důvěra'
    },
    {
        icon: <SvgRun />,
        description: 'Dlouhodobé výsledky v osobní i pracovní rovině'
    },
    {
        icon: <SvgWheel />,
        description: 'Spolupráce, která přináší rozhodnost, jistotu a směr'
    }
]