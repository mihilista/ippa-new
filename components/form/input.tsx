'use client';

import clsx from 'clsx';
import { useState } from 'react';

export type InputProps = {
    label?: string;
    name: string;
    id: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
    error?: boolean;
    [rest: string]: unknown;
}

type InputLabelProps = {
    label: string;
    id: string;
    isActive?: boolean;
    hasError?: boolean;
}

function InputLabel({ label, id, isActive = false, hasError = false }: InputLabelProps) {
    return (
        <label
            htmlFor={id}
            className={clsx('input-label', {
                'input-label--active': isActive,
                'input-label--error': hasError
            })}
        >
            {label}
        </label>
    )
}


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
}: InputProps) {
    const [hasFocus, setHasFocus] = useState(false);

    if (type === 'textarea') {
        return (
            <div className="relative w-full h-full">
                {label && (
                    <InputLabel
                        label={label}
                        id={id}
                        isActive={!!value || hasFocus}
                        hasError={error}
                    />
                )}
                <textarea
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    className={clsx('input input--textarea', className, {
                        'input-with-error': error
                    })}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
                    {...rest}
                />
            </div>
        )
    }

    return (
        <div className="relative w-full h-full">
            {label && (
                <InputLabel
                    label={label}
                    id={id}
                    isActive={!!value || hasFocus}
                    hasError={error}
                />
            )}

            <input
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                className={clsx('input', className, {
                    'input-with-error': error
                })}
                value={value}
                onChange={onChange}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                {...rest}
            />
        </div>
    )
}