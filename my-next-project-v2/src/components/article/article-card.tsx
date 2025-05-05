"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { formatDate } from "@/lib/utils";
import { MediaDisplay } from "@/components/shared/media-display";
import type { Article } from "@/types/index";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { title, translated_title, media, publishedAt } = article;
  const mediaItem = media[0];

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        {mediaItem && (
          <div className="aspect-video relative overflow-hidden">
            <MediaDisplay media={mediaItem} />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {mediaItem?.media_type === "video" ? "動画" : "画像"}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {formatDate(publishedAt)}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">
          {translated_title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{title}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {/* コメント数といいね数（将来的に表示する予定） */}
      </CardFooter>
    </Card>
  );
}
