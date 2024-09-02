import { ChevronLeft, CloseRounded } from "@mui/icons-material";
import classNames from "classnames";
import { useSideSheet } from "../../contexts/SideSheetContext";
import { useKeyboardHeight } from "../../hooks/useKeyboardHeight";
import { useEffect } from "react";

const SideSheet = ({ children }: { children: React.ReactNode }) => {
  const { sideSheetOpen } = useSideSheet();
  const keyboardHeight = useKeyboardHeight();

  useEffect(() => {
    if (sideSheetOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideSheetOpen]);

  const animation = sideSheetOpen
    ? "translate-y-0 md:translate-x-0 md:translate-y-0"
    : "translate-y-full md:translate-x-full md:translate-y-0";

  return (
    <div
      className={classNames(
        "w-full z-20 right-0 fixed bottom-0 md:pr-2 md:py-2 md:max-w-[400px] ease-in-out duration-200 flex flex-col",
        animation
      )}
      role="dialog"
      aria-modal="true"
      style={{
        height: `calc(100dvh - ${keyboardHeight}px)`,
        top: 0,
        overflow: "hidden",
      }}
    >
      <div className="md:rounded-[24px] bg-surface-container h-full shadow-2xl shadow-core-onPrimary border-[1px] border-surface-containerLowest flex flex-col overflow-hidden">
        <SideSheetHeader />
        <div className="flex-1 overflow-y-auto overscroll-contain">{children}</div>
      </div>
    </div>
  );
};

export default SideSheet;

const SideSheetHeader = () => {
  const { closeSideSheet, previousScreen, setCurrentScreen, sideSheetHeader } =
    useSideSheet();

  const handleBack = () => {
    if (previousScreen) {
      setCurrentScreen(previousScreen);
    }
  };

  return (
    <div className="sticky top-0 bg-surface-container flex flex-row items-center justify-between w-full border-b border-structure-outlineAlt py-[20px] z-20">
      <div className="min-w-[24px] min-h-[24px]">
        {previousScreen && (
          <button
            className="text-body-medium-standard text-structure-onSurface"
            onClick={handleBack}
          >
            <ChevronLeft />
          </button>
        )}
      </div>
      {sideSheetHeader ? (
        <div className="flex items-center space-x-2 overflow-hidden">
          {sideSheetHeader.imageUrl && (
            <img
              src={sideSheetHeader.imageUrl}
              alt="Header"
              className="h-8 w-8 object-contain rounded-full"
            />
          )}
          <h2 className="text-lg font-semibold truncate text-surface-fixed-white">
            {sideSheetHeader.text}
          </h2>
        </div>
      ) : (
        <div className="w-[125.53px] h-[12px]" />
      )}
      <button
        className="text-body-medium-standard text-structure-onSurface focus:outline-none focus:ring-0"
        onClick={closeSideSheet}
      >
        <CloseRounded className="focus:outline-none focus:ring-0" />
      </button>
    </div>
  );
};

export const SideSheetContentContainer = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className="h-full w-full flex flex-col overflow-y-auto overscroll-contain"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const SideSheetContentHeader = ({
  title,
  center,
}: {
  title: string;
  center?: boolean;
}) => {
  return (
    <div
      className={classNames(
        "flex w-full py-[12px]",
        center ? "justify-center items-center" : "justify-start items-center"
      )}
    >
      <p className="text-structure-onSurface text-header-xs text-left">
        {title}
      </p>
    </div>
  );
};
