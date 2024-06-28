import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">CLONE.ing</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#features" className="text-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="outline">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ by <a href="https://www.softgen.ai/" className="text-primary hover:underline">Softgen</a> under orchestration of <a href="https://x.com/markokraemer" className="text-primary hover:underline">Marko Kraemer</a></p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Layout;