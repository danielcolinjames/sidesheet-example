import {
  SideSheetContentContainer,
  SideSheetContentHeader,
} from "../SideSheet";
import LoadingButton from "components/LoadingButton";

export function ConfirmScreen() {
  const handleSubmit = async () => {
    console.log("submit");
  };

  return (
    <SideSheetContentContainer>
      <div className="flex flex-col items-center justify-start w-full h-full">
        <SideSheetContentHeader title="Confirm Total" />
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <p className="text-body-medium-standard text-structure-onSurfaceAlt text-left">
            Please confirm.
          </p>
          <div className="flex flex-row bg-surface-background px-4 py-3 rounded-lg mt-4">
            <p className="text-5xl font-medium text-structure-onSurface text-left font-sourceCodePro">
              123
            </p>
          </div>
        </div>
      </div>
      <LoadingButton
        fullWidth
        stickToBottom
        loading={false}
        onClick={handleSubmit}
        label="Confirm"
      />
    </SideSheetContentContainer>
  );
}
