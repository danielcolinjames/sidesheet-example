import type { Metadata } from "next";
import { CoreProvider } from "../providers/CoreProvider";
import { AppContainer } from "../components/AppContainer";
import "./styles.css";
import { Viewport } from "next/dist/lib/metadata/types/extra-types";

const APP_NAME = "Test";
const APP_DEFAULT_TITLE = "Test";
const APP_TITLE_TEMPLATE = "%s - Test";
const APP_DESCRIPTION = "Test";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CoreProvider>
          <AppContainer>
            <main>{children}</main>
          </AppContainer>
        </CoreProvider>
      </body>
    </html>
  );
}
