import { cn } from '@/helpers/utils';
import React, { JSX } from 'react';

type ContainerProps = {
    as?: keyof JSX.IntrinsicElements;
    narrow?: boolean;
    noPadding?: boolean;
    className?: string;
    children?: React.ReactNode;
    [rest: string]: unknown;
};

export default function Container({
    as: Tag = 'div',
    className,
    children,
    narrow = false,
    ...rest
}: ContainerProps) {
    return (
        <Tag className={cn('w-full mx-auto px-8 md:px-10', {
            'max-w-[1250px]': !narrow,
            'max-w-[1100px]': narrow,
        }, className)}
            {...rest}
        >
            {children}
        </Tag>
    );
}