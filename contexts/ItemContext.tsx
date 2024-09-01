import React, {
  createContext,
  useContext,
  useState,
} from "react";
import { ItemContextType } from "./ItemContextTypes";

export const ItemContext = createContext<ItemContextType | undefined>(
  undefined
);

export function ItemProvider({ children }: { children: React.ReactNode }) {
  const oldItems: any[] = [
    {
      title: "Test two",
      status: "OLD",
      "totals": {
        "total": {
          "value": 0,
          "currency": "USD"
        },
        "subtotal": {
          "value": 0,
          "currency": "USD"
        },
        "gratuity": {
          "value": 0,
          "currency": "USD"
        },
      },
    },
  ];
  const newItems: any[] = [
    {
      "id": "91a065f4-5516-4300-a1ff-29693e46a51d",
      "status": "NEW",
      "title": "Test",
      "createdAt": "2024-08-30T03:02:34.305881Z",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const contextValue: ItemContextType = {
    selectedItem,
    setSelectedItem,
    newItems,
    oldItems,
  };

  return (
    <ItemContext.Provider value={contextValue}>
      {children}
    </ItemContext.Provider>
  );
}

export const useItemContext = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItemContext must be used within a ItemProvider");
  }
  return context;
};
