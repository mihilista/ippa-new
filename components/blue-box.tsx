import clsx from "clsx";

export default function BlueBox({className, children}: {
    className?: string;
    children: React.ReactNode
}) {
    return (
        <div className={clsx('bg-blue-600 p-8 lg:p-20 rounded-[30px]', className)}>
            {children}
        </div>
    )
}