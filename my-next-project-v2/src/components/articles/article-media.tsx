"use client";
interface ArticleMediaProps {
  media: {
    media_type: string;
    media_url: string;
  };
  title: string;
}

export function ArticleMedia({ media, title }: ArticleMediaProps) {
  return (
    <div className="mb-8">
      {media.media_type === "video" ? (
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <video
            className="w-full h-full"
            controls
            autoPlay
            muted
            src={media.media_url}
            poster="/video-thumbnail.png"
          />
        </div>
      ) : (
        <img
          src={media.media_url || "/placeholder.svg"}
          alt={title}
          className="w-full rounded-lg"
        />
      )}
    </div>
  );
}
