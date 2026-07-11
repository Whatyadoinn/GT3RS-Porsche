import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={` navbar fixed top-0 left-0 right-0 z-[200] text-white transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-md"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"

              style={{color:"#C9A227"}}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-black/80 backdrop-blur-md text-white rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/service">Service Centres</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        
  <Link
    to="/"
    className="text-3xl font-light tracking-[0.45em] uppercase"
    style={{
      color: "#C9A227",
      fontFamily: "'Helvetica Neue', sans-serif",
    }}
  >
    PORSCHE
  </Link>
</div>

      <div className="navbar-end gap-2">
       
        {/* Search Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C9A227" className="bi bi-search mr-5" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;