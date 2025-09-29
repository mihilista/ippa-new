import SectionContact from '@/components/sections/section-contact';
import SectionFeatures from '@/components/sections/section-features';
import SectionHeader from '@/components/sections/section-header';
import SectionPeople from '@/components/sections/section-people';
import SectionProfile from '@/components/sections/section-profile';
import SectionResults from '@/components/sections/section-results';
import SectionSteps from '@/components/sections/section-steps';

export default function Home() {
    return (
        <>
            <SectionHeader />
            <SectionFeatures />
            <SectionSteps />
            <SectionResults />
            <SectionPeople />
            <SectionProfile />
            <SectionContact />
        </>
    );
}
