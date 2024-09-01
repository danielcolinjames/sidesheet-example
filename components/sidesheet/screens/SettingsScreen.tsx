/* eslint-disable no-console */
import {
  SideSheetContentContainer,
  SideSheetContentHeader,
} from "../SideSheet";
import classNames from "classnames";

export function SettingsScreen() {
  return (
    <SideSheetContentContainer>
      <div className="flex flex-col items-start justify-start gap-5 h-full w-full">
        <SideSheetContentHeader title="Settings" />
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-md text-structure-onSurfaceAlt">User account</p>
          <p className="text-lg text-structure-onSurface">email@email.com</p>
          <button
            className="flex flex-row items-start justify-start px-2 py-1 bg-surface-containerLow rounded-lg"
            onClick={() => {}}
          >
            <p className="text-sm font-medium text-structure-onSurfaceAlt">
              Log out
            </p>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 mt-8">
          <p className="text-md text-structure-onSurfaceAlt">Title</p>
          <div className="flex flex-col items-start justify-start gap-2">
            <p
              className={classNames(
                  "flex flex-row items-center justify-start gap-2 text-md text-structure-onSurface px-2 py-1 rounded-lg",
                  {
                    "bg-surface-containerHighest text-structure-onSurfaceAlt":
                      true,
                "bg-surface-containerLow text-structure-onSurface cursor-pointer":
                  false,
              }
              )}
              onClick={() => {}}
            >
              Name
            </p>
          </div>
        </div>
      </div>
    </SideSheetContentContainer>
  );
}
