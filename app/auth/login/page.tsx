"use client";

import { useState } from "react";

function Field({
  label,
  type = "text",
  name,
  placeholder,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label htmlFor={name} className="font-semibold text-black">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-10 border-2 border-black bg-white px-3 text-sm outline-none focus:bg-[#fff7d6]"
      />
    </div>
  );
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#33e1cd] border-t-4 border-black flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-md border-2 border-black bg-[#ffc928] p-6 shadow-[10px_10px_0_#000]">
        <h1 className="text-2xl font-extrabold text-black sm:text-3xl">
          Log in
        </h1>
        <p className="mt-2 text-sm text-black/80">
          Welcome back. Enter your details to access your Coursefy account.
        </p>

        <form className="mt-6 space-y-4">
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />

          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="password" className="font-semibold text-black">
              Password
            </label>
            <div className="flex items-stretch border-2 border-black bg-white">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="h-10 flex-1 bg-transparent px-3 text-sm outline-none focus:bg-[#fff7d6]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="flex items-center px-3 text-xs font-semibold border-l-2 border-black bg-[#ffe47a] hover:bg-[#ffd84a]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center border-2 border-black bg-[#29e3dd] px-6 py-2 text-sm font-semibold text-black shadow-[4px_4px_0_#000]"
          >
            Continue
          </button>
        </form>
      </section>
    </main>
  );
}

