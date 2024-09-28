import TypoBody from "./typo/typo-body";
import TypoSubtitle from "./typo/typo-subtitle";
import TypoTitle from "./typo/typo-title";

export default function PersonCard({ name, photo, description }) {
    return (
        <article className="bg-gray-200 rounded-[30px] p-12 flex flex-col gap-8">
            <div className="flex items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gray-400 shrink-0" />
                <header>
                    <TypoSubtitle>
                        {name}
                    </TypoSubtitle>
                </header>
            </div>
            <div className="flex flex-col gap-5">
                {description.map((paragraph, index) => (
                    <TypoBody key={`Person Description Paragraph: ${name} - ${index}`}>
                        {paragraph}
                    </TypoBody>
                ))}
            </div>
        </article>
    )
}