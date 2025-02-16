import clsx from "clsx";

export default function TypoBody({ Element = 'p', children, className, ...props }: {
    Element?: 'p' | 'a';
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
}) {
    return (
        <Element className={clsx('text-lg leading-[1.4]', className)} {...props}>
            {children}
        </Element>
    )
}