'use client';
import SvgPlay from '@/components/svg/svg-play';
import { cn } from '@/helpers/utils';
import imageVideoThumbDesktop from '@/public/images/header-video-thumb_desktop.jpg';
import imageVideoThumbMobile from '@/public/images/header-video-thumb_mobile.jpg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HeaderVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleClick = () => {
        setIsPlaying(true);
    }

    const handlePause = () => {
        setIsPlaying(false);
    }

    useEffect(() => {
        if (isPlaying && videoRef.current) {
            videoRef.current.play();
        }
    }, [isPlaying]);



    return (
        <div className="w-full relative rounded-l-[25px] md:rounded-[25px] overflow-hidden aspect-[664/812] md:aspect-[1920/1080]">
            <div
                className={cn('absolute top-0 left-0 w-full h-full group z-10 cursor-pointer transition-all duration-300', {
                    'opacity-0 pointer-events-none': isPlaying,
                })}
                onClick={handleClick}
            >
                <picture className="">
                    <source
                        srcSet={imageVideoThumbDesktop.src}
                        media="(min-width: 768px)"
                    />
                    <Image
                        src={imageVideoThumbMobile}
                        alt=""
                        className="w-full h-full object-cover"
                        priority
                    />
                </picture>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 w-25 h-25 md:w-30 md:h-30 rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 will-change-transform">
                    <SvgPlay className="w-7 md:w-8 -mr-1" />
                </div>
            </div>
            <video
                src="/videos/header.mp4"
                ref={videoRef}
                className={cn('w-full h-full object-cover', {
                    'opacity-100': isPlaying,
                    'opacity-0': !isPlaying
                })}
                onPause={handlePause}
                controls
            />

        </div>
    );
}