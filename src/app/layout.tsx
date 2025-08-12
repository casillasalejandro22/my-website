import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Alejandro Casillas | Portfolio",
  description: "Computer Science Student | Projects & Experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 py-8">
          {children}
        </main>
        <footer className="mt-8 border-t border-[color-mix(in_oklab,#cbd5e1_70%,var(--color-primary)_30%)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 text-xs sm:text-sm opacity-80">
            <p>© {new Date().getFullYear()} Alejandro Casillas • Built with Next.js & Tailwind</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
