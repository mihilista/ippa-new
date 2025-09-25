import SvgTick from "@/components/svg/svg-tick";
import clsx from 'clsx';

type CheckboxProps = {
    name: string;
    id: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: boolean;
    children?: React.ReactNode;
    [rest: string]: unknown;
}

export default function Checkbox({
    name,
    id,
    checked,
    onChange,
    className,
    error = false,
    children,
    ...rest
}: CheckboxProps) {
    return (
        <label
            className={clsx('input--checkbox', className)}
            htmlFor={id}
        >
            <input
                type="checkbox"
                name={name}
                id={id}
                checked={checked}
                onChange={onChange}
                className="hidden"
                {...rest}
            />

            <div className={clsx('relative input fake-checkbox', {
                'input-with-error': error,
            })}>
                <SvgTick className={clsx('w-10 max-w-none pointer-events-none transition-opacity duration-200', {
                    'opacity-0': !checked
                })} />
            </div>

            <div className="relative">
                {children}
            </div>
        </label>
    )
}