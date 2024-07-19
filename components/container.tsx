import React from 'react';
import clsx from 'clsx';

type ContainerProps = {
    Element?: React.ElementType;
    narrow?: boolean;
    className?: string;
    children?: React.ReactNode;
    [rest: string]: any;
};

export default function Container({
                                      Element = 'section',
                                      narrow = false,
                                      className,
                                      children,
                                      ...rest
                                  }: ContainerProps) {
    return (
        <Element
            className={clsx(
                'mx-auto w-full px-4 md:px-6',
                className,
                {
                    'max-w-[1200px]': narrow,
                    'max-w-[1500px]': !narrow,

                }
            )}
            {...rest}
        >
            {children}
        </Element>
    );
}
