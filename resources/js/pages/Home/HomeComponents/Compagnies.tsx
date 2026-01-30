
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  SiGoogle,
  SiAmazon,
  SiApple,
  SiMeta,
  SiNetflix,
  SiTesla,
  SiAdobe,
  SiSamsung,
  SiIntel,
} from 'react-icons/si';

// Icône personnalisée pour Microsoft
const MicrosoftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-10 w-10 text-gray-300 md:h-12 md:w-12"
  >
    <path d="M0 0h11.999v11.999H0V0zm12.001 0H24v11.999h-11.999V0zm0 12.001H24V24h-11.999v-11.999zm-12.001 0H0V24h11.999v-11.999z" />
  </svg>
);

const companies = [
  { name: 'Google', icon: SiGoogle },
  { name: 'Amazon', icon: SiAmazon },
  { name: 'Microsoft', icon: MicrosoftIcon },
  { name: 'Apple', icon: SiApple },
  { name: 'Meta', icon: SiMeta },
  { name: 'Netflix', icon: SiNetflix },
  { name: 'Tesla', icon: SiTesla },
  { name: 'Adobe', icon: SiAdobe },
  { name: 'Samsung', icon: SiSamsung },
  { name: 'Intel', icon: SiIntel },
];

const Companies = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isHovered]);

  const logos = [...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden bg-[#030215] py-10">
      <motion.div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={controls}
        className="flex w-max items-center gap-10 px-4 md:gap-16 md:px-8"
      >
        {logos.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={`${c.name}-${i}`}
              className="flex flex-col items-center justify-center"
            >
              <Icon className="h-10 w-10 text-gray-300 transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl md:h-12 md:w-12" />
              <span className="mt-2 text-xs font-medium text-gray-300 md:text-sm">
                {c.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Companies;
