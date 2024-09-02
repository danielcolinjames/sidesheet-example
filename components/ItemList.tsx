import React, { useState } from "react";
import { OpenItem } from "./OpenItem";
import { useItemContext } from "contexts/ItemContext";
import classNames from "classnames";

enum ItemStatus {
  NEW = "NEW",
  OLD = "OLD",
}

export const ItemList = () => {
  const { newItems, oldItems } = useItemContext();
  const [activeItem, setActiveItem] = useState<ItemStatus>(ItemStatus.NEW);

  const handleItemChange = (item: ItemStatus) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full" style={{ overscrollBehavior: "none" }}>
      <div className="bg-surface-containerLowest flex flex-col items-center justify-center w-full sticky top-[42px] z-20 p-2">
        <div className="flex w-full bg-surface-containerLow rounded-full p-1 max-w-lg mx-auto">
          <button
            className={classNames("w-1/2 p-1 rounded-full", {
              "bg-surface-containerLowest text-structure-onSurface":
                activeItem === ItemStatus.NEW,
              "text-structure-onSurfaceAlt": activeItem === ItemStatus.OLD,
            })}
            onClick={() => handleItemChange(ItemStatus.NEW)}
          >
            <p className="text-sm">New</p>
          </button>
          <button
            className={classNames("w-1/2 py-1 rounded-full", {
              "bg-surface-containerLowest text-structure-onSurface":
                activeItem === ItemStatus.OLD,
              "text-structure-onSurfaceAlt": activeItem === ItemStatus.NEW,
            })}
            onClick={() => handleItemChange(ItemStatus.OLD)}
          >
            <p className="text-sm">Old</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 pt-2 max-w-lg mx-auto">
        {activeItem === ItemStatus.NEW
          ? newItems.map((item) => (
            <OpenItem key={item?.id} item={item} />
          ))
          : oldItems.map((item) => (
            <OpenItem key={item?.id} item={item} />
          ))}
      </div>
    </div>
  );
};
