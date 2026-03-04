"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {  Menu, X } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Courses", "Contact"];
  const router = useRouter();

  const handleNavigate = (label: string) => {
    router.push(`/main/${label.toLowerCase()}`);
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white border-b">
      <div className="mx-auto flex items-stretch justify-between px-4 sm:px-6 lg:px-8 h-14">
        {/* Logo area */}
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">Coursefy</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center border-x border-black text-sm font-medium mx-4">
          {links.map((label) => (
            <button
              key={label}
              onClick={() => handleNavigate(label)}
              className={`px-5 py-2 ${
                label === "Home"
                  ? "font-semibold text-black"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-stretch text-sm font-semibold">
          <Link href="/auth/login" className="px-4 py-2 flex items-center justify-center text-black">Log in</Link>
          <Link href="/auth/register" className="bg-black px-4 py-2 flex items-center justify-center  text-white">Register</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex md:hidden items-center justify-center mt-2 w-10 h-10 rounded-md border border-neutral-200 text-black"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Panel (left) */}
          <div className="w-64 bg-white shadow-xl h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="text-base font-semibold">Coursefy</span>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-200 text-black"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2 text-sm font-medium">
              {links.map((label) => (
                <button
                  key={label}
                  onClick={() => handleNavigate(label)}
                  className="block w-full text-left px-3 py-2 rounded-md text-neutral-700 hover:bg-neutral-100"
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="border-t px-4 py-3 flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm font-semibold text-black border border-neutral-200 rounded-md">
                Log in
              </button>
              <button className="flex-1 px-3 py-2 text-sm font-semibold text-white bg-black rounded-md">
                Register
              </button>
            </div>
          </div>

          {/* Backdrop (right) */}
          <button
            className="flex-1 bg-black/40"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </header>
  );
}

