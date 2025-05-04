export interface PaginationMeta {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}
export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
