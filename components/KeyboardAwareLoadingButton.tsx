import React from "react";
import LoadingButton from "./LoadingButton";
import classNames from "classnames";

interface KeyboardAwareLoadingButtonProps
  extends React.ComponentProps<typeof LoadingButton> {
  fullWidth?: boolean;
}

export const KeyboardAwareLoadingButton: React.FC<
  KeyboardAwareLoadingButtonProps
> = (props) => {
  return (
    <div
      className={classNames(
        "sticky bottom-0 left-0 right-0 bg-surface-container",
        {
          "w-full": props.fullWidth,
        }
      )}
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
        zIndex: 10, // Ensure it stays above other elements
      }}
    >
      <LoadingButton {...props} />
    </div>
  );
};
