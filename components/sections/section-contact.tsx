import Container from "@/components/container";
import TypoTitle from "@/components/typo/typo-title";
import Image from "next/image";

import imageMap from "@/public/images/map.png";
import ContactForm from "@/components/form/contact-form";
import {CONTACTS} from "@/helpers/data";

export default function SectionContact() {
    return (
        <Container className="flex gap-4" id="contact">
            <div className="flex-1 flex flex-col justify-between">
                <header className="p-20">
                    <TypoTitle>
                        Kontakt
                    </TypoTitle>
                </header>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <div
                            className="flex-1 bg-gray-200 rounded-[30px] px-5 py-6 text-[20px] leading-[1.4] flex flex-col items-center gap-5 text-center">
                            <a href={`mailto:${CONTACTS.emails.common}`}
                               className="font-bold">{CONTACTS.emails.common}</a>

                            <div className="flex flex-col">
                                <a href={`tel:${CONTACTS.phone.split(' ').join('')}`}
                                   className="hover:underline">{CONTACTS.phone}</a>
                                <a href={`mailto:${CONTACTS.emails.personal}`}
                                   className="hover:underline">{CONTACTS.emails.personal}</a>
                            </div>
                        </div>
                        <div
                            className="flex-1 bg-gray-200 rounded-[30px] px-10 py-6 text-[20px] leading-[1.4] flex flex-col items-center gap-5 text-center">
                            <p className="font-bold">Adresa</p>
                            <address>
                                {CONTACTS.address}
                            </address>
                        </div>
                    </div>

                    <a href={CONTACTS.mapLink}
                       target="_blank"
                       rel="noreferrer noopener"
                    >
                        <Image src={imageMap}
                               alt="Mapa"
                               className="w-full aspect-[750/326] object-cover border-[3px] border-blue-200 rounded-[30px]"
                        />
                    </a>
                </div>
            </div>
            <div className="flex-1 max-w-[610px] bg-blue-200 p-12 rounded-[30px]">
                <ContactForm/>
            </div>
        </Container>
    )
}