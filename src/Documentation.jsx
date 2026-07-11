import React from "react";

export default function GT3RSDocumentation() {
  return (<>
    <section className="min-h-screen bg-black text-gray-300 px-6 md:px-20 py-25">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
          Porsche 911 GT3 RS
        </h1>

        <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-12">
          Technical Documentation
        </p>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white border-l-4 border-yellow-500 pl-4 mb-4">
            Overview
          </h2>

          <p className="leading-8 text-gray-400">
            The Porsche 911 GT3 RS represents the pinnacle of naturally
            aspirated performance and motorsport engineering. Developed with
            technologies derived directly from racing, the GT3 RS combines
            lightweight construction, advanced aerodynamics, and precision
            handling to deliver one of the most engaging driving experiences
            available in a production sports car.
          </p>
        </div>

        {/* Objectives */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white border-l-4 border-yellow-500 pl-4 mb-4">
            Objectives
          </h2>

          <ul className="list-disc pl-8 space-y-3 text-gray-400">
            <li>Present the GT3 RS in a premium digital experience.</li>
            <li>Highlight engineering and motorsport heritage.</li>
            <li>Showcase technical specifications.</li>
            <li>Provide an immersive and responsive interface.</li>
            <li>Maintain Porsche-inspired luxury aesthetics.</li>
          </ul>
        </div>

        {/* Specifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white border-l-4 border-yellow-500 pl-4 mb-6">
            Technical Specifications
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="table w-full">
              <tbody>
                <tr>
                  <td className="font-semibold text-white">Model</td>
                  <td>Porsche 911 GT3 RS</td>
                </tr>

                <tr>
                  <td className="font-semibold text-white">Engine</td>
                  <td>4.0L Naturally Aspirated Flat-6</td>
                </tr>

                <tr>
                  <td className="font-semibold text-white">Power</td>
                  <td>518 hp (386 kW)</td>
                </tr>

                <tr>
                  <td className="font-semibold text-white">Torque</td>
                  <td>465 Nm</td>
                </tr>

                <tr>
                  <td className="font-semibold text-white">Transmission</td>
                  <td>7-Speed PDK</td>
                </tr>

                <tr>
                  <td className="font-semibold text-white">Drive Type</td>
                  <td>Rear-Wheel Drive</td>
                </tr>

                <tr>
                  <td className="font-semibold text-white">Top Speed</td>
                  <td>296 km/h</td>
                </tr>

                <tr>
                  <td className="font-semibold text-white">0-100 km/h</td>
                  <td>3.2 Seconds</td>
                </tr>

                <tr>
                  <td className="font-semibold text-white">Weight</td>
                  <td>Approximately 1,450 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Engineering */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white border-l-4 border-yellow-500 pl-4 mb-4">
            Engineering Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                Naturally Aspirated Engine
              </h3>

              <p className="text-gray-400 leading-7">
                A high-revving 4.0-litre flat-six engine delivers instant
                throttle response and an unforgettable driving experience.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                Active Aerodynamics
              </h3>

              <p className="text-gray-400 leading-7">
                Large rear wing, front splitter, and active aero elements
                maximize downforce and stability.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                Lightweight Construction
              </h3>

              <p className="text-gray-400 leading-7">
                Carbon-fibre body panels, lightweight glass, and aluminium
                components reduce mass for improved handling.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                Track-Focused Chassis
              </h3>

              <p className="text-gray-400 leading-7">
                Adjustable suspension and precision steering provide exceptional
                control on both road and race circuits.
              </p>
            </div>

          </div>
        </div>        

        {/* Conclusion */}
        <div className="border-t border-gray-800 pt-10">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Conclusion
          </h2>

          <p className="leading-8 text-gray-400">
            This website showcases the Porsche 911 GT3 RS through an immersive
            and premium digital experience. Built with React, Tailwind CSS, and
            modern UI principles, it highlights the vehicle's engineering,
            performance, and heritage while maintaining a responsive and elegant
            design inspired by Porsche's identity.
          </p>
        </div>

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

    </>
    
  );
}