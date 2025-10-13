import "./Hero.css";

export default function Hero() {
  return (
    <>
      {/* Fullscreen video */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Smooth marquee (only one text visible at a time) */}
      <div className="hero-marquee">
        <span>Launching New Project - Vastu</span>
      </div>
    </>
  );
}
