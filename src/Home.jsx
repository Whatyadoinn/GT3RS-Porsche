import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

// Relative timing weights for each panel (kept from the original scroll
// version). These get scaled against the real video duration below.
const TOTAL = 7400;

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    const panels = gsap.utils.toArray(".panel", hero);

    let tl;
    let built = false;

    const buildTimeline = () => {
      if (built) return;
      built = true;

      // Small headroom so the last panel finishes fading out slightly
      // before the video actually loops back to frame 0.
      const duration = Math.max(video.duration - 0.5, 1);
      const scale = duration / TOTAL;

      tl = gsap.timeline({ defaults: { ease: "none" } });

      panels.forEach((panel) => {
        const start = Number(panel.dataset.start) * scale;
        const end = Number(panel.dataset.end) * scale;

        gsap.set(panel, { opacity: 0, y: 80 });

        tl.fromTo(
          panel,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: (end - start) * 0.6, ease: "power1.out" },
          start
        ).to(
          panel,
          { opacity: 0, y: -80, duration: 400 * scale, ease: "power1.in" },
          end
        );
      });
    };

    const unmuteOnInteraction = () => {
      video.muted = false;
      window.removeEventListener("pointerdown", unmuteOnInteraction);
      window.removeEventListener("keydown", unmuteOnInteraction);
    };

    const handleReady = () => {
      buildTimeline();

      // Try to autoplay with sound first.
      video.muted = false;
      video.play().catch(() => {
        // Browser blocked autoplay-with-sound. Fall back to muted
        // autoplay, then unmute as soon as the user interacts with
        // the page (click/tap/keypress), which browsers do allow.
        video.muted = true;
        video.play().catch(() => {
          // Autoplay can be blocked entirely before user interaction;
          // playback (and the text) will start once the user interacts.
        });
        window.addEventListener("pointerdown", unmuteOnInteraction, { once: true });
        window.addEventListener("keydown", unmuteOnInteraction, { once: true });
      });
    };

    const handleEnded = () => {
      // Text plays through once only. From here on the video just keeps
      // looping quietly with no text over it.
      tl && tl.kill();
      gsap.set(panels, { opacity: 0, y: 80 });
      video.currentTime = 0;
      video.play();
    };

    if (video.readyState >= 1) {
      handleReady();
    } else {
      video.addEventListener("loadedmetadata", handleReady, { once: true });
    }

    // No native `loop` attribute on the <video> - looping manually here
    // is what lets us detect "ended" and stop the text after one pass.
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("ended", handleEnded);
      window.removeEventListener("pointerdown", unmuteOnInteraction);
      window.removeEventListener("keydown", unmuteOnInteraction);
      tl && tl.kill();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <video
        ref={videoRef}
        playsInline
        preload="auto"
        src="public/porsche.mp4"
      />

      {/* INTRO */}
      <div className="panel left" data-start="0" data-end="800">
        <h1>PORSCHE 911 GT3</h1>
        <h2>Built for Purists.</h2>
        <p>Every line exists for one purpose: Performance.</p>
      </div>

      {/* POWER */}
      <div className="panel right" data-start="900" data-end="1700">
        <span className="small">POWER</span>
        <h1>510 PS</h1>
        <p>0-100 km/h</p>
        <h2>3.4 s</h2>
        <p>Top Speed</p>
        <h2>318 km/h</h2>
      </div>

      {/* AERO */}
      <div className="panel left" data-start="1900" data-end="2900">
        <h2>AERODYNAMICS</h2>
        <p>
          Swan Neck Rear Wing
          <br />
          Double-Wishbone Front Axle
          <br />
          Motorsport-Derived Underbody
        </p>
      </div>

      {/* ENGINEERING */}
      <div className="panel center" data-start="3100" data-end="4200">
        <h1>
          Naturally Aspirated.
          <br />
          Nine Thousand RPM.
        </h1>
      </div>

      {/* DRIVER */}
      <div className="panel right" data-start="4500" data-end="5700">
        <h2>Driver Focused</h2>
        <h1>Every Detail.</h1>
        <p>A connection between driver and machine.</p>
      </div>

      {/* OUTRO */}
      {/* <div className="panel left" data-start="6000" data-end="7000">
        <h1>
          A Legacy
          <br />
          that keeps evolving.
        </h1>
        <button>Explore More →</button>
      </div> */}
    </section>
  );
}