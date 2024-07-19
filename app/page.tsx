import SectionHeader from "@/components/sections/section-header";
import SectionEducation from "@/components/sections/section-education";
import SectionCoaching from "@/components/sections/section-coaching";

export default function Home() {
    return (
        <div className="flex flex-col gap-12 pt-nav">
            <SectionHeader/>
            <SectionEducation/>
            <SectionCoaching/>
        </div>
    );
}
