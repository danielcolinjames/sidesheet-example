import classNames from "classnames";
import { LoadingSpinner } from "./LoadingSpinner";
import React from "react";
import Link from "next/link";

type LoadingButtonProps = {
  fullWidth?: boolean;
  loading: boolean;
  disabled?: boolean;
  onClick?: () => void | Promise<void>;
  className?: string;
  label: string | React.ReactNode;
  stickToBottom?: boolean;
  href?: string;
};

export default function LoadingButton({
  fullWidth,
  loading,
  disabled,
  onClick,
  className,
  label,
  stickToBottom,
  href,
}: LoadingButtonProps) {
  const Content = (
    <div className="h-[20px] flex items-center justify-center">
      {loading ? (
        <LoadingSpinner />
      ) : typeof label === "string" ? (
        <p
          className={classNames("text-[16px] font-medium leading-[20px]", {
            "opacity-0": loading,
            "opacity-40": disabled,
          })}
        >
          {label}
        </p>
      ) : (
        label
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        className={classNames(
          "text-structure-inverseOnSurface rounded-full py-[12px] px-[18px] z-20",
          {
            "bg-structure-onSurface hover:bg-structure-onSurface/95 transition-all duration-200 ease-in-out":
              !disabled,
            "bg-structure-onSurface/[18%] text-structure-onSurface/30":
              disabled,
            "w-full": fullWidth,
            "sticky bottom-4": stickToBottom,
          },
          className
        )}
        href={href}
        onClick={disabled || loading ? undefined : onClick}
      >
        {Content}
      </Link>
    );
  }
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={classNames(
        "text-structure-inverseOnSurface rounded-full py-[12px] px-[18px] z-20",
        {
          "bg-structure-onSurface hover:bg-structure-onSurface/95 transition-all duration-200 ease-in-out":
            !disabled,
          "bg-structure-onSurface/[18%] text-structure-onSurface/30": disabled,
          "w-full": fullWidth,
          "sticky bottom-4": stickToBottom,
        },
        className
      )}
    >
      {Content}
    </button>
  );
}
