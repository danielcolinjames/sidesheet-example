"use client";
import React, { useEffect, useState } from "react";
import { useKeyboardHeight } from "../hooks/useKeyboardHeight";

export function AppContainer({ children }: { children: React.ReactNode }) {
  const keyboardHeight = useKeyboardHeight();
  const [appHeight, setAppHeight] = useState("100vh");

  useEffect(() => {
    function updateHeight() {
      const height = `${window.innerHeight - keyboardHeight}px`;
      setAppHeight(height);
      document.documentElement.style.setProperty("--app-height", height);
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [keyboardHeight]);

  return <div style={{ height: appHeight, overflow: "auto" }}>{children}</div>;
}
