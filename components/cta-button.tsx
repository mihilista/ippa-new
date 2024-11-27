import Button from "@/components/button";
import { CONTACT_PHONE_LINK } from "@/helpers/data";
import clsx from "clsx";

export default function CtaButton({ className }: {
    className?: string
}) {
    return (
        <Button href={CONTACT_PHONE_LINK} className={clsx('gtm-cta-click', className)}>
            Domluvte si schůzku
        </Button>
    )
}