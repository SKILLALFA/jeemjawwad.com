
import { FadeIn } from './components/FadeIn';
import { AnimatedHeading } from './components/AnimatedHeading';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col text-white bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" type="video/mp4" />
      </video>

      {/* Navbar Wrapper */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-6">
        {/* Navbar */}
        <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">VEX</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="transition-colors hover:text-gray-300">Story</a>
            <a href="#" className="transition-colors hover:text-gray-300">Investing</a>
            <a href="#" className="transition-colors hover:text-gray-300">Building</a>
            <a href="#" className="transition-colors hover:text-gray-300">Advisory</a>
          </div>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 flex-1 flex flex-col justify-end">
        <div className="lg:grid lg:grid-cols-2 lg:items-end w-full">
          {/* Left Column */}
          <div className="mb-8 lg:mb-0">
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4 mb-4">
                <button disabled className="bg-white text-black animate-glow cursor-not-allowed px-8 py-3 rounded-lg font-medium">
                  Coming Soon
                </button>
              </div>
            </FadeIn>

            <AnimatedHeading 
              text={`Shaping tomorrow\nwith vision and action.`}
              className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
              style={{ letterSpacing: '-0.04em' }}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="text-sm min-[400px]:text-base md:text-lg text-gray-300 whitespace-normal xl:whitespace-nowrap max-w-2xl">
                We back visionaries and craft ventures that define what comes next.
              </p>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="flex items-end justify-start lg:justify-end">
            <FadeIn delay={1400} duration={1000}>
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-lg md:text-xl lg:text-2xl font-light">
                  Investing. Building. Advisory.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
