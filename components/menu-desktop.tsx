import Link from "next/link";
import { NAV_LINKS } from "@/helpers/links";
import Button from "./button";

export default function MenuDesktop() {
    return (
        <div className="hidden md:flex items-center gap-24">
            <div className="flex items-center gap-8">
                {NAV_LINKS.map((link, index) => (
                    <Link href={link.href}
                        key={`Nav Link: ${index}`}
                        className="text-black hover:underline"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <Button href="#kontakt">
                Objednejte si schůzku
            </Button>
        </div>
    )
}