import { cn } from '@/helpers/utils';

type GlowBallProps = {
    className?: string;
};

export default function GlowBall({ className }: GlowBallProps) {
    return (
        <div aria-hidden className={cn('absolute bg-radial from-blue-600 to-66% to-blue-600/0 rounded-full pointer-events-none select-none', className)} />
    );
}