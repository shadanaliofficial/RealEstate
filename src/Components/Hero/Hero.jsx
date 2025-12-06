import "./Hero.css";

export default function Hero() {
  return (
    <>

      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </section>

      <div className="hero-marquee">
        <span>Launching New Project - Vastu</span>
      </div>
    </>
  );
}
