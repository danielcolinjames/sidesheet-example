import { SideSheetContentContainer } from "../SideSheet";
import { useEffect, useRef, useState } from "react";
import { Screen, useSideSheet } from "contexts/SideSheetContext";
import { KeyboardAwareLoadingButton } from "components/KeyboardAwareLoadingButton";

export function InputScreen() {
  const {
    sideSheetOpen,
    setCurrentScreen,
    setSideSheetHeader,
    sideSheetHeader,
  } = useSideSheet();
  const [inputValue, setInputValue] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const firstInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (firstInputRef.current && sideSheetOpen) {
      firstInputRef.current.focus();
    }
  }, [firstInputRef, sideSheetOpen]);

  const handleInputOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, "");
    setInputValue(value);
  };

  const handleInputTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputTwo(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.currentTarget.id === "subtotal-input") {
        document.getElementById("check-number-input")?.focus();
      } else if (e.currentTarget.id === "check-number-input") {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    setCurrentScreen(Screen.CONFIRM);
  };

  useEffect(() => {
    setSideSheetHeader({
      text: "Item Title",
    });
    return () => setSideSheetHeader(undefined);
  }, [setSideSheetHeader]);

  return (
    <SideSheetContentContainer>
      <div
        className="flex flex-col items-center justify-start gap-4 mt-2 h-[calc(100%-52px)] w-full"
        style={{
          overflow: "auto",
          overscrollBehavior: "none",
        }}
      >
        <div className="w-full">
          <label
            htmlFor="subtotal-input"
            className="block text-md text-structure-onSurfaceAlt/50 mb-1 ml-1"
          >
            One
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              autoComplete="off"
              ref={firstInputRef}
              type="text"
              inputMode="decimal"
              id="subtotal-input"
              className="font-sourceCodePro text-5xl w-full rounded-[12px] pl-12 p-3 focus:outline-none bg-surface-background text-structure-onSurface placeholder:text-structure-onSurfaceAlt/30"
              value={inputValue}
              enterKeyHint="next"
              onKeyDown={handleKeyPress}
              onChange={handleInputOneChange}
              placeholder="0.00"
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="check-number-input"
            className="block text-md text-structure-onSurfaceAlt/50 mb-1"
          >
            Two (optional)
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              autoComplete="off"
              type="number"
              inputMode="numeric"
              id="check-number-input"
              className="font-sourceCodePro text-5xl w-full rounded-[12px] pl-4 p-3 focus:outline-none bg-surface-background text-structure-onSurface placeholder:text-structure-onSurfaceAlt/30"
              value={inputTwo}
              enterKeyHint="done"
              onKeyDown={handleKeyPress}
              onChange={handleInputTwoChange}
              placeholder="123"
            />
          </div>
        </div>
      </div>
      <KeyboardAwareLoadingButton
        fullWidth
        stickToBottom
        loading={false}
        disabled={inputValue === ""}
        label="Continue"
        onClick={handleSubmit}
      />
    </SideSheetContentContainer>
  );
}
