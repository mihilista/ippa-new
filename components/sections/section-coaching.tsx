import Container from "@/components/container";
import TypoTitle from "@/components/typo/typo-title";
import TypoBody from "@/components/typo/typo-body";
import {COACHING_ITEMS} from "@/helpers/coaching";

export default function SectionCoaching() {
    return (
        <Container className="flex flex-col gap-10" id="coaching">
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-between">
                <header className="flex-1 max-w-[400px] text-center md:text-left md:p-20">
                    <TypoTitle>
                        Koučovaní
                    </TypoTitle>
                </header>
                <div className="flex-1 max-w-[820px] bg-blue-200 rounded-[30px] p-8 md:py-16 md:px-24">
                    <TypoBody>
                        Jako IPPA vnímáme v oblasti osobnostního rozvoje naši užitečnost v tom, že jednotlivcům i týmům
                        pomáháme nalézt efektivní cestu k zrcadlu a k pohledu do něj formou specifických programů, jež
                        směřují k identifikaci potenciálu vlastní osobnosti a k identifikaci možností jeho dalšího
                        rozvoje s ohledem na požadavky a podmínky jeho uplatnění v konkrétní praxi. Jde např. o
                        následující témata:
                    </TypoBody>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4">
                {COACHING_ITEMS.map((item, index) => (
                    <div key={`Coaching Item: ${index}`}
                         className="flex-1 w-full max-md:max-w-[265px] bg-gray-200 rounded-[30px] py-12 px-6 font-bold flex flex-col items-center gap-6 text-center"
                    >
                        <div className="bg-blue-600 text-white w-12 h-12 inline-flex items-center justify-center rounded-full text-[20px] leading-[1.4]">{index + 1}</div>
                        <p className="text-[20px] leading-[1.4]">{item}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}