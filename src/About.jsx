import React from "react";

 const About=()=>{
    return(<>
      <div className="hero bg-base-200 min-h-screen ">
     <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8YaqjhVaqUnxNYibOygnMomWohPYLOLWLu5KWmlNF-AowYs2J4VNCjuF&s=10"
      className="max-w-md rounded-lg shadow-2xl mr-5" style={{boxShadow:"0 5px 45px white"}} 
    />
    <div>
      <h1 className="text-5xl font-bold ">About Porsche</h1>

      <h2 className="text-xl font-bold mt-6">Engineering is more than performance. <br/>
        It is precision, emotion, and an uncompromising pursuit of perfection.</h2>

      <p className="py-6">
       For more than seven decades, Porsche has created sports cars that combine everyday usability with extraordinary performance. Every curve, every line, and every component is designed with purpose, resulting in machines that deliver an unmistakable driving experience.

       From legendary racetracks to scenic mountain roads, Porsche continues to redefine what it means to drive, blending timeless design with cutting-edge innovation.
      </p>

    </div>
  </div>
</div>

    {/* Timeline */}

<section className="w-full bg-black text-white py-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-light tracking-[0.3em] uppercase text-[#C9A227]">
        Our Legacy
      </h2>

      <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
        More than seventy-five years of engineering excellence, innovation,
        and motorsport dominance. Every Porsche is built with one philosophy:
        to create the perfect sports car.
      </p>
    </div>

    <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">

      {/* 1948 */}
      <li>
        <div className="timeline-middle bg-black border-2 border-[#C9A227] rounded-full p-2 text-[#C9A227]">
          ✓
        </div>

        <div className="timeline-start mb-12 md:text-end bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
          <time className="text-[#C9A227] font-semibold tracking-widest uppercase">
            1948
          </time>

          <h3 className="text-2xl font-semibold mt-3">
            The Beginning
          </h3>

          <p className="text-gray-400 mt-3 leading-7">
            Porsche introduced the legendary 356, the company's first
            production sports car. Lightweight, agile, and beautifully
            engineered—it laid the foundation for everything that followed.
          </p>
        </div>

        <hr className="bg-[#C9A227]" />
      </li>

      {/* 1964 */}
      <li>
        <hr className="bg-[#C9A227]" />

        <div className="timeline-middle bg-black border-2 border-[#C9A227] rounded-full p-2 text-[#C9A227]">
          ✓
        </div>

        <div className="timeline-end mb-12 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
          <time className="text-[#C9A227] font-semibold tracking-widest uppercase">
            1964
          </time>

          <h3 className="text-2xl font-semibold mt-3">
            The Icon is Born
          </h3>

          <p className="text-gray-400 mt-3 leading-7">
            The Porsche 911 made its debut, redefining sports cars forever.
            Decades later, it remains one of the most recognizable automotive
            icons in history.
          </p>
        </div>

        <hr className="bg-[#C9A227]" />
      </li>

      {/* 1970 */}
      <li>
        <hr className="bg-[#C9A227]" />

        <div className="timeline-middle bg-black border-2 border-[#C9A227] rounded-full p-2 text-[#C9A227]">
          ✓
        </div>

        <div className="timeline-start mb-12 md:text-end bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
          <time className="text-[#C9A227] font-semibold tracking-widest uppercase">
            30,000+
          </time>

          <h3 className="text-2xl font-semibold mt-3">
            Motorsport Excellence
          </h3>

          <p className="text-gray-400 mt-3 leading-7">
            Porsche has secured more than 30,000 victories in motorsport,
            proving that race-track innovation directly shapes every road car.
          </p>
        </div>

        <hr className="bg-[#C9A227]" />
      </li>

      {/* 75 Years */}
      <li>
        <hr className="bg-[#C9A227]" />

        <div className="timeline-middle bg-black border-2 border-[#C9A227] rounded-full p-2 text-[#C9A227]">
          ✓
        </div>

        <div className="timeline-end mb-12 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
          <time className="text-[#C9A227] font-semibold tracking-widest uppercase">
            75+
          </time>

          <h3 className="text-2xl font-semibold mt-3">
            Years of Innovation
          </h3>

          <p className="text-gray-400 mt-3 leading-7">
            Every generation of Porsche pushes engineering further while
            preserving the unmistakable DNA that enthusiasts recognize
            instantly.
          </p>
        </div>

        <hr className="bg-[#C9A227]" />
      </li>

      {/* Today */}
      <li>
        <hr className="bg-[#C9A227]" />

        <div className="timeline-middle bg-black border-2 border-[#C9A227] rounded-full p-2 text-[#C9A227]">
          ✓
        </div>

        <div className="timeline-start md:text-end bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
          <time className="text-[#C9A227] font-semibold tracking-widest uppercase">
            Today
          </time>

          <h3 className="text-2xl font-semibold mt-3">
            The Future of Performance
          </h3>

          <p className="text-gray-400 mt-3 leading-7">
            From the legendary 911 GT3 RS to the all-electric Taycan, Porsche
            continues to blend heritage with innovation, delivering
            uncompromising performance for generations to come.
          </p>
        </div>
      </li>

    </ul>
  </div>
</section>

    {/* Quote */}

   <section
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://porschepictures.flowcenter.de/pmdb/thumbnail.cgi?id=320329&w=1935&h=1089&crop=1&public=1&cs=34a381fc77a27027')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl px-8 text-center text-white">
    <p className="uppercase tracking-[0.4em] text-[#C8A86B] text-sm mb-5">
      Porsche Philosophy
    </p>

    <h1 className="text-5xl md:text-7xl font-black leading-tight">
      We Build Cars That
      <span className="block text-[#C8A86B]">
        Ignite Passion.
      </span>
    </h1>

    <p className="mt-8 mx-auto max-w-3xl text-lg md:text-xl text-gray-300 leading-9">
      Every Porsche is engineered to awaken emotion, inspire confidence,
      and transform every journey into something unforgettable. Precision,
      performance, and timeless design come together to create an experience
      beyond transportation.
    </p>
  </div>
</section>

{/* Second Section */}
<section className="bg-black text-white py-40 px-6">
  <div className="max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[0.5em] text-[#C8A86B] text-sm mb-6">
      More Than A Car
    </p>

    <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">
      Every Drive
      <br />
      Has a Purpose.
    </h2>

    <div className="w-24 h-0.5 bg-[#C8A86B] mx-auto mb-12"></div>

    <p className="text-lg md:text-xl text-gray-300 leading-10">
      Owning a Porsche is about embracing a philosophy of precision,
      innovation, and performance. It is an experience defined not only by
      speed, but by the feeling behind every corner, every acceleration,
      and every destination.
    </p>

    <p className="mt-10 text-lg md:text-xl text-gray-400 leading-10">
      Every detail is engineered with intent. Every curve is shaped by
      purpose. Every journey becomes a celebration of craftsmanship,
      confidence, and timeless design.
    </p>

    <button className="mt-16 border border-[#C8A86B] px-10 py-4 uppercase tracking-[0.3em] text-[#C8A86B] transition-all duration-500 hover:bg-[#C8A86B] hover:text-black">
      Explore Porsche
    </button>

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

export default About