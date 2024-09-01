/* eslint-disable no-console */
import Image from "next/image";
import SideSheet from "./sidesheet/SideSheet";
import { ItemList } from "./ItemList";
import { ScreenRouter } from "./sidesheet/SideSheetScreenRouter";
import { useSideSheet, Screen } from "contexts/SideSheetContext";
import { Menu, SwapVert } from "@mui/icons-material";
import classNames from "classnames";

export default function Home() {
  const { setCurrentScreen } = useSideSheet();
  const { openSideSheet } = useSideSheet();

  const handleSettings = () => {
    openSideSheet();
    setCurrentScreen(Screen.SETTINGS);
  };

  const handleOrder = () => {
    console.log("handleOrder");
  };

  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="sticky top-0 flex flex-row items-center justify-between w-full px-4 pt-3 pb-1 bg-surface-containerLowest z-10">
        <button onClick={handleSettings}>
          <Menu style={{ color: "white" }} />
        </button>
        <div className="flex flex-col items-center justify-center gap-0.5">
          <div
            style={{ width: 125.53, height: 12 }}
            className="w-[125.53px] h-[12px]"
          />
        </div>
        <button onClick={handleOrder}>
          <SwapVert style={{ color: "white" }} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <ItemList />
      </div>
      <SideSheet>
        <ScreenRouter />
      </SideSheet>
      <div className="flex flex-row justify-center items-center min-h-[6px] fixed bottom-0 bg-surface-containerLowest w-full">
        <div
          className={classNames("flex flex-row items-center w-[130px]", {
            "justify-center": false,
            "justify-start": true,
          })}
        >
          <div
            className={classNames("rounded-full p-[3px] mr-1.5", {
              "bg-extension-success": true,
              hidden: false,
            })}
          />
          <p className="text-[9px] text-structure-onSurfaceAlt/60">
            Online
          </p>
        </div>
      </div>
    </div>
  );
}
