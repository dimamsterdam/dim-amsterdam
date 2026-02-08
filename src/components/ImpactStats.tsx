
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  delay: number;
}

const AnimatedStat = ({ value, numericValue, suffix, label, delay }: StatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 30;
      const stepTime = duration / steps;
      let current = 0;
      const interval = setInterval(() => {
        current++;
        setCount(Math.round((current / steps) * numericValue));
        if (current >= steps) {
          setCount(numericValue);
          clearInterval(interval);
        }
      }, stepTime);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, numericValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-display font-bold text-primary">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground mt-2 text-sm md:text-base">{label}</p>
    </motion.div>
  );
};

const stats = [
  { value: "30+", numericValue: 30, suffix: "+", label: "Jaar ervaring", delay: 0 },
  { value: "100+", numericValue: 100, suffix: "+", label: "Trajecten begeleid", delay: 150 },
  { value: "8", numericValue: 8, suffix: "", label: "Ministeries als opdrachtgever", delay: 300 },
];

const ImpactStats = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
