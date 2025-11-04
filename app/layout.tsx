import "../styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pro Networking App Plan",
  description: "Detailed design and development plan for a professional networking platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="container nav">
            <Link href="/" className="logo">ProNet</Link>
            <div className="nav-links">
              <Link href="/plan">Plan</Link>
              <Link href="/feed">Feed</Link>
              <Link href="/chat">Chat</Link>
              <Link href="/jobs">Jobs</Link>
              <Link href="/network">Network</Link>
              <Link href="/notifications">Notifications</Link>
              <Link href="/profile">Profile</Link>
            </div>
          </nav>
        </header>
        <main className="container main-content">{children}</main>
        <footer className="site-footer">
          <div className="container">? {new Date().getFullYear()} ProNet. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
