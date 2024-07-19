import Link from "next/link";
import Image from "next/image";

import imageLogo from "@/public/images/logo.png";

export default function LogoLink() {
    return (
        <Link href="/" className="inline-flex w-[48px]">
            <Image src={imageLogo}
                   alt="IPPA"
                   className="block"
            />
        </Link>
    )
}