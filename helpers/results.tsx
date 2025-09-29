import SvgClients from '@/components/svg/svg-clients';
import SvgGrowth from '@/components/svg/svg-growth';
import SvgTarget from '@/components/svg/svg-target';

export type ResultItem = {
    icon: React.ReactNode;
    title: string;
    description: string;
    info?: string;
}

export const RESULT_ITEMS: ResultItem[] = [
    {
        icon: <SvgClients />,
        title: '1500+',
        description: 'klientů'
    },
    {
        icon: <SvgTarget />,
        title: '30+ let',
        description: 'praxe v rozvoji lidí a firem'
    },
    {
        icon: <SvgGrowth />,
        title: '50%',
        description: 'zvýšení angažovanosti a snížení fluktuace při zavedení koučinku',
        info: 'studie NeuroLeadership'
    },

]