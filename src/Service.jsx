import React from "react";

const Service=()=>{
    return(<>
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
  <div className="max-w-5xl text-center">

    <p className="uppercase tracking-[0.5em] text-[#C8A86B] text-sm mb-25">
     
    </p>

    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
      Expert Care
    </h1>

    <h2 className="mt-4 text-3xl md:text-5xl font-light text-gray-300">
      for Extraordinary Machines.
    </h2>

    <div className="w-24 h-[2px] bg-[#C8A86B] mx-auto my-12"></div>

    <p className="max-w-3xl mx-auto text-lg md:text-xl leading-9 text-gray-400">
      Every Porsche is engineered to deliver uncompromising performance.
      At our authorized service centre, certified technicians combine
      cutting-edge diagnostics, genuine Porsche parts, and meticulous
      craftsmanship to preserve the precision, safety, and driving pleasure
      your vehicle was designed to provide.
    </p>

    <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">

    </div>

    <section className="bg-black text-white py-28">
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-20">
      <p className="uppercase tracking-[0.45em] text-[#B18A3D] text-sm">
        Authorized Network
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mt-6">
        Porsche Service Centres
      </h2>

      <div className="w-24 h-px bg-[#B18A3D] mx-auto mt-8"></div>
    </div>

    <div className="divide-y divide-zinc-800">

      {[
        "Delhi NCR",
        "Mumbai",
        "Bengaluru",
        "Chennai",
        "Hyderabad",
        "Ahmedabad",
        "Pune",
        "Kolkata",
        "Chandigarh",
        "Kochi",
      ].map((city) => (
        <div
          key={city}
          className="group flex items-center justify-between py-7 transition-all duration-300 hover:pl-6"
        >
          <h3 className="text-2xl font-light tracking-wide group-hover:text-[#B18A3D] transition">
            {city}
          </h3>

          <span className="text-[#B18A3D] opacity-0 group-hover:opacity-100 transition text-2xl">
           <a href="">→</a> 
          </span>
        </div>
      ))}

    </div>

  </div>
</section>

  </div>
</section>

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

       
    </>)
}

export default Service