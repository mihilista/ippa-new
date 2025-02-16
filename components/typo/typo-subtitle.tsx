import clsx from "clsx";

export default function TypoSubtitle({Element = 'h3', children, className}: {
    Element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <Element className={clsx('text-xl leading-[1.2] md:text-3xl md:leading-[1.2] font-bold', className)}>
            {children}
        </Element>
    )
}