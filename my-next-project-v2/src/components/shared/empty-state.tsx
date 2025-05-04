interface EmptyStateProps {
  message?: string;
}

export function EmptyState({
  message = "データが見つかりませんでした",
}: EmptyStateProps) {
  return (
    <div className="text-center py-10">
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  );
}
