import LoadingButton from "components/LoadingButton";
import {
  SideSheetContentContainer,
  SideSheetContentHeader,
} from "../SideSheet";
import { useSideSheet, Screen } from "contexts/SideSheetContext";

export function ReviewScreen() {
  const { closeSideSheet, setCurrentScreen } = useSideSheet();
  
  const handleDone = () => {
    closeSideSheet();
    // TODO: handle better way to reset to first screen. on open?
    setCurrentScreen(Screen.INPUT);
  };

  return (
    <SideSheetContentContainer>
      <div className="flex flex-col items-start justify-start gap-5 h-full w-full">
        <SideSheetContentHeader title="Finish in POS" />
        <div className="flex flex-row items-start justify-start gap-2">
          <NumberCircle number={1} />
          <p className="text-xl font-medium text-structure-onSurfaceAlt">
            Title
          </p>
        </div>
        <div className="flex flex-row mb-4 items-center justify-start gap-2">
          <div className="flex flex-row bg-surface-background px-4 py-3 rounded-lg ">
            <p className="text-3xl font-medium text-structure-onSurface text-left font-sourceCodePro">
              123
            </p>
          </div>
          <p className="text-3xl text-structure-onSurfaceAlt font-sourceCodePro">
            (123)
          </p>
        </div>
        <div className="flex flex-row items-start justify-start gap-2">
          <NumberCircle number={2} />
          <p className="text-xl font-medium text-structure-onSurfaceAlt">
            Two
          </p>
        </div>
      </div>
      <LoadingButton
        fullWidth
        stickToBottom
        loading={false}
        label="Done"
        onClick={handleDone}
      />
    </SideSheetContentContainer>
  );
}

function NumberCircle({ number }: { number: number }) {
  return (
    <div className="min-w-[28px] min-h-[28px] bg-surface-containerHighest rounded-full flex items-center justify-center">
      <p className="text-body-medium text-structure-onSurface">{number}</p>
    </div>
  );
}
