import {TButton} from "@/helpers/types";
import Link from "next/link";
import clsx from "clsx";

export default function Button({
                                   href,
                                   theme = 'black',
                                   children,
                                   className,
                                   ...rest
                               }: TButton) {
    const classes = clsx(`button button-${theme}`, className);

    if (href) {
        return (
            <Link href={href} className={classes} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );

}