import SectionHeader from "@/components/sections/section-header";
import SectionEducation from "@/components/sections/section-education";
import SectionCoaching from "@/components/sections/section-coaching";
import Container from "@/components/container";
import TypoTitle from "@/components/typo/typo-title";
import SectionTeambuilding from "@/components/sections/section-teambuilding";
import SectionContact from "@/components/sections/section-contact";

export default function Home() {
    return (
        <div className="flex flex-col gap-12">
            <SectionHeader/>
            <SectionEducation/>
            <SectionCoaching/>
            <Container className="py-20" id="development-centrum">
                <TypoTitle>development centrum</TypoTitle>
            </Container>
            <SectionTeambuilding/>
            <SectionContact/>
        </div>
    );
}
