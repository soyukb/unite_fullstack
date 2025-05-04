"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

type Theme = "dark" | "light" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  // システムのテーマ設定を検出
  const getSystemTheme = useCallback((): "dark" | "light" => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  // 現在のテーマを取得（システム設定の場合は実際の値に変換）
  const getCurrentTheme = useCallback((): "dark" | "light" => {
    if (theme === "system") {
      return getSystemTheme();
    }
    return theme;
  }, [theme, getSystemTheme]);

  // テーマの切り替え
  const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // テーマの適用
  const applyTheme = useCallback((newTheme: "dark" | "light") => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  // システムテーマの変更を監視
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme(getSystemTheme());
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, getSystemTheme, applyTheme]);

  // 初期化とテーマの変更を監視
  useEffect(() => {
    // コンポーネントがマウントされたことを記録
    setMounted(true);

    // ローカルストレージからテーマ設定を読み込む
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // 現在のテーマを適用
    applyTheme(getCurrentTheme());
  }, [getCurrentTheme, applyTheme]);

  // テーマが変更されたときに適用
  useEffect(() => {
    if (mounted) {
      applyTheme(getCurrentTheme());
    }
  }, [theme, mounted, getCurrentTheme, applyTheme]);

  // クライアントサイドレンダリングの問題を防ぐため、マウント前は何も表示しない
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={
        getCurrentTheme() === "dark"
          ? "ライトモードに切り替え"
          : "ダークモードに切り替え"
      }
    >
      {getCurrentTheme() === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
