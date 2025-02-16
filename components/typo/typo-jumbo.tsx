import clsx from "clsx";

export default function TypoJumbo({ Element = 'h1', children, className }: {
    Element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <Element className={clsx('text-5xl leading-[1.21] font-bold', className)}>
            {children}
        </Element>
    )
}