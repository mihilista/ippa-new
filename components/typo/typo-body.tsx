import clsx from "clsx";

export default function TypoBody({Element = 'p', children, className}: {
    Element?: 'p';
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <Element className={clsx('text-[18px] leading-[1.4]', className)}>
            {children}
        </Element>
    )
}