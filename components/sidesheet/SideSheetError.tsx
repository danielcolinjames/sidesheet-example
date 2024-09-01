export default function SideSheetError({
  error,
}: {
  error: string | null | undefined;
}) {
  return (
    <div className="flex flex-col gap-[8px] w-full sticky bottom-16">
      <div className="min-h-[18px] flex items-center justify-center w-full">
        {error && (
          <p className="text-extension-failure text-caption-small">{error}</p>
        )}
      </div>
    </div>
  );
}
