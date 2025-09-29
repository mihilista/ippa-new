import { cn } from '@/helpers/utils';
import { JSX } from 'react';

type EyebrowBlockProps = {
    eyebrow?: string;
    title?: string;
    description?: string;
    className?: string;
    titleAs?: keyof JSX.IntrinsicElements;
};

export default function EyebrowBlock({ eyebrow, title, description, className, titleAs: Tag = 'h2', }: EyebrowBlockProps) {
    return (
        <div className={cn("flex flex-col gap-2.5", className)}>
            {eyebrow && <p className="text-o1 uppercase">{eyebrow}</p>}
            {title && <Tag className="font-serif text-h2 text-balance">{title}</Tag>}
            {description && <p className="text-b1 text-balance">{description}</p>}
        </div>
    );
}