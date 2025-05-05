"use client";

import { useState, useEffect } from "react";

export function useSlugFromUrl() {
  const [slug, setSlug] = useState<string | null>(null);

  // URLからスラグを取得
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathSegments = window.location.pathname.split("/");
      const slugFromUrl = pathSegments[pathSegments.length - 1];
      setSlug(slugFromUrl);
    }
  }, []);

  return slug;
}
