import React from "react";

export default function SvgTick(props: React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 14" {...props}>
            <path stroke="currentColor" strokeWidth="3" d="M2 5.6 7.25 11 16 2" />
        </svg>
    )
}