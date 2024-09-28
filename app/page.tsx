import SectionHeader from "@/components/sections/section-header";
import SectionCoaching from "@/components/sections/section-coaching";
import SectionWhyUs from "@/components/sections/section-why-us";
import SectionClients from "@/components/sections/section-clients";
import SectionContact from "@/components/sections/section-contact";

export default function Home() {
    return (
        <div className="flex flex-col gap-32 lg:gap-32 pt-12">
            <SectionHeader />
            <SectionCoaching />
            <SectionWhyUs />
            <SectionClients />
            <SectionContact />
        </div>
    );
}
