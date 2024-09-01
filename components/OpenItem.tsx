import classNames from "classnames";
import { Screen, useSideSheet } from "contexts/SideSheetContext";
import { useItemContext } from "contexts/ItemContext";

export function OpenItem({ item }: { item: any }) {
  const { openSideSheet, sideSheetOpen, setCurrentScreen } = useSideSheet();
  const { setSelectedItem } = useItemContext();

  return (
    <div
      className={classNames(
        "flex flex-col items-start justify-center py-3 px-4 bg-surface-containerLow border-structure-outline w-full rounded-[16px]",
      )}
      onClick={() => {
        if (!sideSheetOpen) {
          if (item.status === "NEW") {
            openSideSheet();
            setSelectedItem(item);
            setCurrentScreen(Screen.INPUT);
          } else if (item.status === "OLD") {
            console.log("item", item);
            openSideSheet();
            setSelectedItem(item);
            setCurrentScreen(Screen.DETAILS);
          }
        }
      }}
    >
      <div className="flex flex-row justify-between items-center w-full gap-3">
        <div className="flex flex-row justify-start items-center w-full gap-3">
          <div className="w-[48px] h-[48px] rounded-full bg-surface-containerHigh flex items-center justify-center" />
          <div className="flex flex-col justify-start items-start">
            <p
              className={classNames(
                "text-base font-medium flex flex-row justify-start items-center gap-1",
              )}
            >
              {item?.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
