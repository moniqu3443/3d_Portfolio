import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";  // Ensure this component works correctly with react-three-fiber
import heroBg from "../assets/herobg.png"; // Import the image

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: window.innerWidth < 768 ? 'scroll' : 'fixed', // Disable parallax on mobile
      }}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ebb7ed]" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ebb7ed] hover:scale-110 hover:text-yellow-300 transition-all duration-300">Monique </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-xs smail:text-sm md:text-base`}>
           I have a passion for full-stack development.  <br className="sm:block hidden" />
           See how I bring ideas to life with code and creativity.
          </p>
        </div>
      </div>

      {/* 3D Scene */}
      <ComputersCanvas />

      {/* Scroll Indicator (Moving Rectangle) */}
      <div className="absolute bottom-21 w-full flex justify-center items-center">
        <a
          href="#about"
          className="scroll-link"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;


