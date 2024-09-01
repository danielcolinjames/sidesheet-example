export function BigNumbers({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  const formattedNumber = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <p className="text-sm font-light ml-1 text-structure-onSurfaceAlt text-left">
        {label}
      </p>
      <div className="flex flex-row bg-surface-background px-4 py-3 rounded-lg ">
        <p className="text-5xl font-medium text-structure-onSurface text-left font-sourceCodePro">
          {formattedNumber}
        </p>
      </div>
    </div>
  );
}
