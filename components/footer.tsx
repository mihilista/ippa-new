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
                       className="py-10 px-20 flex gap-10"
            >
                <div className="flex flex-col gap-4">
                    <Image src={imageLogo} alt="IPPA"
                           className="w-20"
                    />


                </div>

                <div className="flex-1 flex flex-col">
                    <div className="flex gap-8 justify-end py-7">
                        {FOOTER_LINKS.map((link, index) => (
                            <Link href={link.href} key={`Footer Link: ${index}`}
                                  className="text-white hover:underline"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex gap-32">
                        <div>
                            <a href={`mailto:${CONTACTS.emails.common}`}>{CONTACTS.emails.common}</a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}