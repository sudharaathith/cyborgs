import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "10/21/2023";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Counter = () => {
  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex items-center rounded-xl m-auto bg-transparent">
      <CountdownItem delay={0.1} num={remaining.days} text="DAYS" />
      <CountdownItem delay={0.2} num={remaining.hours} text="HOURS" />
      <CountdownItem delay={0.3} num={remaining.minutes} text="MINUTES" />
      <CountdownItem delay={0.4} num={remaining.seconds} text="SECONDS" />
    </div>
  );
};

const CountdownItem = ({ num, text, delay }) => {
  return (
    <motion.div
      className="font-mono w-1/4 h-24 md:h-36 flex flex-col gap-1 rounded-xl md:gap-2 items-center justify-center border-r-[1px] border-transparent last:border-none bg-black"
      initial={{ rotateX: -90, y: -100 }}
      whileInView={{ rotateX: 0, y: 0, transition: { delay: 0.5 + delay } }}
      viewport={{ once: true }}
    >
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl md:text-4xl font-[TrigramLight] lg:text-6xl xl:text-7xl text-orange-600 font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light text-white">
        {text}
      </span>
    </motion.div>
  );
};

export default Counter;
