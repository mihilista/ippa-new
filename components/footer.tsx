import Container from "@/components/container";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {

    return (
        <footer className="shadow-2xl shadow-black">
            <Container Element="div"
                       className="flex flex-col-reverse md:flex-row items-center md:items-end justify-between py-4 text-sm gap-5"
            >
                <p>
                    &copy; {currentYear} Frida Company s.r.o.
                </p>

                <div className="flex items-center gap-4">
                    <a href="mailto:info@fridarealestate.com" className="hover:underline">info@fridarealestate.com</a>
                    <p>|</p>
                    <a href="tel:+420702153987" className="hover:underline">+420 702 153 987</a>
                </div>

                {/*<div>*/}
                {/*    <Link href="/privacy-policy" className="text-sm hover:underline">*/}
                {/*        Ochrana osobních údajů*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </Container>
        </footer>
    )
}