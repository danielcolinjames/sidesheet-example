import React, { useEffect } from "react";
import { InputScreen } from "./screens/InputScreen";
import { ReviewScreen } from "./screens/ReviewScreen";
import { ConfirmScreen } from "./screens/ConfirmScreen";
import { Screen, useSideSheet } from "contexts/SideSheetContext";
import { SettingsScreen } from "./screens/SettingsScreen";
import { DetailsScreen } from "./screens/DetailsScreen";

export const ScreenRouter = () => {
  const { currentScreen, setPreviousScreen } = useSideSheet();

  useEffect(() => {
    switch (currentScreen) {
      case Screen.INPUT:
        setPreviousScreen(null);
        break;
      case Screen.CONFIRM:
        setPreviousScreen(Screen.INPUT);
        break;
      case Screen.REVIEW:
        setPreviousScreen(null);
        break;
      case Screen.SETTINGS:
        setPreviousScreen(null);
        break;
      case Screen.DETAILS:
        setPreviousScreen(null);
        break;
    }
  }, [currentScreen, setPreviousScreen]);

  switch (currentScreen) {
    case Screen.INPUT:
      return <InputScreen />;
    case Screen.CONFIRM:
      return <ConfirmScreen />;
    case Screen.REVIEW:
      return <ReviewScreen />;
    case Screen.SETTINGS:
      return <SettingsScreen />;
    case Screen.DETAILS:
      return <DetailsScreen />;
    default:
      return null;
  }
};
