"use client";

import Image from "next/image";

interface MediaProps {
  media: {
    media_type: string;
    media_url: string;
  };
}

export function MediaDisplay({ media }: MediaProps) {
  const { media_type, media_url } = media;

  if (media_type === "image") {
    return (
      <Image
        src={media_url || "/placeholder.svg"}
        alt="記事の画像"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  if (media_type === "video") {
    return (
      <div className="relative w-full h-full">
        <video
          src={media_url}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
    );
  }

  return null;
}
