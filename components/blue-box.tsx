import clsx from "clsx";

export default function BlueBox({className, children}: {
    className?: string;
    children: React.ReactNode
}) {
    return (
        <div className={clsx('bg-blue-600 py-16 px-20 rounded-[30px]', className)}>
            {children}
        </div>
    )
}