import { Outfit } from "next/font/google";
import "./globals.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { TenantProvider } from "@/lib/tenant/context";
import { WorkspaceProvider } from "@/lib/workspace/context";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <TenantProvider>
            <WorkspaceProvider>
              <SidebarProvider>{children}</SidebarProvider>
            </WorkspaceProvider>
          </TenantProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
