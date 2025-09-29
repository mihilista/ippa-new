import clsx from "clsx";
import React from "react";

type ButtonProps = {
    theme?: 'primary' | 'secondary';
    href?: string;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    [rest: string]: unknown;
}

export default function Button({
    theme = 'primary',
    href,
    className,
    children,
    disabled = false,
    ...rest
}: ButtonProps) {
    const classes = clsx('button', {
        'button--primary': theme === 'primary',
        'button--secondary': theme === 'secondary',
        'opacity-50 cursor-not-allowed': disabled,
    }, className);

    if (href) {
        return (
            <a className={classes}
                href={href}
                {...rest}
            >
                {children}
            </a>
        )
    }

    return (
        <button className={classes}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}