"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      {/* Date display - mobile and desktop */}
      <div className="px-4 py-2 text-sm text-center md:text-left"></div>

      {/* Main header with title and theme toggle */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden md:block w-10"></div>{" "}
          {/* Spacer for desktop layout balance */}
          <Link href="/" className="mx-auto md:mx-0">
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
              Pokemon Unite 速報
            </h1>
          </Link>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Additional elements that only show on desktop */}
      <div className="hidden md:flex md:items-center md:justify-end px-4 py-2 text-sm">
        {/* TODO: 検索ボタン追加 */}
      </div>
    </header>
  );
}
