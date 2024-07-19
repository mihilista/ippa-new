import Container from "@/components/container";
import Image from "next/image";

import imageLogo from "@/public/images/logo-light.png";
import {FOOTER_LINKS} from "@/helpers/links";
import Link from "next/link";
import {CONTACTS} from "@/helpers/data";

const currentYear = new Date().getFullYear();

export default function Footer() {

    return (
        <footer className="bg-blue-700">
            <Container Element="div"
                       className="py-10 px-20 flex flex-col gap-14"
            >
                <div className="flex gap-10 justify-between">
                    <div className="flex flex-col gap-4">
                        <Image src={imageLogo} alt="IPPA"
                               className="w-20"
                        />


                    </div>

                    <div className="flex gap-32 text-right">
                        <div className="flex flex-col">
                            <a href={`mailto:${CONTACTS.emails.common}`}
                               className="text-white hover:underline">{CONTACTS.emails.common}</a>
                            <a href={`tel:${CONTACTS.phone.split(' ').join('')}`}
                               className="text-white/70 hover:underline">{CONTACTS.phone}</a>
                            <a href={`mailto:${CONTACTS.emails.personal}`}
                               className="text-white/70 hover:underline">{CONTACTS.emails.personal}</a>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-white">Adresa</p>
                            <address className="text-white/70 not-italic max-w-[25ch]">{CONTACTS.address}</address>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-10">
                    <div className="flex-1 flex gap-8">
                        {FOOTER_LINKS.map((link, index) => (
                            <Link href={link.href} key={`Footer Link: ${index}`}
                                  className="text-white hover:underline"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-white/70 hover:underline">Terms & Conditions</Link>
                        <Link href="/" className="text-white/70 hover:underline">Privacy Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}