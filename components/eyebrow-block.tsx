import { cn } from '@/helpers/utils';

type EyebrowBlockProps = {
    eyebrow?: string;
    title?: string;
    description?: string;
    className?: string;
};

export default function EyebrowBlock({ eyebrow, title, description, className }: EyebrowBlockProps) {
    return (
        <div className={cn("flex flex-col gap-2.5", className)}>
            {eyebrow && <p className="text-o1 uppercase">{eyebrow}</p>}
            {title && <h2 className="font-serif text-h2 text-balance">{title}</h2>}
            {description && <p className="text-b1 text-balance">{description}</p>}
        </div>
    );
}