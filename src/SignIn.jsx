import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (formData.email.trim() === "") {
      setErrorMessage("Email required.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (formData.password === "") {
      setErrorMessage("Password required.");
      return;
    }

    // Look up the account that was created on the Account/Create Account page
    const storedUsersRaw = localStorage.getItem("users");
    const storedUsers = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];

    const matchedUser = storedUsers.find(
      (user) => user.email.toLowerCase() === formData.email.trim().toLowerCase()
    );

    if (!matchedUser) {
      setErrorMessage("No account found with that email.");
      return;
    }

    if (matchedUser.password !== formData.password) {
      setErrorMessage("Incorrect password.");
      return;
    }

    // Basic "session" — store the logged-in user (without password) and a flag
    const sessionUser = {
      firstName: matchedUser.firstName,
      lastName: matchedUser.lastName,
      email: matchedUser.email,
    };

    if (rememberMe) {
      localStorage.setItem("currentUser", JSON.stringify(sessionUser));
    } else {
      sessionStorage.setItem("currentUser", JSON.stringify(sessionUser));
    }
    localStorage.setItem("isAuthenticated", "true");

    // Redirect after successful sign-in
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-16 text-center">
        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#B8965C]/10 blur-[180px]" />

        {/* Card */}
        <div className="relative w-full max-w-md rounded-3xl border border-[#2a2a2a] bg-[#111111]/90 backdrop-blur-xl p-10 shadow-[0_0_50px_rgba(184,150,92,0.15)]">
          {/* Logo */}
          <div className="hover-3d">
            <figure className="w-60 rounded-2xl mb-40">
              <img
                src="https://i.pinimg.com/736x/6a/29/c2/6a29c2506fec0e5f789c8a9576a008ed.jpg"
                alt="Tailwind CSS 3D hover"
              />
            </figure>
          </div>

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-light uppercase tracking-[0.25em] text-white">
              Porsche ID
            </h1>
            <div className="w-20 h-px bg-[#B8965C] mx-auto my-5"></div>
            <p className="text-sm text-gray-400">
              Sign in to continue your journey.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-7" onSubmit={handleSubmit} noValidate>
            {errorMessage && (
              <div className="text-sm text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2 text-left">
                {errorMessage}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-[#B8965C] mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-transparent border-b border-[#333] py-3 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-[#B8965C]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-[#B8965C] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-[#333] py-3 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-[#B8965C]"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox checkbox-xs border-[#B8965C] checked:bg-[#B8965C] checked:border-[#B8965C]"
                />
                <span className="text-sm text-gray-400">Remember Me</span>
              </label>

              <a
                href="#"
                className="text-sm text-[#B8965C] hover:text-white transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#B8965C] py-4 mt-4 text-black uppercase tracking-[0.3em] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(184,150,92,0.45)]"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex-1 h-px bg-[#2a2a2a]" />
              <span className="text-xs text-gray-500 uppercase tracking-[0.2em]">
                OR
              </span>
              <div className="flex-1 h-px bg-[#2a2a2a]" />
            </div>

            {/* Create Account */}
            <p className="text-center text-sm text-gray-400">
              New to Porsche?{" "}
              <Link
                to="/account"
                className="text-[#B8965C] hover:text-white transition-colors"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="container mx-auto">
        <hr className="border-yellow-500" />
      </div>

      <footer className="bg-gradient-to-b from-zinc-950 via-black to-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <h2
                className="text-3xl tracking-[0.35em] text-yellow-600 mb-4"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                PORSCHE
              </h2>

              <p className="text-sm text-zinc-400 leading-7 max-w-sm">
                Engineering excellence. Timeless design. Precision crafted
                performance for every journey.
              </p>

              <div className="mt-6 w-16 h-[2px] bg-yellow-600"></div>
            </div>

            {/* Services */}
            <div>
              <h3 className="uppercase text-xs tracking-[0.25em] text-yellow-600 mb-6">
                Services
              </h3>

              <ul className="space-y-3 text-zinc-400">
                {[
                  "Vehicle Configuration",
                  "Service Centres",
                  "Test Drive",
                  "Finance Options",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-all duration-300 hover:tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="uppercase text-xs tracking-[0.25em] text-yellow-600 mb-6">
                Company
              </h3>

              <ul className="space-y-3 text-zinc-400">
                {[
                  "About Porsche",
                  "Innovation",
                  "Motorsport",
                  "Careers",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-all duration-300 hover:tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="uppercase text-xs tracking-[0.25em] text-yellow-600 mb-6">
                Connect
              </h3>

              <p className="text-zinc-400 text-sm mb-6 leading-6">
                Follow Porsche and stay connected with the latest launches,
                motorsport news, and exclusive experiences.
              </p>

              <div className="flex gap-4">

                <a href="https://x.com/Porsche?lang=en" className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center hover:border-yellow-600 hover:text-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer">
                  {/* Twitter/X */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a href="https://www.youtube.com/porsche" className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center hover:border-yellow-600 hover:text-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer">
                  {/* YouTube */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>

                <a href="https://www.facebook.com/porsche/" className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center hover:border-yellow-600 hover:text-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer">
                  {/* Facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333c0-.955.192-1.333 1.115-1.333H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>

              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-zinc-500 text-sm tracking-wide">
              © 2026 Porsche Showcase. All Rights Reserved.
            </p>

            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="#" className="hover:text-yellow-600 transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-yellow-600 transition">
                Terms of Service
              </a>

              <a href="#" className="hover:text-yellow-600 transition">
                Cookies
              </a>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}