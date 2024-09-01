import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";

export enum Screen {
  INPUT = "INPUT",
  CONFIRM = "CONFIRM",
  REVIEW = "REVIEW",
  SETTINGS = "SETTINGS",
  DETAILS = "DETAILS",
}

interface SideSheetContextType {
  sideSheetOpen: boolean;
  closeSideSheet: () => void;
  openSideSheet: () => void;
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  previousScreen: Screen | null;
  setPreviousScreen: (screen: Screen | null) => void;
  sideSheetHeader?: {
    text: string;
    imageUrl?: string;
  };
  setSideSheetHeader: (header: SideSheetContextType["sideSheetHeader"]) => void;
}

const SideSheetContext = createContext<SideSheetContextType | undefined>(
  undefined
);

export const SideSheetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sideSheetOpen, setSideSheetOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.INPUT);
  const [sideSheetHeader, setSideSheetHeader] =
    useState<SideSheetContextType["sideSheetHeader"]>();

  const closeSideSheet = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setSideSheetOpen(false);
    setCurrentScreen(Screen.INPUT);
    setPreviousScreen(null);
  };

  const openSideSheet = () => {
    setSideSheetOpen(true);
  };

  const [previousScreen, setPreviousScreen] = useState<Screen | null>(null);

  return (
    <SideSheetContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        sideSheetOpen,
        closeSideSheet,
        openSideSheet,
        previousScreen,
        setPreviousScreen,
        setSideSheetHeader,
        sideSheetHeader,
      }}
    >
      {children}
    </SideSheetContext.Provider>
  );
};

export const useSideSheet = () => {
  const context = useContext(SideSheetContext);
  if (context === undefined) {
    throw new Error("useSideSheet must be used within a SideSheetProvider");
  }
  return context;
};
