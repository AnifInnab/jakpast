import { useEffect, useState } from "react";

export default function useCountdown(initialTime: number) {
    const [time, setTime] = useState(initialTime);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1000 : 0));
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const formattedTime = new Date(time).toISOString().substr(14, 5);
  
    return {formattedTime, time};
  }