import { TBox } from "@/helpers/types";
import clsx from "clsx";

export default function Box({ theme, children, className }: TBox) {
    return (
        <div className={clsx('p-8 lg:p-20 rounded-[30px] flex items-center text-center', {
            'bg-blue-600 text-white': theme === 'blue',
            'bg-gray-200 text-black': theme === 'gray',
        }, className)}>
            {children}
        </div>
    )
}