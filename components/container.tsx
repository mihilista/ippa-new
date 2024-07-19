import React from 'react';
import clsx from 'clsx';
import {TContainer} from "@/helpers/types";

export default function Container({
                                      Element = 'section',
                                      narrow = false,
                                      className,
                                      children,
                                      ...rest
                                  }: TContainer) {
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
