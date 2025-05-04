"use client";
/**
 * 表示するページ番号の配列を生成する
 * @param currentPage 現在のページ
 * @param totalPages 総ページ数
 * @param maxPagesToShow 表示する最大ページ数
 * @returns ページ番号の配列
 */
export function getPageNumbers(
  currentPage: number,
  totalPages: number,
  maxPagesToShow: number = 5
): number[] {
  const pageNumbers: number[] = [];

  // 表示するページ番号の範囲を計算
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // 表示するページ数が最大ページ数より少ない場合、startPageを調整
  if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}
