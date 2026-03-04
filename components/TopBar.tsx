export default function TopBar() {
  const links = ["Home", "About", "Courses", "Instructor", "Contact"];

  return (
    <header className="w-full bg-white border-b-3 border-black">
      <div className="mx-auto flex  items-stretch ">
        {/* Logo area */}
        <div className="flex items-center gap-2 px-6">
         
          <span className="text-sm font-semibold">Coursefy</span>
        </div>

        {/* Center nav */}
        <nav className="flex flex-1 items-center justify-center border-x-3 border-black  border-black text-sm font-medium">
          {links.map((label) => (
            <button
              key={label}
              className={`px-5 py-4 ${
                label === "Home"
                  ? "font-semibold text-black"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-stretch text-sm font-semibold">
          <button className="px-6 py-4 text-black">Log in</button>
          <button className="bg-black px-6 py-4 text-white">Register</button>
        </div>
      </div>
    </header>
  );
}

