import clsx from "clsx";
import {TInput} from "@/helpers/types";

export default function Input({
                                  label,
                                  name,
                                  id,
                                  type = 'text',
                                  placeholder,
                                  value,
                                  onChange,
                                  className,
                                  error = false,
                                  ...rest
                              }: TInput) {
    return (
        <div className="w-full flex flex-col gap-1">
            <label htmlFor={id} className={clsx('cursor-pointer', {
                'text-white': !error,
                'text-orange-400': error
            })}>{label}</label>
            <input
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                className={clsx('input', className, {
                    'input-error': error
                })}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </div>
    )
}