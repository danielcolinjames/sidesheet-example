import { BigNumbers } from "components/BigNumbers";
import {
  SideSheetContentContainer,
  SideSheetContentHeader,
} from "../SideSheet";

export function DetailsScreen() {
  return (
    <SideSheetContentContainer>
      <div className="flex flex-col items-start justify-start h-full w-full">
        <SideSheetContentHeader
          title={`Title`}
        />
        <div className="flex flex-col items-start justify-start gap-5 mt-10">
          <BigNumbers number={1} label="One" />
          <BigNumbers number={2} label="Two" />
          <BigNumbers number={3} label="Three" />
        </div>
      </div>
    </SideSheetContentContainer>
  );
}
